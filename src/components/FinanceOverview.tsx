import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  TrendingUp, 
  Network, 
  TrendingDown, 
  Shield, 
  Lock, 
  History, 
  CircuitBoard, 
  Brain, 
  GitBranch, 
  Zap, 
  Plus 
} from 'lucide-react';

export default function FinanceOverview() {
  return (
    <div className="flex-1 flex overflow-hidden bg-background relative">
      <div className="flex-grow p-8 max-w-[1200px] overflow-y-auto custom-scrollbar">
        
        {/* Top Section: Accounts Overview */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-headline tracking-tight text-on-surface">Accounts Overview</h2>
            <button className="text-secondary text-sm font-label flex items-center gap-1 hover:underline">
              Manage Accounts <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-4 -mx-2 px-2">
            
            {/* Account Card 1 */}
            <div className="min-w-[300px] bg-surface-container-low p-5 rounded-xl border-l-4 border-primary shadow-2xl flex flex-col justify-between h-40">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest">Main Account</span>
                  <Cpu className="text-primary-dim w-5 h-5" />
                </div>
                <div className="mt-2 text-3xl font-bold font-headline text-on-surface">
                  24,500.00 <span className="text-xs text-primary/60 font-medium">CR</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-1 text-primary-dim text-xs font-label">
                  <TrendingUp className="w-4 h-4" />
                  +12.4%
                </div>
                <div className="h-8 w-24">
                  <svg className="w-full h-full stroke-primary fill-none stroke-2" viewBox="0 0 100 40">
                    <path d="M0 35 Q 20 10, 40 30 T 80 5 T 100 20" strokeLinecap="round"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Account Card 2 */}
            <div className="min-w-[300px] bg-surface-container-low p-5 rounded-xl border-l-4 border-secondary shadow-2xl flex flex-col justify-between h-40">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest">Savings</span>
                  <Network className="text-secondary w-5 h-5" />
                </div>
                <div className="mt-2 text-3xl font-bold font-headline text-on-surface">
                  8,120.45 <span className="text-xs text-secondary/60 font-medium">CR</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-1 text-secondary text-xs font-label">
                  <TrendingDown className="w-4 h-4" />
                  -2.1%
                </div>
                <div className="h-8 w-24 opacity-60">
                  <svg className="w-full h-full stroke-secondary fill-none stroke-2" viewBox="0 0 100 40">
                    <path d="M0 10 Q 25 35, 50 15 T 100 30" strokeLinecap="round"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Account Card 3 */}
            <div className="min-w-[300px] bg-surface-container-low p-5 rounded-xl border-l-4 border-tertiary shadow-2xl flex flex-col justify-between h-40">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest">Investment</span>
                  <Shield className="text-tertiary w-5 h-5" />
                </div>
                <div className="mt-2 text-3xl font-bold font-headline text-on-surface">
                  152,000.00 <span className="text-xs text-tertiary/60 font-medium">CR</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-1 text-tertiary text-xs font-label">
                  <Lock className="w-4 h-4" />
                  Secure
                </div>
                <div className="h-8 w-24">
                  <svg className="w-full h-full stroke-tertiary fill-none stroke-2" viewBox="0 0 100 40">
                    <path d="M0 38 L 100 38" strokeLinecap="round"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Middle Section: Monthly Flux */}
          <section className="lg:col-span-2 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold font-headline text-on-surface">Monthly Flux</h2>
                <p className="text-sm text-on-surface-variant font-label">Income vs Expenses</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs text-primary font-label">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Income
                </span>
                <span className="flex items-center gap-1.5 text-xs text-error font-label">
                  <span className="w-2 h-2 rounded-full bg-error"></span> Expenses
                </span>
              </div>
            </div>
            
            {/* Simple Custom Bar Chart */}
            <div className="flex items-end justify-between h-64 gap-3 px-2">
              <div className="flex-1 flex flex-col items-center gap-2 group">
                <div className="flex items-end gap-1 w-full h-full">
                  <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[60%] rounded-t-sm"></div>
                  <div className="flex-1 bg-error/20 hover:bg-error transition-colors h-[40%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant">W1</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="flex items-end gap-1 w-full h-full">
                  <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-sm"></div>
                  <div className="flex-1 bg-error/20 hover:bg-error transition-colors h-[30%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant">W2</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="flex items-end gap-1 w-full h-full">
                  <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[45%] rounded-t-sm"></div>
                  <div className="flex-1 bg-error/20 hover:bg-error transition-colors h-[70%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant">W3</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="flex items-end gap-1 w-full h-full">
                  <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[95%] rounded-t-sm"></div>
                  <div className="flex-1 bg-error/20 hover:bg-error transition-colors h-[25%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant">W4</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="flex items-end gap-1 w-full h-full">
                  <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[75%] rounded-t-sm"></div>
                  <div className="flex-1 bg-error/20 hover:bg-error transition-colors h-[50%] rounded-t-sm"></div>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant">W5</span>
              </div>
            </div>
          </section>

          {/* Bottom Section: Recent Pulse */}
          <section className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold font-headline text-on-surface">Recent Transactions</h2>
              <History className="text-on-surface-variant cursor-pointer hover:text-white transition-colors w-5 h-5" />
            </div>
            <div className="space-y-4">
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container/50 border border-outline-variant/5 hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                    <CircuitBoard className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-body text-on-surface">Laptop Upgrade</p>
                    <p className="text-[10px] text-on-surface-variant font-label">Oct 24, 2024</p>
                  </div>
                </div>
                <div className="text-sm font-bold font-headline text-error">- 1,240.00</div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container/50 border border-outline-variant/5 hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <Brain className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-body text-on-surface">Software Subscription</p>
                    <p className="text-[10px] text-on-surface-variant font-label">Oct 22, 2024</p>
                  </div>
                </div>
                <div className="text-sm font-bold font-headline text-error">- 49.99</div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container/50 border border-outline-variant/5 hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center">
                    <GitBranch className="text-tertiary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-body text-on-surface">Project Dividend</p>
                    <p className="text-[10px] text-on-surface-variant font-label">Oct 20, 2024</p>
                  </div>
                </div>
                <div className="text-sm font-bold font-headline text-primary">+ 3,500.00</div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container/50 border border-outline-variant/5 hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                    <Zap className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-body text-on-surface">Home Maintenance</p>
                    <p className="text-[10px] text-on-surface-variant font-label">Oct 18, 2024</p>
                  </div>
                </div>
                <div className="text-sm font-bold font-headline text-error">- 120.00</div>
              </div>

            </div>
            <button className="w-full mt-6 py-2 rounded-lg bg-outline-variant/10 text-on-surface-variant text-xs font-label hover:bg-outline-variant/20 transition-all">
              Load More
            </button>
          </section>
        </div>
      </div>

      {/* Floating Action for Quick Transaction */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_20px_rgba(243,255,202,0.4)] flex items-center justify-center hover:scale-110 transition-transform z-50">
        <Plus className="w-6 h-6 font-bold" />
      </button>
    </div>
  );
}
