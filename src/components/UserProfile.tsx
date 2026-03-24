import React from 'react';
import { 
  Bell, 
  HelpCircle, 
  Edit2, 
  Fingerprint, 
  PenTool, 
  ArrowLeft, 
  Terminal 
} from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background relative">
      {/* Top App Bar */}
      <header className="flex justify-between items-center w-full px-12 py-6 bg-background/80 backdrop-blur-xl sticky top-0 z-40 flex-shrink-0 border-b border-outline-variant/10">
        <div>
          <h1 className="font-headline font-bold text-2xl text-secondary tracking-tight">User Settings</h1>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-primary border-b-2 border-primary pb-1 text-sm font-medium" href="#">Account</a>
            <a className="text-on-surface-variant hover:text-white transition-opacity text-sm font-medium" href="#">Security</a>
            <a className="text-on-surface-variant hover:text-white transition-opacity text-sm font-medium" href="#">Preferences</a>
          </nav>
          <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8">
            <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Profile Page Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        <section className="max-w-4xl w-full mx-auto px-12 py-12 flex-1 flex flex-col">
          <div className="mb-12 flex items-end gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-xl bg-surface-container-high overflow-hidden border-2 border-primary/10 group-hover:border-primary/40 transition-all duration-500">
                <img 
                  className="w-full h-full object-cover grayscale contrast-125" 
                  alt="Professional portrait of male user with technical overlay" 
                  src="https://picsum.photos/seed/xenon/200/200" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary p-2 rounded-lg shadow-xl shadow-secondary/20 hover:scale-110 transition-transform">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="pb-2">
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase font-bold mb-1">User ID</p>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tighter uppercase">Alex_7</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-[10px] font-label tracking-widest text-on-surface-variant uppercase">Cloud Sync Active</span>
              </div>
            </div>
          </div>

          {/* Simple & Clean Interface */}
          <div className="grid grid-cols-1 gap-12 flex-1">
            <div className="space-y-8">
              
              {/* Input: User Name */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-label text-[11px] tracking-widest text-on-surface-variant uppercase font-semibold">User Name</label>
                  <span className="text-[9px] font-mono text-outline-variant">PROFILE_NAME</span>
                </div>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-secondary focus:ring-0 text-white font-headline text-lg py-3 px-4 transition-all duration-300 rounded-t-lg outline-none" 
                    placeholder="Your name..." 
                    type="text" 
                    defaultValue="Alex_7"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Input: Profile Information */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-label text-[11px] tracking-widest text-on-surface-variant uppercase font-semibold">Profile Information</label>
                  <span className="text-[9px] font-mono text-outline-variant">BIO_DATA</span>
                </div>
                <div className="relative">
                  <textarea 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-secondary focus:ring-0 text-on-surface-variant font-body text-base py-4 px-4 transition-all duration-300 rounded-t-lg resize-none outline-none" 
                    placeholder="Enter your biography summary..." 
                    rows={4}
                    defaultValue="Systems Architect specializing in digital interface design. Currently working on Naikkelas OS v1.0."
                  />
                  <div className="absolute right-4 bottom-4 text-outline-variant">
                    <PenTool className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[10px] text-outline-variant italic">Max 500 characters. Visible to your contacts.</p>
              </div>

              {/* System Status Readout */}
              <div className="p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-xl flex items-center justify-between">
                <div className="flex gap-6">
                  <div>
                    <p className="text-[9px] font-label text-outline uppercase tracking-wider mb-1">Integrity</p>
                    <p className="text-sm font-headline font-bold text-primary">99.8%</p>
                  </div>
                  <div className="w-px h-8 bg-outline-variant/20 self-center"></div>
                  <div>
                    <p className="text-[9px] font-label text-outline uppercase tracking-wider mb-1">Sync Date</p>
                    <p className="text-sm font-headline font-bold text-on-surface">2042.09.12</p>
                  </div>
                  <div className="w-px h-8 bg-outline-variant/20 self-center"></div>
                  <div>
                    <p className="text-[9px] font-label text-outline uppercase tracking-wider mb-1">Latency</p>
                    <p className="text-sm font-headline font-bold text-secondary">2ms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="text-[9px] font-label font-bold text-secondary uppercase tracking-tighter">Verified Agent</span>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="pt-8 flex items-center justify-between border-t border-outline-variant/20 mt-auto">
              <div className="flex items-center gap-3 text-outline-variant hover:text-on-surface transition-colors cursor-pointer group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-label text-xs uppercase tracking-widest font-bold">Discard Changes</span>
              </div>
              <button className="group relative overflow-hidden bg-primary px-10 py-4 rounded-lg flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Terminal className="w-5 h-5 text-on-primary relative z-10" />
                <span className="font-headline font-extrabold text-on-primary tracking-[0.2em] relative z-10">SAVE PROFILE</span>
              </button>
            </div>
          </div>
        </section>

        {/* Decorative Footer Element */}
        <footer className="mt-auto px-12 py-8 flex justify-between items-center text-[9px] font-mono text-outline-variant/40 tracking-[0.5em] uppercase flex-shrink-0">
          <span>NAIKKELAS_OS_READY</span>
          <span>SECURE_SESSION_8829</span>
          <span>SYSTEM_STABLE_000</span>
        </footer>
      </div>
    </div>
  );
}
