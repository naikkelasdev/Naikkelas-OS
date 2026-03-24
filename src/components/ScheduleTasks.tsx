import React from 'react';
import { Plus, Edit2 } from 'lucide-react';

const ScheduleTasks: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="font-headline text-xl font-bold tracking-tight text-on-surface mb-2">My Tasks</h1>
            <p className="text-on-surface-variant font-body tracking-wider text-sm opacity-80 uppercase">Primary Task Execution List</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant/10 rounded-lg">
              <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Sort by</span>
              <select className="bg-transparent border-none text-xs text-primary font-bold focus:ring-0 p-0 pr-6">
                <option>Priority</option>
                <option>Impact</option>
                <option>Deadline</option>
              </select>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border border-outline-variant/10 rounded-lg">
              <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Filter</span>
              <select className="bg-transparent border-none text-xs text-secondary font-bold focus:ring-0 p-0 pr-6">
                <option>Category</option>
                <option>In Progress</option>
                <option>Blocked</option>
              </select>
            </div>
            <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all">
              <Plus className="w-5 h-5" />
              <span className="text-sm">NEW TASK</span>
            </button>
          </div>
        </div>

        {/* Task List Container */}
        <div className="space-y-3">
          {/* Task Card 1 */}
          <div className="group relative flex items-center gap-6 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/20 hover:bg-surface-container transition-all duration-300">
            <div className="relative flex items-center justify-center">
              <input className="w-6 h-6 rounded-full border-2 border-outline bg-transparent checked:bg-primary checked:border-primary focus:ring-0 cursor-pointer transition-all" type="checkbox" />
            </div>
            <div className="flex-1 grid grid-cols-12 items-center gap-4">
              <div className="col-span-5">
                <h3 className="font-body text-sm font-medium text-on-surface group-hover:text-primary transition-colors">System Calibration</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-label font-bold text-on-surface-variant/60 tracking-tighter">Today // 14:00</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="font-label text-[10px] font-bold text-secondary tracking-widest">#SYSTEM</span>
                </div>
              </div>
              <div className="col-span-3 flex justify-center">
                <div className="px-3 py-1 bg-error-container/10 border border-error/20 rounded-full">
                  <span className="font-label text-[10px] font-black text-error tracking-[0.2em]">HIGH</span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col items-end">
                <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[75%]"></div>
                </div>
                <span className="font-label text-[9px] font-bold text-on-surface-variant mt-1">PROGRESS: 75%</span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Task Card 2 */}
          <div className="group relative flex items-center gap-6 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-secondary/20 hover:bg-surface-container transition-all duration-300">
            <div className="relative flex items-center justify-center">
              <input className="w-6 h-6 rounded-full border-2 border-outline bg-transparent checked:bg-secondary checked:border-secondary focus:ring-0 cursor-pointer transition-all" type="checkbox" />
            </div>
            <div className="flex-1 grid grid-cols-12 items-center gap-4">
              <div className="col-span-5">
                <h3 className="font-body text-sm font-medium text-on-surface group-hover:text-secondary transition-colors">Workflow Audit</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-label font-bold text-on-surface-variant/60 tracking-tighter">Tomorrow // 09:00</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="font-label text-[10px] font-bold text-tertiary tracking-widest">#COGNITION</span>
                </div>
              </div>
              <div className="col-span-3 flex justify-center">
                <div className="px-3 py-1 bg-secondary-container/10 border border-secondary/20 rounded-full">
                  <span className="font-label text-[10px] font-black text-secondary tracking-[0.2em]">MED</span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col items-end">
                <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[40%]"></div>
                </div>
                <span className="font-label text-[9px] font-bold text-on-surface-variant mt-1">PROGRESS: 40%</span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Task Card 3 */}
          <div className="group relative flex items-center gap-6 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/20 hover:bg-surface-container transition-all duration-300">
            <div className="relative flex items-center justify-center">
              <input className="w-6 h-6 rounded-full border-2 border-outline bg-transparent checked:bg-primary checked:border-primary focus:ring-0 cursor-pointer transition-all" type="checkbox" />
            </div>
            <div className="flex-1 grid grid-cols-12 items-center gap-4">
              <div className="col-span-5">
                <h3 className="font-body text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Life Goals Refinement</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-label font-bold text-on-surface-variant/60 tracking-tighter">12 Oct // 18:30</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="font-label text-[10px] font-bold text-primary tracking-widest">#LIFE</span>
                </div>
              </div>
              <div className="col-span-3 flex justify-center">
                <div className="px-3 py-1 bg-outline-variant/10 border border-outline/20 rounded-full">
                  <span className="font-label text-[10px] font-black text-on-surface-variant tracking-[0.2em]">LOW</span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col items-end">
                <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-primary-dim h-full w-[15%]"></div>
                </div>
                <span className="font-label text-[9px] font-bold text-on-surface-variant mt-1">PROGRESS: 15%</span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Task Card 4 (Checked) */}
          <div className="group relative flex items-center gap-6 p-5 bg-surface-container-low/50 rounded-xl border border-transparent opacity-60">
            <div className="relative flex items-center justify-center">
              <input defaultChecked className="w-6 h-6 rounded-full border-2 border-primary bg-primary checked:bg-primary checked:border-primary focus:ring-0 cursor-pointer transition-all" type="checkbox" />
            </div>
            <div className="flex-1 grid grid-cols-12 items-center gap-4">
              <div className="col-span-5">
                <h3 className="font-body text-sm font-medium text-on-surface-variant line-through">Inbox Zero</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-label font-bold text-on-surface-variant/40 tracking-tighter">Completed</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
                  <span className="font-label text-[10px] font-bold text-on-surface-variant/40 tracking-widest">#SYSTEM</span>
                </div>
              </div>
              <div className="col-span-3 flex justify-center">
                <div className="px-3 py-1 bg-surface-variant/20 border border-outline-variant/10 rounded-full">
                  <span className="font-label text-[10px] font-black text-on-surface-variant/30 tracking-[0.2em]">MED</span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col items-end">
                <div className="w-24 h-1.5 bg-surface-container-highest/30 rounded-full overflow-hidden">
                  <div className="bg-outline-variant h-full w-[100%]"></div>
                </div>
                <span className="font-label text-[9px] font-bold text-on-surface-variant/30 mt-1">SYNC: 100%</span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant/30">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Task Card 5 */}
          <div className="group relative flex items-center gap-6 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-tertiary/20 hover:bg-surface-container transition-all duration-300">
            <div className="relative flex items-center justify-center">
              <input className="w-6 h-6 rounded-full border-2 border-outline bg-transparent checked:bg-tertiary checked:border-tertiary focus:ring-0 cursor-pointer transition-all" type="checkbox" />
            </div>
            <div className="flex-1 grid grid-cols-12 items-center gap-4">
              <div className="col-span-5">
                <h3 className="font-body text-sm font-medium text-on-surface group-hover:text-tertiary transition-colors">Weekly Planning</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-label font-bold text-on-surface-variant/60 tracking-tighter">Today // 21:00</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="font-label text-[10px] font-bold text-tertiary-dim tracking-widest">#ARCHIVE</span>
                </div>
              </div>
              <div className="col-span-3 flex justify-center">
                <div className="px-3 py-1 bg-error-container/10 border border-error/20 rounded-full">
                  <span className="font-label text-[10px] font-black text-error tracking-[0.2em]">HIGH</span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col items-end">
                <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[5%]"></div>
                </div>
                <span className="font-label text-[9px] font-bold text-on-surface-variant mt-1">PROGRESS: 5%</span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Layer (Asymmetric Element) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container-low/60 backdrop-blur-xl p-6 rounded-2xl border border-outline-variant/10">
            <h4 className="font-label text-[10px] font-bold text-primary tracking-widest uppercase mb-4">Task Completion Rate</h4>
            <div className="flex items-end gap-1 h-24">
              <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary/40 h-[65%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary/60 h-[50%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary/30 h-[85%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary h-[100%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary/70 h-[60%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary/50 h-[45%] rounded-t-sm"></div>
              <div className="flex-1 bg-primary/20 h-[30%] rounded-t-sm"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex flex-col justify-between">
            <span className="font-label text-[10px] font-bold text-secondary tracking-widest uppercase">Task Efficiency</span>
            <div>
              <span className="text-xl font-headline font-bold text-on-surface">92<span className="text-secondary text-sm tracking-tighter">%</span></span>
              <p className="text-[10px] text-on-surface-variant mt-1 uppercase font-label">Optimized Output</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 flex flex-col justify-between">
            <span className="font-label text-[10px] font-bold text-tertiary tracking-widest uppercase">Active Projects</span>
            <div>
              <span className="text-xl font-headline font-bold text-on-surface">07</span>
              <p className="text-[10px] text-on-surface-variant mt-1 uppercase font-label">Ongoing Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern/Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[100px] rounded-full"></div>
      </div>
    </div>
  );
};

export default ScheduleTasks;
