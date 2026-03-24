import React from 'react';
import { 
  Droplets, 
  Plus, 
  Activity, 
  CheckCircle2, 
  Dumbbell, 
  BadgeCheck, 
  BookOpen, 
  Timer, 
  PlusCircle, 
  Sun, 
  Eye, 
  Settings, 
  Microscope, 
  CreditCard, 
  TrendingUp, 
  Moon, 
  PhoneOff, 
  Bed 
} from 'lucide-react';

const ScheduleRoutine: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
      <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
        {/* Today's Routine Section */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-1">Active Routines</p>
              <h2 className="font-headline text-xl font-bold text-white leading-none">
                Daily Habits <span className="text-on-surface-variant/40">/</span> <span className="text-primary">05:12:00</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="font-label text-xs text-on-surface-variant mb-1">Overall Progress</p>
              <div className="flex items-center gap-3">
                <span className="font-headline text-base font-bold text-primary">68%</span>
                <div className="w-32 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary shadow-[0_0_10px_rgba(243,255,202,0.4)] w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {/* Task Card 1 */}
            <div className="group flex items-center justify-between p-5 bg-surface-container-low rounded-xl border border-outline-variant/5 hover:bg-surface-container transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium text-white">Hydration Goal</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[41%]"></div>
                    </div>
                    <span className="font-label text-[10px] text-on-surface-variant font-medium">5/12 Units</span>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-lg hover:scale-[1.02] active:scale-95 transition-transform flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Log Intake
              </button>
            </div>
            
            {/* Task Card 2 */}
            <div className="group flex items-center justify-between p-5 bg-surface-container-low rounded-xl border border-outline-variant/5 hover:bg-surface-container transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium text-white">Mindfulness Practice</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[50%]"></div>
                    </div>
                    <span className="font-label text-[10px] text-on-surface-variant font-medium">1/2 Sessions</span>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-surface-container-highest text-secondary border border-secondary/20 font-bold rounded-lg hover:bg-secondary/10 active:scale-95 transition-all flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Done
              </button>
            </div>
            
            {/* Task Card 3 (Completed) */}
            <div className="group flex items-center justify-between p-5 bg-surface-container-lowest/50 rounded-xl border border-outline-variant/10 opacity-60">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium text-on-surface-variant line-through">Physical Exercise</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full"></div>
                    </div>
                    <span className="font-label text-[10px] text-primary font-bold">COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-2 text-primary flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 fill-primary text-surface-container-lowest" />
                <span className="font-bold text-sm tracking-tight">Verified</span>
              </div>
            </div>
            
            {/* Task Card 4 */}
            <div className="group flex items-center justify-between p-5 bg-surface-container-low rounded-xl border border-outline-variant/5 hover:bg-surface-container transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-medium text-white">Deep Reading</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-[15%]"></div>
                    </div>
                    <span className="font-label text-[10px] text-on-surface-variant font-medium">10/60 Mins</span>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-surface-container-highest text-tertiary border border-tertiary/20 font-bold rounded-lg hover:bg-tertiary/10 transition-all flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Start Timer
              </button>
            </div>
          </div>
        </section>
        
        {/* Routine Management Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-headline text-xl font-bold text-white">Routine Templates</h2>
              <p className="font-body text-sm text-on-surface-variant">Manage and configure your automated habits</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 text-primary transition-all font-bold">
              <PlusCircle className="w-5 h-5" />
              Add New Routine
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Template 1 */}
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] px-2 py-0.5 rounded bg-secondary/10 text-secondary font-bold uppercase tracking-wider">Daily</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm text-white font-bold">Morning Routine</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Hydration, Meditation, Light Exposure, Daily Review.</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <Droplets className="w-3 h-3 text-on-surface-variant" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <Activity className="w-3 h-3 text-on-surface-variant" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <Eye className="w-3 h-3 text-on-surface-variant" />
                      </div>
                    </div>
                    <button className="text-[10px] text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 font-bold">
                      <Settings className="w-3 h-3" />
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Template 2 */}
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold uppercase tracking-wider">Weekly</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm text-white font-bold">Weekly Review</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Financial review, goal alignment, and environment optimization.</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <CreditCard className="w-3 h-3 text-on-surface-variant" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-on-surface-variant" />
                      </div>
                    </div>
                    <button className="text-[10px] text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 font-bold">
                      <Settings className="w-3 h-3" />
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Template 3 */}
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-bold uppercase tracking-wider">Daily</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm text-white font-bold">Evening Routine</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Digital detox, sleep hygiene, and next-day planning.</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <PhoneOff className="w-3 h-3 text-on-surface-variant" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-surface-container-low bg-surface-container-highest flex items-center justify-center">
                        <Bed className="w-3 h-3 text-on-surface-variant" />
                      </div>
                    </div>
                    <button className="text-[10px] text-on-surface-variant hover:text-white transition-colors flex items-center gap-1 font-bold">
                      <Settings className="w-3 h-3" />
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add Template Placeholder */}
            <div className="p-6 bg-transparent rounded-xl border border-dashed border-outline-variant/30 hover:border-primary/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all group">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                <Plus className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-on-surface-variant group-hover:text-white transition-colors">Create Template</p>
            </div>
          </div>
        </section>
        
        {/* Routine Stats Footer */}
        <footer className="pt-8 border-t border-outline-variant/10">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-surface-container-lowest/30 rounded-lg">
              <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Weekly Streak</p>
              <p className="font-headline text-xl text-white">12 <span className="text-xs text-secondary font-medium tracking-normal">Days</span></p>
            </div>
            <div className="p-4 bg-surface-container-lowest/30 rounded-lg">
              <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Efficiency Rate</p>
              <p className="font-headline text-xl text-white">94.2%</p>
            </div>
            <div className="p-4 bg-surface-container-lowest/30 rounded-lg">
              <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Tasks Sync</p>
              <p className="font-headline text-xl text-white">08/12</p>
            </div>
            <div className="p-4 bg-surface-container-lowest/30 rounded-lg">
              <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Overall Health</p>
              <p className="font-headline text-xl text-primary">OPTIMAL</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Background Aura */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4"></div>
    </div>
  );
};

export default ScheduleRoutine;
