import React from 'react';
import { 
  Search, Bell, Settings, Phone, AtSign, 
  X, Edit2, MoreVertical, Archive, Save,
  CheckCircle2
} from 'lucide-react';

export default function ContactsDetailModal() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop Blur */}
      <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-md"></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-surface-container-highest/60 backdrop-blur-xl rounded-2xl border border-outline-variant/20 overflow-hidden shadow-[0_0_20px_rgba(243,255,202,0.1)] flex flex-col md:flex-row">
        
        {/* Left Side: Profile & Identity */}
        <div className="w-full md:w-2/5 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-outline-variant/20 bg-surface-container-high/40">
          <div className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-[0_0_20px_rgba(114,239,245,0.1)]">
              <img 
                alt="Elena V. Kostic" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/elena/200/200" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-surface-container-highest rounded-full border border-secondary/50 flex items-center justify-center text-secondary">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          
          <h3 className="text-3xl font-headline font-bold text-primary mb-1">Elena V. Kostic</h3>
          <p className="text-on-surface-variant font-label text-xs tracking-widest uppercase mb-6">Senior Systems Architect</p>
          
          <div className="w-full mt-8 text-left">
            <h4 className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Contact Data
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30 transition-colors group">
                <Phone className="text-secondary w-5 h-5" />
                <span className="text-xs text-on-surface">+1 (555) 012-9844</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30 transition-colors group">
                <AtSign className="text-secondary w-5 h-5" />
                <span className="text-xs text-on-surface truncate">elena.kostic@naikkelas.os</span>
              </div>
              <div className="flex flex-col gap-2 p-3 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <p className="text-[9px] text-on-surface-variant uppercase tracking-wider mb-1">Social Uplinks</p>
                <div className="flex items-center gap-4">
                  <button className="hover:text-primary transition-colors text-on-surface-variant">
                    <span className="font-bold text-sm">X</span>
                  </button>
                  <button className="hover:text-primary transition-colors text-on-surface-variant">
                    <span className="font-bold text-sm">IN</span>
                  </button>
                  <button className="hover:text-primary transition-colors text-on-surface-variant">
                    <span className="font-bold text-sm">GH</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Details & Notes */}
        <div className="w-full md:w-3/5 flex flex-col relative">
          {/* Close Button */}
          <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors text-on-surface-variant z-10">
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
            {/* Notes Section */}
            <section className="h-full flex flex-col">
              <h4 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Interaction Log
              </h4>
              <div className="space-y-3 flex-1">
                <div className="p-4 rounded-xl bg-surface-container-highest/40 border-l-4 border-primary/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-primary uppercase">Meeting Note</span>
                    <span className="text-[10px] text-on-surface-variant">05.24.2042</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Discussed the new software architecture for Naikkelas OS. Elena suggests a more decentralized contact structure to prevent data loss.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-highest/40 border-l-4 border-outline-variant/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">Background Check</span>
                    <span className="text-[10px] text-on-surface-variant">02.11.2042</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Previous history at Neo-Belgrade Systems. High commendations for ethical AI implementation.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Footer Actions */}
          <div className="p-6 bg-surface-container-highest/50 flex gap-4 border-t border-outline-variant/10">
            <button className="flex-1 py-3 px-6 bg-[#25D366] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#25D366]/20">
              <Phone className="w-5 h-5" />
              Contact WhatsApp
            </button>
            <button className="py-3 px-6 bg-surface-container-highest border border-outline-variant/20 text-on-surface rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all">
              <Edit2 className="w-5 h-5" />
              Modify
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant rounded-lg hover:text-primary transition-colors">
              <Archive className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant rounded-lg hover:bg-surface-container-high transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
