import React from 'react';
import { 
  Search, 
  Filter, 
  LayoutGrid, 
  MoreVertical, 
  ListFilter, 
  Pin, 
  CheckCircle2, 
  Maximize2, 
  Plus 
} from 'lucide-react';

export default function NotesMyNotes() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background relative">
      {/* Visual Polish: Subtle Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* TopBar Execution */}
      <header className="sticky top-0 z-40 bg-[#0e0e0e]/80 backdrop-blur-xl flex items-center justify-between px-8 h-20 w-full border-b border-[#262626]/10 flex-shrink-0">
        <div className="flex-1 max-w-2xl flex items-center gap-4 bg-surface-container-low px-4 py-2.5 rounded-lg border border-outline-variant/5 focus-within:ring-1 ring-[#72eff5]/30">
          <Search className="text-on-surface-variant w-5 h-5" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant font-body outline-none" 
            placeholder="Search your archive..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-6 ml-8">
          <button className="text-[#adaaaa] hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="text-[#adaaaa] hover:text-white transition-colors">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="text-[#adaaaa] hover:text-white transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Sub-Header & Chips */}
          <section className="px-8 py-6">
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-4 py-1.5 rounded-full text-[11px] font-label font-semibold bg-secondary text-on-secondary uppercase tracking-wider">#JOURNAL</button>
              <button className="px-4 py-1.5 rounded-full text-[11px] font-label font-semibold bg-surface-container-high text-on-surface-variant border border-outline-variant/15 hover:border-secondary/50 transition-colors uppercase tracking-wider">#WORK</button>
              <button className="px-4 py-1.5 rounded-full text-[11px] font-label font-semibold bg-surface-container-high text-on-surface-variant border border-outline-variant/15 hover:border-secondary/50 transition-colors uppercase tracking-wider">#LIFE</button>
              <button className="px-4 py-1.5 rounded-full text-[11px] font-label font-semibold bg-surface-container-high text-on-surface-variant border border-outline-variant/15 hover:border-secondary/50 transition-colors uppercase tracking-wider">#RESEARCH</button>
              <div className="ml-auto flex items-center gap-2 text-on-surface-variant text-xs font-label">
                <ListFilter className="w-4 h-4" />
                <span>LATEST FIRST</span>
              </div>
            </div>
          </section>

          {/* Bento Grid of Notes */}
          <section className="px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Prominent Glass Note */}
              <div className="col-span-1 lg:col-span-2 group relative bg-surface-container-low rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-container-high transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Pin className="text-secondary w-5 h-5 fill-secondary" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded uppercase tracking-tighter">JOURNAL</span>
                    <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase tracking-tighter">ROUTINE</span>
                  </div>
                  <span className="text-[11px] font-label text-on-surface-variant">MAR 24, 2024</span>
                </div>
                <h2 className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-on-surface">Morning Routine V2</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-2xl font-body">
                  Implementation of the new morning habit loop. Initial tests show a 40% reduction in morning grogginess. Re-verify the hydration schedule for high-intensity workout days...
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex -space-x-2">
                    <img alt="Contributor" className="w-6 h-6 rounded-full border border-surface" src="https://picsum.photos/seed/user1/100/100" referrerPolicy="no-referrer" />
                    <img alt="Contributor" className="w-6 h-6 rounded-full border border-surface" src="https://picsum.photos/seed/user2/100/100" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">+2 CONTRIBUTORS</span>
                </div>
              </div>

              {/* Card 2: Vertical Secondary */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-tighter">LIFE</span>
                  <span className="text-[11px] font-label text-on-surface-variant">MAR 22, 2024</span>
                </div>
                <h2 className="font-headline text-xl font-bold mb-3 text-on-surface">Personal Budget Review</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">
                  Adjust allocations for the Q2 home improvement project. Surplus found in leisure categories...
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                    <span className="text-[11px] font-label text-on-surface-variant">80% COMPLETE</span>
                  </div>
                  <Maximize2 className="text-on-surface-variant w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Card 3: Grid Item */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-container-high transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold rounded uppercase tracking-tighter">RESEARCH</span>
                  <span className="text-[11px] font-label text-on-surface-variant">MAR 19, 2024</span>
                </div>
                <h2 className="font-headline text-xl font-bold mb-3 text-on-surface">Project: Bio-Link</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                  Exploration of organic computing substrates for localized LLM execution. Mapping the dendrite pathways...
                </p>
              </div>

              {/* Card 4: Grid Item */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-container-high transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-tighter">WORK</span>
                  <span className="text-[11px] font-label text-on-surface-variant">MAR 18, 2024</span>
                </div>
                <h2 className="font-headline text-xl font-bold mb-3 text-on-surface">Life Architecture 5.0</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                  Moving the daily planning logic to a decentralized setup to improve flexibility during unexpected events...
                </p>
              </div>

              {/* Card 5: Grid Item */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-container-high transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase tracking-tighter">JOURNAL</span>
                  <span className="text-[11px] font-label text-on-surface-variant">MAR 15, 2024</span>
                </div>
                <h2 className="font-headline text-xl font-bold mb-3 text-on-surface">Dream Journal Analytics</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                  Cross-referencing recurrent motifs in subconscious data with active waking projects. High correlation in 'vortex' imagery...
                </p>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(243,255,202,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
        <Plus className="w-6 h-6 font-bold" />
      </button>
    </div>
  );
}
