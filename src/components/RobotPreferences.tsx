import React from 'react';
import { Brain, Terminal, ChevronDown, Sparkles } from 'lucide-react';

export default function RobotPreferences() {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-background p-8">
      <style>{`
        .custom-range {
            -webkit-appearance: none;
            background: #262626;
            height: 4px;
            border-radius: 2px;
            width: 100%;
        }
        .custom-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #f3ffca;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(243, 255, 202, 0.4);
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-headline font-bold tracking-tight mb-2 text-on-surface">AI Answer Style Configuration</h1>
            <p className="text-on-surface-variant font-body max-w-xl">Calibrate the assistant's communication style. Adjust stylistic parameters to align with your personal preferences.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 rounded-lg border border-outline-variant hover:bg-surface-variant transition-colors text-sm font-medium text-on-surface">Reset Defaults</button>
            <button className="px-6 py-2 rounded-lg bg-secondary text-on-secondary font-bold text-sm shadow-[0_0_15px_rgba(114,239,245,0.2)]">Sync Config</button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Persona & Custom Instructions (High Focus) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-primary" />
                <h2 className="font-headline font-semibold text-lg text-on-surface">Assistant Persona</h2>
              </div>
              <textarea 
                className="w-full h-32 bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all font-body text-sm p-4 outline-none resize-none" 
                placeholder="Describe the character or role of the AI... (e.g., 'A helpful assistant with a penchant for dry humor')"
              ></textarea>
            </div>
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-secondary" />
                <h2 className="font-headline font-semibold text-lg text-on-surface">Custom Instructions</h2>
              </div>
              <textarea 
                className="w-full h-32 bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-sm p-4 outline-none resize-none" 
                placeholder="Additional rules or behavioral constraints..."
              ></textarea>
            </div>
          </div>

          {/* Tonal & Structural Selectors */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
              <label className="block font-headline font-bold text-xs uppercase tracking-widest text-primary mb-4">Tone Profile</label>
              <div className="relative">
                <select className="w-full bg-surface-container-highest border-none rounded-lg text-on-surface font-body py-3 px-4 appearance-none focus:ring-1 focus:ring-primary outline-none">
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Casual</option>
                  <option>Formal</option>
                  <option>Playful</option>
                  <option>Empathetic</option>
                  <option>Bold</option>
                  <option>Calm</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 pointer-events-none opacity-50 text-on-surface" />
              </div>
              
              <label className="block font-headline font-bold text-xs uppercase tracking-widest text-primary mb-4 mt-8">Response Structure</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-3 bg-surface-container-highest rounded-lg text-[11px] font-bold border border-primary/20 text-primary">Paragraph</button>
                <button className="p-3 bg-surface-container-lowest rounded-lg text-[11px] font-bold border border-outline-variant/10 text-on-surface-variant hover:border-outline-variant transition-colors">Bullet Points</button>
                <button className="p-3 bg-surface-container-lowest rounded-lg text-[11px] font-bold border border-outline-variant/10 text-on-surface-variant hover:border-outline-variant transition-colors">Step by Step</button>
                <button className="p-3 bg-surface-container-lowest rounded-lg text-[11px] font-bold border border-outline-variant/10 text-on-surface-variant hover:border-outline-variant transition-colors">Mixed</button>
              </div>
            </div>

            {/* Toggle Card */}
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-label text-sm text-on-surface-variant">Use Examples</span>
                <button className="w-10 h-5 bg-primary-container rounded-full relative flex items-center px-1 transition-colors">
                  <span className="w-3.5 h-3.5 bg-on-primary-container rounded-full ml-auto"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label text-sm text-on-surface-variant">Use Analogies</span>
                <button className="w-10 h-5 bg-surface-container-highest rounded-full relative flex items-center px-1 transition-colors">
                  <span className="w-3.5 h-3.5 bg-outline rounded-full"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label text-sm text-on-surface-variant">Ask Follow-up</span>
                <button className="w-10 h-5 bg-primary-container rounded-full relative flex items-center px-1 transition-colors">
                  <span className="w-3.5 h-3.5 bg-on-primary-container rounded-full ml-auto"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Sliders Section */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Response Length */}
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex justify-between mb-4">
                <span className="font-headline font-bold text-sm text-on-surface">Response Length</span>
                <span className="font-label text-xs text-primary">Balanced</span>
              </div>
              <input className="custom-range" type="range" defaultValue={50} />
              <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label uppercase tracking-tighter">
                <span>Concise</span>
                <span>Detailed</span>
              </div>
            </div>
            
            {/* Directness */}
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex justify-between mb-4">
                <span className="font-headline font-bold text-sm text-on-surface">Directness</span>
                <span className="font-label text-xs text-primary">Nuanced</span>
              </div>
              <input className="custom-range" type="range" defaultValue={50} />
              <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label uppercase tracking-tighter">
                <span>Gentle</span>
                <span>Blunt</span>
              </div>
            </div>

            {/* Humor Level */}
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex justify-between mb-4">
                <span className="font-headline font-bold text-sm text-on-surface">Humor Level</span>
                <span className="font-label text-xs text-primary">Dry</span>
              </div>
              <input className="custom-range" type="range" defaultValue={30} />
              <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label uppercase tracking-tighter">
                <span>None</span>
                <span>High</span>
              </div>
            </div>

            {/* Technical Depth */}
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex justify-between mb-4">
                <span className="font-headline font-bold text-sm text-on-surface">Technical Depth</span>
                <span className="font-label text-xs text-secondary">Architect</span>
              </div>
              <input className="custom-range" type="range" defaultValue={80} />
              <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label uppercase tracking-tighter">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </div>

            {/* Warmth */}
            <div className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/15 p-6 rounded-xl">
              <div className="flex justify-between mb-4">
                <span className="font-headline font-bold text-sm text-on-surface">Warmth</span>
                <span className="font-label text-xs text-tertiary">Neutral</span>
              </div>
              <input className="custom-range" type="range" defaultValue={50} />
              <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label uppercase tracking-tighter">
                <span>Clinical</span>
                <span>Warm</span>
              </div>
            </div>

            {/* Preview Card */}
            <div className="bg-surface-container-high p-6 rounded-xl border border-secondary/10 relative overflow-hidden flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #72eff5 0%, transparent 70%)' }}></div>
              <Sparkles className="text-secondary w-10 h-10 mb-2" />
              <h4 className="font-headline font-bold text-on-surface">Neural Preview</h4>
              <p className="text-on-surface-variant text-xs font-body mt-2">Simulate a response based on current calibration parameters.</p>
              <button className="mt-4 px-4 py-1.5 bg-surface-variant border border-secondary/30 rounded-full text-[11px] font-bold text-secondary uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all relative z-10">Execute Test</button>
            </div>
          </div>
        </div>

        {/* Visual Asset Section */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 h-64 rounded-2xl overflow-hidden relative border border-outline-variant/10">
            <img 
              alt="Nature Background" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/nature/1200/400" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-8">
              <h3 className="text-2xl font-headline font-bold text-on-surface">Global Synthesis Status</h3>
              <p className="text-primary font-label text-sm">98.4% Accuracy Rating across current profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
