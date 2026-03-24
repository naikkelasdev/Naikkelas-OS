import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const ScheduleCalendar: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between xl:items-end mb-10 gap-6">
          <div>
            <h1 className="text-xl font-headline font-bold text-on-surface tracking-tighter mb-2 uppercase">
              MONTHLY <span className="text-primary-dim">CALENDAR</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-label text-xs tracking-widest">
              <span className="flex items-center gap-1 uppercase">MARCH 2026</span>
              <span className="text-outline-variant hidden sm:block">|</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span> 14 DAILY HABITS
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary"></span> 08 CORE TASKS
              </span>
            </div>
          </div>
          <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg border border-outline-variant/10 self-start xl:self-auto">
            <button className="p-2 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant hover:text-primary">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-6 py-2 text-xs font-label font-bold uppercase tracking-wider text-on-surface hover:text-primary transition-colors">
              Today
            </button>
            <button className="p-2 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant hover:text-primary">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 border-collapse bg-outline-variant/10 p-px rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
          {/* Days Header */}
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Mon</div>
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Tue</div>
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Wed</div>
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Thu</div>
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Fri</div>
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Sat</div>
          <div className="bg-surface-container-low p-4 text-center text-[10px] font-label font-bold text-on-surface-variant tracking-[0.3em] uppercase">Sun</div>

          {/* Row 1 */}
          <div className="bg-surface min-h-[100px] p-4 opacity-30 border border-outline-variant/5">
            <span className="font-headline text-sm">23</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 opacity-30 border border-outline-variant/5">
            <span className="font-headline text-sm">24</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">01</span>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full bg-tertiary rounded-full opacity-60"></div>
              <div className="h-1.5 w-3/4 bg-primary rounded-full opacity-60"></div>
            </div>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">02</span>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full bg-secondary rounded-full opacity-60"></div>
            </div>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">03</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">04</span>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full bg-primary rounded-full opacity-60"></div>
              <div className="h-1.5 w-1/2 bg-tertiary rounded-full opacity-60"></div>
            </div>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">05</span>
          </div>

          {/* Row 2 */}
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">06</span>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full bg-secondary rounded-full opacity-60"></div>
              <div className="h-1.5 w-full bg-primary rounded-full opacity-60"></div>
            </div>
          </div>
          {/* Selected Day */}
          <div className="bg-surface-container-high min-h-[100px] p-4 border-2 border-primary shadow-[inset_0_0_30px_rgba(243,255,202,0.15)] relative">
            <span className="font-headline text-base text-primary font-bold">07</span>
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full bg-primary rounded-full shadow-[0_0_12px_rgba(243,255,202,0.4)]"></div>
              <div className="h-2 w-full bg-secondary rounded-full shadow-[0_0_12px_rgba(114,239,245,0.4)]"></div>
              <div className="h-2 w-2/3 bg-tertiary rounded-full"></div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></div>
            </div>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">08</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">09</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">10</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">11</span>
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full bg-primary rounded-full opacity-40"></div>
            </div>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary transition-colors">12</span>
          </div>

          {/* Row 3 */}
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">13</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">14</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">15</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">16</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">17</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">18</span>
          </div>
          <div className="bg-surface min-h-[100px] p-4 border border-outline-variant/5 hover:bg-surface-container-low transition-colors group cursor-pointer">
            <span className="font-headline text-sm text-on-surface-variant group-hover:text-primary">19</span>
          </div>
        </div>
      </div>

      {/* Interactive FAB (Contextual) */}
      <button className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center shadow-[0_0_40px_rgba(243,255,202,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 group">
        <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default ScheduleCalendar;
