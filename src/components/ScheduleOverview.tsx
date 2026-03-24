import React from 'react';
import { 
  MoreVertical, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  AlertCircle, 
  Clock 
} from 'lucide-react';

export default function ScheduleOverview() {
  return (
    <div className="flex-1 flex overflow-hidden bg-background">
      <div className="flex-grow p-8 max-w-[1200px] overflow-y-auto custom-scrollbar">
        <div className="space-y-12">
          {/* Section 1: Today's Sequence (Full Width List) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-xl font-bold text-on-surface">Today's Sequence</h2>
              <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Expand All</button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {/* Task Items */}
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-40"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-body text-sm font-medium text-on-surface">Morning Routine</h4>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-wider">08:00 — 09:00</p>
                </div>
                <MoreVertical className="text-outline-variant w-5 h-5" />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border-l-2 border-secondary group hover:bg-surface-container-high transition-colors">
                <div className="w-6 h-6 rounded-full border-2 border-secondary bg-secondary/20 flex items-center justify-center cursor-pointer">
                  <Check className="text-secondary w-4 h-4" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-body text-sm font-medium text-on-surface/50 line-through">Weekly Planning</h4>
                  <p className="font-label text-[10px] text-on-surface-variant/50 tracking-wider">09:30 — 10:15</p>
                </div>
                <MoreVertical className="text-outline-variant w-5 h-5" />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"></div>
                <div className="flex-grow">
                  <h4 className="font-body text-sm font-medium text-on-surface">Project Review</h4>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-wider">11:00 — 12:30</p>
                </div>
                <MoreVertical className="text-outline-variant w-5 h-5" />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"></div>
                <div className="flex-grow">
                  <h4 className="font-body text-sm font-medium text-on-surface">Resource Planning</h4>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-wider">14:00 — 15:00</p>
                </div>
                <MoreVertical className="text-outline-variant w-5 h-5" />
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors"></div>
                <div className="flex-grow">
                  <h4 className="font-body text-sm font-medium text-on-surface">Data Backup</h4>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-wider">16:30 — 17:30</p>
                </div>
                <MoreVertical className="text-outline-variant w-5 h-5" />
              </div>
            </div>
          </section>

          {/* Section 2: Weekly View */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-xl font-bold text-on-surface">Weekly View</h2>
              <div className="flex gap-2">
                <button className="bg-surface-container-high p-1 rounded-lg border border-outline-variant/20 hover:text-primary transition-colors">
                  <ChevronLeft className="w-4 h-4 text-on-surface" />
                </button>
                <button className="bg-surface-container-high p-1 rounded-lg border border-outline-variant/20 hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 text-on-surface" />
                </button>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-6">
              {/* Horizontal Timeline Layout */}
              <div className="grid grid-cols-7 gap-4 min-h-[450px]">
                {/* Monday */}
                <div className="flex flex-col gap-4 border-r border-outline-variant/10 pr-2">
                  <div className="text-center pb-4 border-b border-outline-variant/10">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Mon</p>
                    <p className="font-headline text-xl text-on-surface">12</p>
                  </div>
                  <div className="flex-grow relative flex flex-col gap-3 py-2">
                    {/* Morning */}
                    <div className="bg-[#f3ffca] p-3 rounded-xl flex flex-col justify-between h-32 text-[#516700]">
                      <div className="flex justify-between items-start">
                        <span className="font-body text-xs font-bold leading-tight">Morning Routine</span>
                        <MoreVertical className="w-4 h-4" />
                      </div>
                      <p className="font-label text-[9px] font-bold opacity-70">08:00 - 10:00</p>
                    </div>
                  </div>
                </div>
                
                {/* Tuesday */}
                <div className="flex flex-col gap-4 border-r border-outline-variant/10 pr-2">
                  <div className="text-center pb-4 border-b border-outline-variant/10">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Tue</p>
                    <p className="font-headline text-xl text-on-surface">13</p>
                  </div>
                  <div className="flex-grow relative flex flex-col gap-3 py-2">
                    <div className="mt-32 bg-[#72eff5] p-3 rounded-xl flex flex-col justify-between h-40 text-[#00585b]">
                      <div className="flex justify-between items-start">
                        <span className="font-body text-xs font-bold leading-tight">System Scan</span>
                        <MoreVertical className="w-4 h-4" />
                      </div>
                      <p className="font-label text-[9px] font-bold opacity-70">12:00 - 14:30</p>
                    </div>
                  </div>
                </div>
                
                {/* Wednesday */}
                <div className="flex flex-col gap-4 border-r border-outline-variant/10 pr-2">
                  <div className="text-center pb-4 border-b border-outline-variant/10">
                    <p className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Wed</p>
                    <p className="font-headline text-xl text-primary font-bold">14</p>
                  </div>
                  <div className="flex-grow relative flex flex-col gap-3 py-2">
                    <div className="bg-[#ff91f8] p-3 rounded-xl flex flex-col justify-between h-48 text-[#540056]">
                      <div className="flex justify-between items-start">
                        <span className="font-body text-xs font-bold leading-tight">Sprint Planning</span>
                        <MoreVertical className="w-4 h-4" />
                      </div>
                      <p className="font-label text-[9px] font-bold opacity-70">09:30 - 12:30</p>
                    </div>
                  </div>
                </div>
                
                {/* Thursday */}
                <div className="flex flex-col gap-4 border-r border-outline-variant/10 pr-2">
                  <div className="text-center pb-4 border-b border-outline-variant/10">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Thu</p>
                    <p className="font-headline text-xl text-on-surface">15</p>
                  </div>
                  <div className="flex-grow relative flex flex-col gap-3 py-2">
                    <div className="mt-20 bg-surface-container-high border border-outline-variant/20 p-3 rounded-xl flex flex-col justify-between h-24">
                      <div className="flex justify-between items-start">
                        <span className="font-body text-xs font-medium leading-tight">Idle Mode</span>
                        <MoreVertical className="w-4 h-4 text-on-surface-variant" />
                      </div>
                      <p className="font-label text-[9px] text-on-surface-variant tracking-wider">Buffer</p>
                    </div>
                  </div>
                </div>
                
                {/* Friday */}
                <div className="flex flex-col gap-4 border-r border-outline-variant/10 pr-2">
                  <div className="text-center pb-4 border-b border-outline-variant/10">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Fri</p>
                    <p className="font-headline text-xl text-on-surface">16</p>
                  </div>
                  <div className="flex-grow relative flex flex-col gap-3 py-2">
                    <div className="mt-auto mb-4 bg-[#beee00] p-3 rounded-xl flex flex-col justify-between h-36 text-[#3a4a00]">
                      <div className="flex justify-between items-start">
                        <span className="font-body text-xs font-bold leading-tight">Weekly Review</span>
                        <MoreVertical className="w-4 h-4" />
                      </div>
                      <p className="font-label text-[9px] font-bold opacity-70">16:30 - 18:00</p>
                    </div>
                  </div>
                </div>
                
                {/* Saturday */}
                <div className="flex flex-col gap-4 border-r border-outline-variant/10 pr-2">
                  <div className="text-center pb-4 border-b border-outline-variant/10 opacity-30">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Sat</p>
                    <p className="font-headline text-xl text-on-surface">17</p>
                  </div>
                  <div className="flex-grow relative"></div>
                </div>
                
                {/* Sunday */}
                <div className="flex flex-col gap-4">
                  <div className="text-center pb-4 border-b border-outline-variant/10 opacity-30">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Sun</p>
                    <p className="font-headline text-xl text-on-surface">18</p>
                  </div>
                  <div className="flex-grow relative"></div>
                </div>
              </div>
            </div>
            
            {/* Additional Context Card */}
            <div className="bg-surface-container-high/40 rounded-xl p-6 border border-outline-variant/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
                  <AlertTriangle className="text-tertiary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-on-surface">Schedule Conflict Detected</h4>
                  <p className="font-body text-xs text-on-surface-variant">Please review your upcoming appointments to resolve overlapping events.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* Right Sidebar: Urgent Tasks */}
      <aside className="w-80 bg-surface-container-low/50 border-l border-[#262626]/20 p-8 flex flex-col gap-8 flex-shrink-0 overflow-y-auto custom-scrollbar">
        <div>
          <h2 className="font-headline text-lg font-bold flex items-center gap-2 mb-6 text-on-surface">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            Urgent Tasks
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-error-container/20 border-l-2 border-error">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label text-[9px] text-error font-bold uppercase tracking-widest">Immediate</span>
                <AlertCircle className="text-error w-4 h-4" />
              </div>
              <h4 className="font-body text-sm font-bold text-on-surface mb-1">Pay Credit Card Bill</h4>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">Payment is due today to avoid late fees.</p>
            </div>
            
            <div className="p-4 rounded-xl bg-surface-container-high border-l-2 border-tertiary">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label text-[9px] text-tertiary font-bold uppercase tracking-widest">Within 2h</span>
                <Clock className="text-tertiary w-4 h-4" />
              </div>
              <h4 className="font-body text-sm font-bold text-on-surface mb-1">Client Meeting Prep</h4>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">Review notes for the upcoming vendor meeting.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="bg-[#1a1919] p-4 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <p className="font-label text-[10px] text-primary uppercase tracking-[0.2em] mb-3 relative z-10">Productivity Score</p>
            <div className="flex items-end gap-1 mb-2 relative z-10">
              <div className="w-2 h-4 bg-primary/20 rounded-t-sm"></div>
              <div className="w-2 h-6 bg-primary/40 rounded-t-sm"></div>
              <div className="w-2 h-3 bg-primary/10 rounded-t-sm"></div>
              <div className="w-2 h-8 bg-primary/60 rounded-t-sm"></div>
              <div className="w-2 h-5 bg-primary rounded-t-sm"></div>
              <div className="w-2 h-7 bg-primary/80 rounded-t-sm"></div>
            </div>
            <p className="font-body text-[11px] text-on-surface-variant relative z-10">Focus time: 4h 12m</p>
            <p className="font-body text-[11px] text-on-surface-variant relative z-10">Tasks completed: 12</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
