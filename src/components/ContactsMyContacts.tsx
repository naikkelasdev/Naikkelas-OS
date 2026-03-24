import React from 'react';
import { 
  Search, 
  Filter, 
  SortAsc, 
  MoreVertical, 
  MessageCircle, 
  Sparkles, 
  Globe, 
  AtSign, 
  Phone, 
  Terminal, 
  Network, 
  Plus 
} from 'lucide-react';

export default function ContactsMyContacts() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background relative">
      {/* TopAppBar */}
      <header className="sticky top-0 z-40 flex justify-between items-center px-8 h-20 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-outline-variant/5 flex-shrink-0">
        <div className="flex items-center gap-6">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Contacts Database</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full border border-primary/20 text-primary font-label text-[10px] tracking-widest uppercase bg-primary/5">#AI</span>
            <span className="px-3 py-1 rounded-full border border-secondary/20 text-secondary font-label text-[10px] tracking-widest uppercase bg-secondary/5">#HUMAN</span>
            <span className="px-3 py-1 rounded-full border border-tertiary/20 text-tertiary font-label text-[10px] tracking-widest uppercase bg-tertiary/5">#SYSTEM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 transition-colors group-focus-within:text-secondary" />
            <input 
              className="bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 w-72 text-sm focus:ring-1 focus:ring-secondary/50 placeholder:text-on-surface-variant transition-all font-body outline-none text-on-surface" 
              placeholder="Search contacts..." 
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
              <SortAsc className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Database Table Content */}
      <section className="flex-1 overflow-y-auto custom-scrollbar px-8 py-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/10 rounded-xl overflow-visible shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="px-6 py-4 font-headline text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Name</th>
                  <th className="px-6 py-4 font-headline text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Contact Information</th>
                  <th className="px-6 py-4 font-headline text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Notes</th>
                  <th className="px-6 py-4 font-headline text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                
                {/* Row 1 */}
                <tr className="hover:bg-primary/5 transition-colors group relative">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-container p-[1px]">
                        <div className="w-full h-full bg-surface-container rounded-lg flex items-center justify-center overflow-hidden">
                          <img alt="Contact Avatar" className="object-cover w-full h-full" src="https://picsum.photos/seed/aura/100/100" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                      <div>
                        <div className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Aura Assistant</div>
                        <div className="font-label text-[10px] text-primary/60 uppercase tracking-tighter">AI Assistant</div>
                      </div>
                    </div>

                    {/* Modal Hover Card */}
                    <div className="hidden group-hover:block absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] p-6 rounded-2xl border border-outline-variant/30 bg-surface-container-high/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200 pointer-events-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <img alt="" className="w-12 h-12 rounded-lg" src="https://picsum.photos/seed/aura/100/100" referrerPolicy="no-referrer" />
                            <div>
                              <h3 className="font-headline font-bold text-lg leading-tight text-on-surface">Aura Assistant</h3>
                              <p className="text-[10px] font-label text-primary/70 uppercase">AI-ASSISTANT-01</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Contact</p>
                            <p className="text-sm font-body text-on-surface">aura@naikkelas.os</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Internal Log</p>
                            <p className="text-xs text-on-surface leading-relaxed italic opacity-80">Primary assistant for daily tasks and scheduling.</p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2 mt-2 border-t border-outline-variant/10">
                          <button className="flex-1 py-2 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] transition-all flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span className="font-label text-[10px] font-bold uppercase">WhatsApp</span>
                          </button>
                          <button className="w-10 h-10 rounded bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                          </button>
                          <button className="w-10 h-10 rounded bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 text-secondary flex items-center justify-center">
                            <Globe className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1 line-clamp-3">
                      <div className="flex items-center gap-2 text-sm font-body text-on-surface">
                        <AtSign className="w-3 h-3 text-secondary" />
                        aura@naikkelas.os
                      </div>
                      <div className="text-xs font-label text-on-surface-variant">ID: AI-ASSISTANT-01</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed italic line-clamp-3">
                      "Primary assistant for daily tasks and scheduling."
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2 transition-opacity">
                      <button className="px-3 py-1.5 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(37,211,102,0.1)]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-label text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
                      </button>
                      <button className="p-1.5 rounded bg-primary/10 border border-primary/20 hover:border-primary/50 text-primary transition-all flex items-center justify-center shadow-[0_0_10px_rgba(243,255,202,0.1)]">
                        <Sparkles className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-secondary/5 transition-colors group relative">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-secondary-container p-[1px]">
                        <div className="w-full h-full bg-surface-container rounded-lg flex items-center justify-center overflow-hidden">
                          <img alt="Contact Avatar" className="object-cover w-full h-full" src="https://picsum.photos/seed/elena/100/100" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                      <div>
                        <div className="font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Elena V. Kostic</div>
                        <div className="font-label text-[10px] text-secondary/60 uppercase tracking-tighter">Human Lead Engineer</div>
                      </div>
                    </div>

                    {/* Modal Hover Card */}
                    <div className="hidden group-hover:block absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] p-6 rounded-2xl border border-outline-variant/30 bg-surface-container-high/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200 pointer-events-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <img alt="" className="w-12 h-12 rounded-lg" src="https://picsum.photos/seed/elena/100/100" referrerPolicy="no-referrer" />
                            <div>
                              <h3 className="font-headline font-bold text-lg leading-tight text-on-surface">Elena V. Kostic</h3>
                              <p className="text-[10px] font-label text-secondary/70 uppercase">EVK-9282-LEAD</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Contact Information</p>
                            <p className="text-sm font-body text-on-surface">+44 7922 001 44</p>
                            <p className="text-xs text-on-surface-variant">elena.kostic@vanguard.io</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Notes</p>
                            <p className="text-xs text-on-surface leading-relaxed opacity-80">Hardware specialist for the home server setup. Prefers direct voice communications via encrypted channels.</p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2 mt-2 border-t border-outline-variant/10">
                          <button className="flex-1 py-2 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] transition-all flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span className="font-label text-[10px] font-bold uppercase">WhatsApp</span>
                          </button>
                          <button className="w-10 h-10 rounded bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                          </button>
                          <button className="w-10 h-10 rounded bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 text-secondary flex items-center justify-center">
                            <Globe className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1 line-clamp-3">
                      <div className="flex items-center gap-2 text-sm font-body text-on-surface">
                        <Phone className="w-3 h-3 text-secondary" />
                        +44 7922 001 44
                      </div>
                      <div className="text-xs font-label text-on-surface-variant">elena.kostic@vanguard.io</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed line-clamp-3">
                      Hardware specialist for the home server setup. Prefers direct voice comms.
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2 transition-opacity">
                      <button className="px-3 py-1.5 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(37,211,102,0.1)]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-label text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
                      </button>
                      <button className="p-1.5 rounded bg-primary/10 border border-primary/20 hover:border-primary/50 text-primary transition-all flex items-center justify-center shadow-[0_0_10px_rgba(243,255,202,0.1)]">
                        <Sparkles className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-tertiary/5 transition-colors group relative">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tertiary to-tertiary-container p-[1px]">
                        <div className="w-full h-full bg-surface-container rounded-lg flex items-center justify-center overflow-hidden">
                          <Terminal className="text-tertiary w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <div className="font-headline font-bold text-on-surface group-hover:text-tertiary transition-colors">Backup_Daemon</div>
                        <div className="font-label text-[10px] text-tertiary/60 uppercase tracking-tighter">Automated Process</div>
                      </div>
                    </div>

                    {/* Modal Hover Card */}
                    <div className="hidden group-hover:block absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] p-6 rounded-2xl border border-outline-variant/30 bg-surface-container-high/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200 pointer-events-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
                              <Terminal className="text-tertiary w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-headline font-bold text-lg leading-tight text-on-surface">Backup_Daemon</h3>
                              <p className="text-[10px] font-label text-tertiary/70 uppercase">BACKUP-001</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Network Endpoint</p>
                            <p className="text-sm font-body text-on-surface">Node: Port-8080-TCP</p>
                            <p className="text-xs text-error font-mono">Status: RECURSIVE_LOOP</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Process Manifest</p>
                            <p className="text-xs text-on-surface leading-relaxed opacity-80">Background maintenance assistant monitoring software health. Do not terminate unless software crash occurs or manual override is required.</p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2 mt-2 border-t border-outline-variant/10">
                          <button className="flex-1 py-2 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] transition-all flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span className="font-label text-[10px] font-bold uppercase">WhatsApp</span>
                          </button>
                          <button className="w-10 h-10 rounded bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                          </button>
                          <button className="w-10 h-10 rounded bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 text-secondary flex items-center justify-center">
                            <Globe className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1 line-clamp-3">
                      <div className="flex items-center gap-2 text-sm font-body text-on-surface">
                        <Network className="w-3 h-3 text-tertiary" />
                        Node: Port-8080-TCP
                      </div>
                      <div className="text-xs font-label text-on-surface-variant">Status: RECURSIVE_LOOP</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed line-clamp-3">
                      Background maintenance assistant. Do not terminate unless software crash occurs.
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2 transition-opacity">
                      <button className="px-3 py-1.5 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(37,211,102,0.1)]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-label text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
                      </button>
                      <button className="p-1.5 rounded bg-primary/10 border border-primary/20 hover:border-primary/50 text-primary transition-all flex items-center justify-center shadow-[0_0_10px_rgba(243,255,202,0.1)]">
                        <Sparkles className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-primary/5 transition-colors group relative">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-container p-[1px]">
                        <div className="w-full h-full bg-surface-container rounded-lg flex items-center justify-center overflow-hidden">
                          <img alt="Contact Avatar" className="object-cover w-full h-full" src="https://picsum.photos/seed/marcus/100/100" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                      <div>
                        <div className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Marcus Chen</div>
                        <div className="font-label text-[10px] text-primary/60 uppercase tracking-tighter">Strategic Liaison</div>
                      </div>
                    </div>

                    {/* Modal Hover Card */}
                    <div className="hidden group-hover:block absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] p-6 rounded-2xl border border-outline-variant/30 bg-surface-container-high/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in duration-200 pointer-events-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <img alt="" className="w-12 h-12 rounded-lg" src="https://picsum.photos/seed/marcus/100/100" referrerPolicy="no-referrer" />
                            <div>
                              <h3 className="font-headline font-bold text-lg leading-tight text-on-surface">Marcus Chen</h3>
                              <p className="text-[10px] font-label text-primary/70 uppercase">CORP-STRAT-8829</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Corporate Reach</p>
                            <p className="text-sm font-body text-on-surface">m.chen@naikkelas.corp</p>
                            <p className="text-xs text-on-surface-variant">Extension: 8829</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Liaison Notes</p>
                            <p className="text-xs text-on-surface leading-relaxed opacity-80">Handles complex cross-departmental data synchronization. Known for reliable historical data backups.</p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2 mt-2 border-t border-outline-variant/10">
                          <button className="flex-1 py-2 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] transition-all flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            <span className="font-label text-[10px] font-bold uppercase">WhatsApp</span>
                          </button>
                          <button className="w-10 h-10 rounded bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                          </button>
                          <button className="w-10 h-10 rounded bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 text-secondary flex items-center justify-center">
                            <Globe className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1 line-clamp-3">
                      <div className="flex items-center gap-2 text-sm font-body text-on-surface">
                        <AtSign className="w-3 h-3 text-secondary" />
                        m.chen@naikkelas.corp
                      </div>
                      <div className="text-xs font-label text-on-surface-variant">EXT: 8829</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed line-clamp-3">
                      Handles cross-departmental data synchronization. Reliable backup source.
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2 transition-opacity">
                      <button className="px-3 py-1.5 rounded bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(37,211,102,0.1)]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-label text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
                      </button>
                      <button className="p-1.5 rounded bg-primary/10 border border-primary/20 hover:border-primary/50 text-primary transition-all flex items-center justify-center shadow-[0_0_10px_rgba(243,255,202,0.1)]">
                        <Sparkles className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contextual FAB for adding contacts */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center group hover:scale-105 transition-transform z-50">
        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
      </button>
    </div>
  );
}
