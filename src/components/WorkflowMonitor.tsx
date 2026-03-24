import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Terminal, ChevronsRight, Brain, ArrowRight, LogOut, FileText, Hourglass, Sparkles, ShieldCheck, Network } from 'lucide-react';

type RequestStatus = 'incoming' | 'checking_session' | 'queued' | 'processing' | 'completed';

interface WorkflowRequest {
  id: string;
  source: 'user' | 'cron';
  userId?: string;
  message?: string;
  status: RequestStatus;
  timestamp: Date;
  logs: string[];
  output?: {
    userResponse: string;
    memoryPayload: string;
  };
}

export default function WorkflowMonitor({ fileSystem }: { fileSystem: any[] }) {
  const [requests, setRequests] = useState<WorkflowRequest[]>([]);
  const [activeRequest, setActiveRequest] = useState<WorkflowRequest | null>(null);

  const addRequest = (source: 'user' | 'cron', message?: string) => {
    const newReq: WorkflowRequest = {
      id: `req_${Math.random().toString(36).substr(2, 9)}`,
      source,
      userId: source === 'user' ? 'tg_user_123' : undefined,
      message: message || (source === 'cron' ? 'Daily Summary Cron' : 'Hello assistant'),
      status: 'incoming',
      timestamp: new Date(),
      logs: [`[${new Date().toISOString()}] Received ${source} request`]
    };
    setRequests(prev => [newReq, ...prev]);
    setActiveRequest(newReq);
    processRequest(newReq);
  };

  const updateRequest = (id: string, updates: Partial<WorkflowRequest>, log?: string) => {
    setRequests(prev => prev.map(req => {
      if (req.id === id) {
        const updated = { ...req, ...updates };
        if (log) {
          updated.logs = [...req.logs, `[${new Date().toISOString()}] ${log}`];
        }
        if (activeRequest?.id === id) setActiveRequest(updated);
        return updated;
      }
      return req;
    }));
  };

  const processRequest = async (req: WorkflowRequest) => {
    const id = req.id;
    const message = req.message || '';
    
    // Simulate Gateway
    await new Promise(r => setTimeout(r, 800));
    updateRequest(id, { status: 'checking_session' }, 'Gateway: Checking session ID and user identity...');
    
    await new Promise(r => setTimeout(r, 1000));
    updateRequest(id, { status: 'queued' }, 'Gateway: Session verified. Added to queue lane.');
    
    // Assistant Workflow
    updateRequest(id, { status: 'processing' }, 'Assistant: Received ASSISTANT_PROMPT.md and user prompt.');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const flattenFS = (nodes: any[]): any[] => {
        let result: any[] = [];
        for (const node of nodes) {
          result.push(node);
          if (node.children) result = result.concat(flattenFS(node.children));
        }
        return result;
      };
      const flatFiles = flattenFS(fileSystem || []);
      const assistantPromptNode = flatFiles.find(f => f.name === 'ASSISTANT_PROMPT.md');
      const assistantPrompt = assistantPromptNode?.content || 'You are a helpful assistant.';

      updateRequest(id, {}, 'Assistant: Looping and reasoning...');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: message,
        config: {
          systemInstruction: assistantPrompt,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              user_response: {
                type: Type.STRING,
                description: 'The response back to the user about the report.'
              },
              memory_sub_assistant_payload: {
                type: Type.STRING,
                description: 'The full workflow stream to pass to the memory sub-assistant.'
              }
            },
            required: ['user_response', 'memory_sub_assistant_payload']
          }
        }
      });

      const jsonStr = response.text?.trim() || '{}';
      const result = JSON.parse(jsonStr);

      updateRequest(id, {}, `Assistant: Tool call executed: memory_sub_assistant()`);
      
      updateRequest(id, { 
        status: 'completed',
        output: {
          userResponse: result.user_response || 'No response generated.',
          memoryPayload: result.memory_sub_assistant_payload || 'No payload generated.'
        }
      }, 'Assistant: Output generated. 1. Response sent to user. 2. Tool call to Memory Sub-Assistant with full stream.');
    } catch (error: any) {
      updateRequest(id, { status: 'completed' }, `Assistant Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden bg-background text-on-surface font-body">
      {/* Secondary Panel: Workflow Monitoring */}
      <aside className="w-80 bg-surface-container-low flex flex-col border-r border-outline-variant/10">
        <div className="p-6 border-b border-outline-variant/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-xs font-bold tracking-[0.3em] text-on-surface-variant uppercase">Incoming Queue</h2>
            <span className="flex h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(114,239,245,0.3)] animate-pulse"></span>
          </div>
          <div className="flex p-1 bg-surface-container-highest rounded-lg">
            <button 
              onClick={() => addRequest('user', 'Summarize the recent team sync from #general and highlight risks.')}
              className="flex-1 py-2 text-[10px] font-bold tracking-widest rounded-md bg-primary text-on-primary shadow-sm uppercase hover:bg-primary/90 transition-colors"
            >
              Input
            </button>
            <button 
              onClick={() => addRequest('cron', 'Daily memory snapshot extraction and archive indexing initiated.')}
              className="flex-1 py-2 text-[10px] font-bold tracking-widest text-on-surface-variant hover:text-on-surface transition-colors uppercase"
            >
              Cron
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {/* Queue Items */}
          {requests.map(req => (
            <div 
              key={req.id}
              onClick={() => setActiveRequest(req)}
              className={`p-4 rounded-xl border-l-2 transition-all cursor-pointer ${activeRequest?.id === req.id ? 'bg-surface-container-high border-primary group hover:bg-surface-container-highest' : 'bg-surface-container border-outline-variant/30 opacity-60 hover:opacity-100'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[9px] font-black font-headline tracking-widest uppercase ${activeRequest?.id === req.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {req.source === 'user' ? 'Messaging: User' : 'Software: Cron'}
                </span>
                <span className="text-[9px] text-on-surface-variant">{req.timestamp.toLocaleTimeString()}</span>
              </div>
              <p className={`text-xs font-medium leading-relaxed ${activeRequest?.id === req.id ? 'text-on-surface' : 'text-on-surface-variant'}`}>{req.message}</p>
              
              {req.status === 'processing' && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                  </div>
                  <span className="text-[9px] font-bold text-primary">66%</span>
                </div>
              )}
            </div>
          ))}

          {requests.length === 0 && (
            <div className="text-center text-on-surface-variant text-xs mt-10 font-body opacity-50">
              No active requests. Trigger one above.
            </div>
          )}

          {/* Decorative data pulse */}
          <div className="pt-10 flex flex-col items-center opacity-20">
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent"></div>
            <span className="text-[8px] font-headline tracking-[0.5em] uppercase mt-4">Buffer Stabilized</span>
          </div>
        </div>
      </aside>

      {/* Main Layout (3-View Stacked) */}
      <section className="flex-1 flex flex-col bg-surface overflow-y-auto custom-scrollbar">
        {activeRequest ? (
          <div className="flex flex-col min-h-full">
            {/* Top Section: WORKFLOW */}
            <div className="min-h-[280px] p-8 flex flex-col border-b border-outline-variant/10 shrink-0">
              <header className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Stream Status</span>
                  <h2 className="text-2xl font-headline font-light tracking-tight mt-1">PROCESS STREAM</h2>
                </div>
                <div className="flex gap-2 text-[10px] font-headline text-on-surface-variant uppercase">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Active</span>
                  <span className="flex items-center gap-1 ml-4"><span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest"></span>Queue</span>
                </div>
              </header>
              <div className="flex items-center justify-between px-10 relative">
                {/* Connection Line Background */}
                <div className="absolute left-20 right-20 top-1/2 h-px bg-surface-container-highest -translate-y-1/2 -z-10"></div>
                <div className={`absolute left-20 top-1/2 h-px bg-gradient-to-r from-primary to-secondary -translate-y-1/2 -z-10 transition-all duration-1000 ${
                  activeRequest.status === 'completed' ? 'w-[calc(100%-10rem)]' : 
                  activeRequest.status === 'processing' ? 'w-1/2' : 'w-0'
                }`}></div>
                
                {/* Stage 1 */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${['incoming', 'checking_session', 'queued', 'processing', 'completed'].includes(activeRequest.status) ? 'bg-surface-container-high border-primary/40 shadow-[0_0_15px_rgba(243,255,202,0.2)]' : 'bg-surface-container border-outline-variant/30'}`}>
                    <Terminal className={`w-6 h-6 ${['incoming', 'checking_session', 'queued', 'processing', 'completed'].includes(activeRequest.status) ? 'text-primary' : 'text-on-surface-variant'}`} />
                  </div>
                  <div className="text-center">
                    <p className={`text-[9px] font-black font-headline tracking-widest uppercase ${['incoming', 'checking_session', 'queued', 'processing', 'completed'].includes(activeRequest.status) ? 'text-primary' : 'text-on-surface-variant'}`}>Assistant Prompt</p>
                    <p className="text-[8px] text-on-surface-variant font-medium uppercase mt-0.5">Builder v4.2</p>
                  </div>
                </div>
                
                {/* Connector 1 */}
                <div className={`flex-1 flex justify-center items-center ${['processing', 'completed'].includes(activeRequest.status) ? '' : 'opacity-30'}`}>
                  <ChevronsRight className={`w-5 h-5 ${activeRequest.status === 'processing' ? 'text-secondary animate-pulse' : 'text-on-surface-variant'}`} />
                </div>
                
                {/* Stage 2 */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border relative overflow-hidden ${['processing', 'completed'].includes(activeRequest.status) ? 'bg-surface-container-high border-secondary shadow-[0_0_10px_rgba(114,239,245,0.3)]' : 'bg-surface-container border-outline-variant/30'}`}>
                    {activeRequest.status === 'processing' && <div className="absolute inset-0 bg-secondary/5 animate-pulse"></div>}
                    <Brain className={`w-8 h-8 ${['processing', 'completed'].includes(activeRequest.status) ? 'text-secondary' : 'text-on-surface-variant'}`} />
                  </div>
                  <div className="text-center">
                    <p className={`text-[9px] font-black font-headline tracking-widest uppercase ${['processing', 'completed'].includes(activeRequest.status) ? 'text-secondary' : 'text-on-surface-variant'}`}>Assistant Working</p>
                    <p className="text-[8px] text-on-surface-variant font-medium uppercase mt-0.5">Software Arch. v1</p>
                  </div>
                </div>
                
                {/* Connector 2 */}
                <div className={`flex-1 flex justify-center items-center ${activeRequest.status === 'completed' ? '' : 'opacity-30'}`}>
                  <ArrowRight className={`w-5 h-5 ${activeRequest.status === 'completed' ? 'text-primary' : 'text-on-surface-variant'}`} />
                </div>
                
                {/* Stage 3 */}
                <div className={`flex flex-col items-center gap-3 ${activeRequest.status === 'completed' ? '' : 'opacity-40'}`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${activeRequest.status === 'completed' ? 'bg-surface-container-high border-primary/40 shadow-[0_0_15px_rgba(243,255,202,0.2)]' : 'bg-surface-container border-outline-variant/30'}`}>
                    <LogOut className={`w-6 h-6 ${activeRequest.status === 'completed' ? 'text-primary' : 'text-on-surface-variant'}`} />
                  </div>
                  <div className="text-center">
                    <p className={`text-[9px] font-black font-headline tracking-widest uppercase ${activeRequest.status === 'completed' ? 'text-primary' : 'text-on-surface-variant'}`}>Final Output</p>
                    <p className="text-[8px] text-on-surface-variant font-medium uppercase mt-0.5">User Relay</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section: AI AGENT ARTIFACT */}
            <div className="min-h-[400px] flex-1 p-8 flex flex-col bg-surface-container-lowest shrink-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-on-surface-variant" />
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Artifact Preview: internal_reasoning.json</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[10px] font-label font-bold text-secondary tracking-widest uppercase">Tokens: {activeRequest.status === 'completed' ? '1,420' : '---'}</span>
                  <span className="text-[10px] font-label font-bold text-primary tracking-widest uppercase">Lat: {activeRequest.status === 'completed' ? '240ms' : '---'}</span>
                </div>
              </div>
              <div className="flex-1 bg-[rgba(38,38,38,0.4)] backdrop-blur-xl rounded-xl border border-outline-variant/10 p-6 font-mono text-[11px] leading-relaxed overflow-y-auto custom-scrollbar">
                {activeRequest.status === 'completed' ? (
                  <div className="text-on-surface whitespace-pre-wrap">
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">01</span><span className="text-secondary">{'{'}</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">02</span><span className="ml-4 text-primary">"intent_class"</span><span className="text-on-surface">:</span> <span className="text-tertiary">"{activeRequest.source === 'user' ? 'user_request' : 'software_cron'}"</span><span className="text-on-surface">,</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">03</span><span className="ml-4 text-primary">"assistant_status"</span><span className="text-on-surface">:</span> <span className="text-secondary">"completed"</span><span className="text-on-surface">,</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">04</span><span className="ml-4 text-primary">"sources"</span><span className="text-on-surface">: [</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">05</span><span className="ml-8 text-tertiary">"memory://user_profile"</span><span className="text-on-surface">,</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">06</span><span className="ml-8 text-tertiary">"software://context"</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">07</span><span className="ml-4 text-on-surface">]</span><span className="text-on-surface">,</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">08</span><span className="ml-4 text-primary">"extracted_logic"</span><span className="text-on-surface">: {'{'}</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">09</span><span className="ml-8 text-primary">"response"</span><span className="text-on-surface">: </span><span className="text-on-surface">"{activeRequest.output?.userResponse?.substring(0, 50)}..."</span><span className="text-on-surface">,</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">10</span><span className="ml-8 text-primary">"memory_payload"</span><span className="text-on-surface">: </span><span className="text-on-surface">"{activeRequest.output?.memoryPayload?.substring(0, 50)}..."</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">11</span><span className="ml-4 text-on-surface">{'}'}</span></div>
                    <div className="flex gap-4"><span className="text-outline-variant/40 select-none text-right w-6">12</span><span className="text-secondary">{'}'}</span></div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-on-surface-variant opacity-50">
                    <Hourglass className="w-10 h-10 text-on-surface-variant mb-4 animate-pulse" />
                    <p className="text-xs uppercase tracking-widest">Awaiting Artifact Generation...</p>
                  </div>
                )}
                
                {/* Floating Data Visual */}
                <div className="mt-8 border-t border-outline-variant/10 pt-4 opacity-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-[9px] uppercase tracking-widest">Live Stream Matrix</span>
                  </div>
                  <div className="flex gap-1 h-12 items-end">
                    <div className="w-1 bg-secondary/40 h-[40%]"></div>
                    <div className="w-1 bg-secondary/60 h-[70%]"></div>
                    <div className="w-1 bg-secondary/80 h-[90%]"></div>
                    <div className="w-1 bg-secondary h-[50%]"></div>
                    <div className="w-1 bg-secondary/40 h-[20%]"></div>
                    <div className="w-1 bg-secondary/60 h-[60%]"></div>
                    <div className="w-1 bg-secondary h-[85%]"></div>
                    <div className="w-1 bg-primary h-[30%]"></div>
                    <div className="w-1 bg-primary/80 h-[45%]"></div>
                    <div className="w-1 bg-primary/40 h-[15%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: FINAL OUTPUT */}
            <div className="min-h-[300px] p-8 flex flex-col bg-surface border-t border-outline-variant/10 shrink-0">
              <header className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeRequest.status === 'completed' ? 'bg-primary' : 'bg-surface-container-high'}`}>
                  <Sparkles className={`w-4 h-4 ${activeRequest.status === 'completed' ? 'text-on-primary' : 'text-on-surface-variant'}`} />
                </div>
                <div>
                  <span className={`text-[9px] font-black font-headline tracking-widest uppercase ${activeRequest.status === 'completed' ? 'text-primary' : 'text-on-surface-variant'}`}>Message Relay</span>
                  <h3 className="text-xs font-bold text-on-surface">{activeRequest.status === 'completed' ? 'SYNOPSIS COMPLETE' : 'AWAITING PROCESS'}</h3>
                </div>
              </header>
              <div className="flex-1 bg-surface-container-low rounded-xl p-6 border border-outline-variant/5 shadow-inner overflow-y-auto custom-scrollbar">
                {activeRequest.status === 'completed' ? (
                  <p className="text-on-surface font-body leading-relaxed text-sm">
                    {activeRequest.output?.userResponse}
                  </p>
                ) : (
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm italic">
                    Output will appear here once the assistant completes its reasoning cycle...
                  </p>
                )}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-2">
                  <button 
                    disabled={activeRequest.status !== 'completed'}
                    className="px-4 py-2 bg-surface-container-high rounded-lg text-[10px] font-bold tracking-widest hover:text-primary transition-colors uppercase border border-outline-variant/10 disabled:opacity-50 disabled:hover:text-on-surface-variant"
                  >
                    Send to User
                  </button>
                  <button 
                    disabled={activeRequest.status !== 'completed'}
                    className="px-4 py-2 bg-surface-container-high rounded-lg text-[10px] font-bold tracking-widest hover:text-primary transition-colors uppercase border border-outline-variant/10 disabled:opacity-50 disabled:hover:text-on-surface-variant"
                  >
                    Copy Artifact
                  </button>
                </div>
                <div className="flex items-center gap-4 text-[10px] text-on-surface-variant uppercase font-headline">
                  <span>Status: {activeRequest.status === 'completed' ? 'Verified' : 'Pending'}</span>
                  <ShieldCheck className={`w-4 h-4 ${activeRequest.status === 'completed' ? 'text-primary' : 'text-on-surface-variant'}`} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-on-surface-variant opacity-50">
            <Network className="w-16 h-16 text-on-surface-variant mb-6" />
            <p className="font-headline text-lg tracking-widest uppercase">Select a request to view its workflow stream</p>
          </div>
        )}
      </section>

      {/* Right Data Gutter */}
      <div className="w-12 bg-[#0e0e0e] border-l border-[#262626]/20 flex flex-col items-center py-8 gap-12 opacity-40">
        <div className="text-[8px] [writing-mode:vertical-lr] tracking-[0.8em] font-headline text-on-surface-variant uppercase">Network Latency High</div>
        <div className="flex-1 flex flex-col justify-center items-center gap-1">
          <div className="w-0.5 h-1 bg-secondary"></div>
          <div className="w-0.5 h-1 bg-secondary"></div>
          <div className="w-0.5 h-1 bg-secondary"></div>
          <div className="w-0.5 h-4 bg-primary"></div>
          <div className="w-0.5 h-1 bg-secondary"></div>
        </div>
        <div className="text-[8px] [writing-mode:vertical-lr] tracking-[0.8em] font-headline text-on-surface-variant uppercase">Cloud Sync Stable</div>
      </div>
    </div>
  );
}

