import React from 'react';
import { FileText, Plus } from 'lucide-react';

export default function MemoryOverview() {
  return (
    <div className="flex-1 flex overflow-hidden bg-background relative">
      <div className="flex-grow p-8 max-w-[1200px] overflow-y-auto custom-scrollbar">
        <div className="space-y-8">
          
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 text-secondary mb-1">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-mono text-[10px] tracking-widest uppercase">System Status: Synchronized</span>
              </div>
              <h1 className="text-4xl font-headline font-bold tracking-tighter text-on-surface">Memory Overview</h1>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">System Load</p>
                <p className="text-xl font-headline font-medium text-primary">42.8 <span className="text-xs opacity-50">TH/s</span></p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* NEURAL_SUMMARY.md */}
            <section className="col-span-12 bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden flex flex-col">
              <div className="bg-surface-container-high px-4 py-2 flex justify-between items-center border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-on-surface-variant" />
                  <span className="font-mono text-[10px] text-on-surface-variant">MEMORY_SUMMARY.md</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-outline-variant/40"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant/40"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant/40"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed bg-[#0a0a0a]">
                <p className="text-secondary mb-4"># Top of Mind Status</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary-dim opacity-50">01</span>
                    <span className="text-on-surface/90"><span className="text-tertiary">- [CORE]</span> Project Naikkelas architecture refactoring is at 85% completion. Focus on data redundancy protocols.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-dim opacity-50">02</span>
                    <span className="text-on-surface/90"><span className="text-tertiary">- [ALERT]</span> Unidentified data drift detected in Sector 4G. Investigation required by 0400hrs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-dim opacity-50">03</span>
                    <span className="text-on-surface/90"><span className="text-tertiary">- [MEMORY]</span> Cached location data from 'Osaka Residency' nearing expiration. Recommend long-term archival.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                  <span className="text-[10px] text-on-surface-variant italic">Last modified: 14:22:09 UTC</span>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">AUTO_SYNC: ON</span>
                </div>
              </div>
            </section>

            {/* Core Ledger */}
            <section className="col-span-12 bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden">
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-headline font-bold tracking-tight text-on-surface">Memory Ledger</h2>
                  <span className="text-[10px] font-mono text-on-surface-variant px-2 py-0.5 bg-surface-container-high rounded border border-outline-variant/20 uppercase">Primary Data Stream</span>
                </div>
                <button className="text-[10px] font-bold text-primary hover:text-secondary transition-colors tracking-widest uppercase">Export_Data.csv</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high/50 text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                      <th className="px-6 py-3 font-medium">Metric Key</th>
                      <th className="px-6 py-3 font-medium">Reference Identifier</th>
                      <th className="px-6 py-3 font-medium">System Value</th>
                      <th className="px-6 py-3 font-medium text-right">Integrity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-high/30 transition-colors group">
                      <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">User ID</td>
                      <td className="px-6 py-4 text-sm font-headline text-on-surface">USER-9942-OMEGA</td>
                      <td className="px-6 py-4">
                        <span className="bg-primary/10 text-primary-fixed text-[10px] px-2 py-1 rounded-full uppercase">Verified User</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[98%]"></div>
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant">98.2%</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/30 transition-colors group">
                      <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">Cloud Sync Date</td>
                      <td className="px-6 py-4 text-sm font-headline text-on-surface">2024.11.12 // 09:41:00</td>
                      <td className="px-6 py-4 text-sm text-on-surface">Last successful handshake</td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="bg-secondary h-full w-[100%]"></div>
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant">100%</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/30 transition-colors group">
                      <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">Data Integrity</td>
                      <td className="px-6 py-4 text-sm font-headline text-on-surface">CLOUD_SYNC / LOCAL_CACHE</td>
                      <td className="px-6 py-4">
                        <span className="bg-error/10 text-error text-[10px] px-2 py-1 rounded-full uppercase font-bold">Fluctuating</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="bg-error h-full w-[72%]"></div>
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant">72.4%</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/30 transition-colors group">
                      <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">Device Localization</td>
                      <td className="px-6 py-4 text-sm font-headline text-on-surface">TOKYO SECTOR 7</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Grid: 35.6895° N, 139.6917° E</td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[95%]"></div>
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant">95.0%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(243,255,202,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
        <Plus className="w-6 h-6 font-bold" />
      </button>
    </div>
  );
}
