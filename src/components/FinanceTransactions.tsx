import React from 'react';
import { 
  Filter, 
  Plus, 
  Cloud, 
  Wallet, 
  Zap, 
  Utensils, 
  AlertTriangle, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function FinanceTransactions() {
  return (
    <div className="flex-1 flex overflow-hidden bg-background relative">
      <div className="flex-grow p-8 max-w-[1200px] overflow-y-auto custom-scrollbar">
        
        {/* Summary Header: Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Income Card */}
          <div className="relative overflow-hidden p-8 rounded-xl bg-surface-container-low group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10">
              <p className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">This Month Income</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold font-headline text-primary tracking-tighter">$12,450.00</span>
                <span className="text-primary/60 font-label text-xs">+12.5%</span>
              </div>
            </div>
          </div>

          {/* Expense Card */}
          <div className="relative overflow-hidden p-8 rounded-xl bg-surface-container-low group border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors"></div>
            <div className="relative z-10">
              <p className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">This Month Expense</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold font-headline text-on-surface tracking-tighter">$4,892.44</span>
                <span className="text-on-surface-variant font-label text-xs">-2.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Transaction Log */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold font-headline tracking-tight text-on-surface">Transaction Log</h2>
              <p className="text-on-surface-variant font-label text-sm mt-1">Real-time ledger of all financial activities.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-surface-container-high rounded-lg text-xs font-bold border border-outline-variant/20 hover:bg-surface-variant transition-all flex items-center gap-2 text-on-surface">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold hover:opacity-90 transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Record
              </button>
            </div>
          </div>

          {/* Log Table (High-End Density) */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/50 border-b border-outline-variant/10">
                  <th className="px-6 py-4 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
                  <th className="px-6 py-4 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Description</th>
                  <th className="px-6 py-4 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Category</th>
                  <th className="px-6 py-4 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface font-headline">Oct 24</span>
                      <span className="text-[10px] text-on-surface-variant font-label">09:42 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <Cloud className="text-secondary w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Cloud Storage Subscription</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 rounded bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase font-label">Software</span>
                  </td>
                  <td className="px-6 py-5 text-right font-headline font-bold text-sm text-on-surface">
                    -$49.00
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface font-headline">Oct 23</span>
                      <span className="text-[10px] text-on-surface-variant font-label">04:15 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <Wallet className="text-primary w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Client: Acme Corp</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase font-label">Revenue</span>
                  </td>
                  <td className="px-6 py-5 text-right font-headline font-bold text-sm text-primary">
                    +$5,200.00
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface font-headline">Oct 22</span>
                      <span className="text-[10px] text-on-surface-variant font-label">01:02 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <Zap className="text-tertiary w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Electricity Bill</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 rounded bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-bold uppercase font-label">Infrastructure</span>
                  </td>
                  <td className="px-6 py-5 text-right font-headline font-bold text-sm text-on-surface">
                    -$284.15
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface font-headline">Oct 21</span>
                      <span className="text-[10px] text-on-surface-variant font-label">08:30 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <Utensils className="text-on-surface-variant w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Local Bistro</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 rounded bg-surface-variant border border-outline-variant/30 text-on-surface-variant text-[10px] font-bold uppercase font-label">Personal</span>
                  </td>
                  <td className="px-6 py-5 text-right font-headline font-bold text-sm text-on-surface">
                    -$32.40
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-on-surface font-headline">Oct 20</span>
                      <span className="text-[10px] text-on-surface-variant font-label">11:59 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                        <AlertTriangle className="text-error w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">Health Insurance Premium</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-1 rounded bg-error/10 border border-error/20 text-error text-[10px] font-bold uppercase font-label">Security</span>
                  </td>
                  <td className="px-6 py-5 text-right font-headline font-bold text-sm text-on-surface">
                    -$1,250.00
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Table Footer / Pagination */}
            <div className="px-6 py-4 bg-surface-container-lowest/50 flex items-center justify-between border-t border-outline-variant/10">
              <span className="text-[10px] text-on-surface-variant font-label">Displaying 1-20 of 142 total transactions</span>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-high text-primary font-bold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant text-xs">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
