import React from 'react';
import { 
  Search, 
  Settings, 
  Bell, 
  FolderPlus, 
  FilePlus, 
  ChevronDown, 
  ChevronRight, 
  Folder, 
  FileText, 
  Cloud, 
  Bold, 
  Italic, 
  Link, 
  Image as ImageIcon, 
  Code 
} from 'lucide-react';

export default function MemoryMemory() {
  return (
    <div className="flex flex-col w-full h-full bg-background">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-8 py-4 border-b border-outline-variant/10 bg-background/80 sticky top-0 z-40 backdrop-blur-xl flex-shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold tracking-widest text-primary font-headline">Naikkelas Memory Explorer</span>
          <div className="h-4 w-[1px] bg-outline-variant/30"></div>
          <span className="text-sm font-label text-on-surface-variant">vault/memories/2024/quantum_entanglement.md</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-on-surface-variant w-4 h-4" />
            <input 
              className="bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-secondary/50 placeholder:text-on-surface-variant/50 outline-none text-on-surface font-body" 
              placeholder="Deep Search Memories..." 
              type="text" 
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all" title="Settings">
              <Settings className="text-secondary w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all relative" title="Notifications">
              <Bell className="text-secondary w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* File Explorer Panel */}
        <div className="w-72 bg-surface flex flex-col border-r border-outline-variant/10 flex-shrink-0">
          <div className="p-6 pb-2 flex items-center justify-between">
            <h2 className="text-sm font-headline font-bold text-on-surface">Vault</h2>
            <div className="flex gap-2">
              <FolderPlus className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
              <FilePlus className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-2">
            <div className="space-y-1">
              <div>
                <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-surface-container-low rounded cursor-pointer group">
                  <ChevronDown className="w-4 h-4 text-primary-fixed-dim" />
                  <Folder className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Daily</span>
                </div>
                <div className="ml-6 space-y-1 border-l border-outline-variant/20 pl-2 mt-1">
                  <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-surface-container-low rounded cursor-pointer group">
                    <FileText className="w-4 h-4 text-on-surface-variant/40" />
                    <span className="text-sm text-on-surface-variant/80 group-hover:text-on-surface">2024-05-20.md</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-2 bg-surface-container-low rounded cursor-pointer group">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">quantum_entanglement.md</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-surface-container-low rounded cursor-pointer group">
                <ChevronRight className="w-4 h-4 text-on-surface-variant/40" />
                <Folder className="w-4 h-4 text-on-surface-variant/60" />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Weekly</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-surface-container-low rounded cursor-pointer group">
                <ChevronRight className="w-4 h-4 text-on-surface-variant/40" />
                <Folder className="w-4 h-4 text-on-surface-variant/60" />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Monthly</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-surface-container-low rounded cursor-pointer group">
                <ChevronRight className="w-4 h-4 text-on-surface-variant/40" />
                <Folder className="w-4 h-4 text-on-surface-variant/60" />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Tasks</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-surface-container-low border-t border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-tertiary/10 rounded-lg">
                <Cloud className="w-4 h-4 text-tertiary" />
              </div>
              <div>
                <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">Sync Status</p>
                <p className="text-xs font-bold text-on-surface">Naikkelas Cloud Sync</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Panel */}
        <div className="flex-1 bg-surface-container-lowest flex flex-col">
          <div className="h-12 flex items-center justify-between px-6 bg-surface-container-low border-b border-outline-variant/10">
            <div className="flex gap-4">
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <Bold className="w-4 h-4" />
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <Italic className="w-4 h-4" />
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <Link className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-4 bg-outline-variant/30 self-center"></div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <ImageIcon className="w-4 h-4" />
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <Code className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">Markdown Mode</span>
              <div className="w-8 h-4 bg-primary/20 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex overflow-hidden">
            <div className="w-12 bg-surface-container-low/50 py-8 flex flex-col items-center text-[10px] font-label text-on-surface-variant/30 select-none border-r border-outline-variant/5">
              <span>01</span><span>02</span><span>03</span><span>04</span><span className="text-primary/50">05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span>
            </div>
            <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
              <pre className="font-mono text-sm leading-relaxed text-on-surface-variant selection:bg-primary/20">
                <span className="text-primary font-bold"># Quantum Entanglement Observation</span>{'\n\n'}
                <span className="text-secondary">**Date:**</span> 2024-05-20{'\n'}
                <span className="text-secondary">**Location:**</span> Personal Knowledge Base{'\n\n'}
                The phenomenon of connected thoughts appears to reflect the way memory fragments are stored in Naikkelas OS.{'\n\n'}
                <span className="text-tertiary">## Key Findings</span>{'\n\n'}
                - Information transfer is instantaneous across your personal knowledge base.{'\n'}
                - Paradoxical state resolution occurs upon "Memory Retrieval" event.{'\n'}
                - No visual degradation noted in long-term cold storage.{'\n\n'}
                <span className="text-outline">```javascript{'\n'}// Verification Hook{'\n'}function verifyConnection(id) {'\n'}  const memory = MemoryMesh.find(id);{'\n'}  return memory.state === 'connected';{'\n'}{'}'}{'\n'}```</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
