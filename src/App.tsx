import React, { useState, useRef, useMemo, useEffect } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  Database, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Settings, 
  Terminal,
  Activity,
  Save,
  Play,
  Eye,
  Edit2,
  Workflow,
  Calendar,
  Wallet,
  Users,
  Brain,
  Bot,
  Bell,
  Grid,
  LayoutDashboard,
  Repeat,
  CheckSquare,
  CalendarDays,
  Receipt,
  PieChart,
  Star,
  Clock,
  FolderSearch,
  User,
  FolderPlus,
  FilePlus,
  Cloud,
  Bold,
  Italic,
  Link,
  Image as ImageIcon,
  Code,
  Shield,
  Sliders
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import WorkflowMonitor from './components/WorkflowMonitor';
import ScheduleOverview from './components/ScheduleOverview';
import ScheduleRoutine from './components/ScheduleRoutine';
import ScheduleCalendar from './components/ScheduleCalendar';
import ScheduleTasks from './components/ScheduleTasks';
import FinanceOverview from './components/FinanceOverview';
import FinanceTransactions from './components/FinanceTransactions';
import NotesMyNotes from './components/NotesMyNotes';
import ContactsMyContacts from './components/ContactsMyContacts';
import MemoryOverview from './components/MemoryOverview';
import MemoryMemory from './components/MemoryMemory';
import UserProfile from './components/UserProfile';
import RobotPreferences from './components/RobotPreferences';

type FileType = 'file' | 'folder' | 'database';

interface FileNode {
  id: string;
  name: string;
  type: FileType;
  children?: FileNode[];
  content?: string;
  description?: string;
}

const defaultFileSystem: FileNode[] = [
  {
    id: 'memory',
    name: 'memory',
    type: 'folder',
    children: [
      {
        id: 'diary',
        name: 'diary',
        type: 'folder',
        children: [
          {
            id: '2026_07_July',
            name: '2026_07_July',
            type: 'folder',
            children: [
              { id: '2026_07_July_26.md', name: '2026_07_July_26.md', type: 'file', content: '# July 26, 2026\n\nToday I initialized the new memory structures...' },
              { id: 'Week1.md', name: 'Week1.md', type: 'file', content: '# Week 1 Summary\n\n- Software initialization\n- Database setup\n- Assistant routing configured' }
            ]
          }
        ]
      },
      { id: 'FACTS', name: 'FACTS', type: 'database', description: 'database.personal_facts' },
      { id: 'FUTURE-ORIENTED', name: 'FUTURE-ORIENTED', type: 'database', description: 'database.personal_goals' }
    ]
  },
  {
    id: 'tools',
    name: 'tools',
    type: 'folder',
    children: [
      { id: 'read_database.md', name: 'read_database.md', type: 'file', content: '# Read Database Tool\n\nUsage:\n```bash\nread_db --database assistant_facts\n```' }
    ]
  },
  {
    id: 'assistants',
    name: 'assistants',
    type: 'folder',
    children: [
      { id: 'PERSONAL_ASSISTANT.md', name: 'PERSONAL_ASSISTANT.md', type: 'file', content: '# Personal Assistant\n\nResponsible for long-term storage and retrieval of your facts and preferences.' }
    ]
  },
  {
    id: 'utility',
    name: 'utility',
    type: 'folder',
    children: [
      { id: 'finance', name: 'finance', type: 'folder', children: [] },
      { id: 'schedule', name: 'schedule', type: 'folder', children: [] },
      { id: 'notes', name: 'notes', type: 'folder', children: [] },
      { id: 'cron', name: 'cron', type: 'folder', children: [] },
      { id: 'tracker', name: 'tracker', type: 'folder', children: [] },
      { id: 'contacts', name: 'contacts', type: 'folder', children: [] }
    ]
  },
  { id: 'ASSISTANT_PROMPT.md', name: 'ASSISTANT_PROMPT.md', type: 'file', content: 'You are a warm, human-friendly life assistant...' },
  { id: 'ASSISTANT.md', name: 'ASSISTANT.md', type: 'file', content: '# Core Assistant Configuration\n\nModel: gemini-3.1-pro-preview\nTemperature: 0.6' },
  { id: 'PREFERENCES.json', name: 'PREFERENCES.json', type: 'file', content: '{\n  "response_length": "conversational",\n  "tone": "warm",\n  "timezone": "UTC"\n}' },
  { id: 'USER', name: 'USER', type: 'database', description: 'database.personal_user' },
  { id: 'IMPORTANT', name: 'IMPORTANT', type: 'database', description: 'database.personal_important' },
  { id: 'TOP_OF_MIND.md', name: 'TOP_OF_MIND.md', type: 'file', content: '# Top of Mind\n\n- Need to optimize the database read queries.\n- Schedule a backup for the memory folder.' },
  { id: 'MEMORY.md', name: 'MEMORY.md', type: 'file', content: '# Memory Index\n\nIndex of all active memory items and their references.' },
  { id: 'CRON.json', name: 'CRON.json', type: 'file', content: '{\n  "jobs": [\n    { "id": "daily_summary", "schedule": "0 0 * * *", "action": "summarize_diary" }\n  ]\n}' },
  { id: 'HEARTBEAT.md', name: 'HEARTBEAT.md', type: 'file', content: '# Heartbeat Log\n\nLast check-in: 2026-03-23T07:30:18Z\nStatus: ONLINE' }
];

const flattenFS = (nodes: FileNode[], path = ''): (FileNode & { path: string })[] => {
  let result: (FileNode & { path: string })[] = [];
  for (const node of nodes) {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    result.push({ ...node, path: currentPath });
    if (node.children) {
      result = result.concat(flattenFS(node.children, currentPath));
    }
  }
  return result;
};

const MarkdownEditor = ({ fileId, value, onChange, fileSystem }: { fileId: string, value: string, onChange: (val: string) => void, fileSystem: FileNode[] }) => {
  const [mention, setMention] = useState({ active: false, type: '@', query: '', start: -1 });
  const [history, setHistory] = useState<string[]>([value]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setHistory([value]);
    setHistoryIndex(0);
  }, [fileId]);

  const updateValue = (newValue: string) => {
    onChange(newValue);
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newValue);
    if (newHistory.length > 100) newHistory.shift();
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      e.preventDefault();
      if (e.shiftKey) {
        if (historyIndex < history.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          onChange(history[newIndex]);
        }
      } else {
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          onChange(history[newIndex]);
        }
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        onChange(history[newIndex]);
      }
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.currentTarget.scrollTop;
    }
    if (overlayRef.current) {
      overlayRef.current.scrollTop = e.currentTarget.scrollTop;
      overlayRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    updateValue(val);
    
    const cursor = e.target.selectionStart;
    const textBefore = val.slice(0, cursor);
    
    const matchDouble = textBefore.match(/@@([a-zA-Z0-9_.-]*)$/);
    if (matchDouble) {
      setMention({ active: true, type: '@@', query: matchDouble[1].toLowerCase(), start: matchDouble.index! });
      return;
    }

    const matchSingle = textBefore.match(/@([a-zA-Z0-9_.-]*)$/);
    if (matchSingle) {
      setMention({ active: true, type: '@', query: matchSingle[1].toLowerCase(), start: matchSingle.index! });
      return;
    }

    setMention({ active: false, type: '@', query: '', start: -1 });
  };

  const insertContent = (file: FileNode & { path: string }) => {
    const insertText = mention.type === '@@' ? `@@${file.path}` : `@${file.name}`;
    const before = value.slice(0, mention.start);
    const after = value.slice(textareaRef.current?.selectionStart || (mention.start + mention.type.length + mention.query.length));
    
    const newVal = before + insertText + after;
    updateValue(newVal);
    setMention({ active: false, type: '@', query: '', start: -1 });
    
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const newCursor = before.length + insertText.length;
        textareaRef.current.setSelectionRange(newCursor, newCursor);
      }
    }, 0);
  };

  const lines = value.split('\n').length;
  const flatFiles = useMemo(() => flattenFS(fileSystem), [fileSystem]);
  const filteredFiles = flatFiles.filter(f => f.name.toLowerCase().includes(mention.query));

  const renderHighlightedText = (text: string) => {
    const regex = /(@@[a-zA-Z0-9_./-]+|@[a-zA-Z0-9_.-]+)/g;
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (part.startsWith('@@')) {
        return <span key={i} className="bg-secondary/20 text-secondary rounded-sm px-0.5">{part}</span>;
      } else if (part.startsWith('@')) {
        return <span key={i} className="bg-primary/20 text-primary rounded-sm px-0.5">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="relative flex h-full w-full bg-background font-mono text-sm overflow-hidden">
      <div 
        ref={lineNumbersRef}
        className="w-12 flex-shrink-0 bg-surface-container-low/50 py-6 flex flex-col items-center text-[10px] font-label text-on-surface-variant/30 select-none border-r border-outline-variant/5 overflow-hidden"
      >
        {Array.from({ length: Math.max(lines, 1) }).map((_, i) => (
          <div key={i} className="leading-6">{String(i + 1).padStart(2, '0')}</div>
        ))}
      </div>
      
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={overlayRef}
          className="absolute inset-0 p-6 leading-6 whitespace-pre-wrap break-words text-on-surface pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {renderHighlightedText(value.endsWith('\n') ? value + ' ' : value)}
        </div>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full p-6 leading-6 resize-none focus:outline-none custom-scrollbar whitespace-pre-wrap break-words text-transparent caret-on-surface bg-transparent"
          spellCheck={false}
        />
      </div>

      {mention.active && (
        <div className="absolute top-10 left-20 w-80 max-h-64 bg-surface-container-high border border-outline-variant/30 rounded-lg shadow-xl overflow-y-auto custom-scrollbar z-50 flex flex-col">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20 bg-surface-container-highest sticky top-0">
            Insert {mention.type === '@@' ? 'Path' : 'Mention'}
          </div>
          {filteredFiles.length > 0 ? (
            filteredFiles.map(f => (
              <div 
                key={f.path}
                className="px-3 py-2 hover:bg-surface-variant/50 cursor-pointer flex items-center space-x-3 border-b border-outline-variant/10 last:border-0 transition-colors"
                onClick={() => insertContent(f)}
              >
                {f.type === 'folder' ? <Folder size={14} className="text-secondary flex-shrink-0"/> : 
                 f.type === 'database' ? <Database size={14} className="text-primary flex-shrink-0"/> : 
                 <FileText size={14} className="text-on-surface-variant flex-shrink-0"/>}
                <div className="flex flex-col overflow-hidden">
                  <span className="truncate text-on-surface text-xs font-bold">{f.name}</span>
                  <span className="truncate text-on-surface-variant text-[10px]">{f.path}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-on-surface-variant text-xs">No files found</div>
          )}
        </div>
      )}
    </div>
  );
};

const FileTreeItem = ({ node, level, onSelect, selectedId }: { node: FileNode, level: number, onSelect: (node: FileNode) => void, selectedId: string | null }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const isFolder = node.type === 'folder';
  const isSelected = node.id === selectedId;
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      onSelect(node);
    }
  };

  return (
    <div>
      <div 
        className={`flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer group transition-colors ${isSelected ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'}`}
        onClick={handleToggle}
      >
        <span className="w-4 flex justify-center">
          {isFolder && (isOpen ? <ChevronDown size={14} className="text-primary-fixed-dim" /> : <ChevronRight size={14} className="text-on-surface-variant/40" />)}
        </span>
        
        {node.type === 'folder' && (
          <Folder size={14} className={isOpen ? "text-secondary" : "text-on-surface-variant/60"} />
        )}
        {node.type === 'file' && <FileText size={14} className={isSelected ? "text-primary" : "text-on-surface-variant/40"} />}
        {node.type === 'database' && <Database size={14} className={isSelected ? "text-primary" : "text-on-surface-variant/40"} />}
        
        <span className={`text-sm font-medium group-hover:text-on-surface truncate ${isSelected ? 'text-primary' : 'text-on-surface-variant'}`}>
          {node.name}
        </span>
      </div>
      
      {isFolder && isOpen && node.children && (
        <div className="ml-6 space-y-1 border-l border-outline-variant/20 pl-2 mt-1">
          {node.children.map(child => (
            <FileTreeItem 
              key={child.id} 
              node={child} 
              level={level + 1} 
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [fileSystem, setFileSystem] = useState<FileNode[]>(defaultFileSystem);
  const [selectedNode, setSelectedNode] = useState<FileNode | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');
  const [isDirty, setIsDirty] = useState(false);
  const [primaryTab, setPrimaryTab] = useState<'schedule' | 'finance' | 'notes' | 'contacts' | 'memory' | 'robot' | 'user'>('robot');
  const [secondaryTab, setSecondaryTab] = useState<string>('explorer');

  const navigation = {
    schedule: {
      title: 'SCHEDULE',
      subtitle: 'TIME_MANAGEMENT',
      items: [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'routine', label: 'My Routine', icon: Repeat },
        { id: 'tasks', label: 'Tasks List', icon: CheckSquare },
        { id: 'calendar', label: 'Calendar View', icon: CalendarDays },
      ]
    },
    finance: {
      title: 'FINANCE',
      subtitle: 'WEALTH_BUILDING',
      items: [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'transactions', label: 'Transactions', icon: Receipt },
        { id: 'budgeting', label: 'Budgeting', icon: PieChart },
      ]
    },
    notes: {
      title: 'NOTES',
      subtitle: 'KNOWLEDGE_BASE',
      items: [
        { id: 'my_notes', label: 'My Notes', icon: FileText },
        { id: 'favorites', label: 'Favorites', icon: Star },
        { id: 'temp', label: 'Temp', icon: Clock },
      ]
    },
    contacts: {
      title: 'CONTACTS',
      subtitle: 'RELATIONSHIPS',
      items: [
        { id: 'my_contacts', label: 'My Contacts', icon: Users },
        { id: 'favorites', label: 'Favorites', icon: Star },
      ]
    },
    memory: {
      title: 'MEMORY',
      subtitle: 'LIFE_MEMORY',
      items: [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'memory', label: 'Memory', icon: Brain },
      ]
    },
    robot: {
      title: 'ASSISTANT',
      subtitle: 'ASSISTANT_SETTINGS',
      items: [
        { id: 'ai_config', label: 'AI Configuration', icon: Settings },
        { id: 'preferences', label: 'Preferences', icon: Sliders },
        { id: 'explorer', label: 'Explorer', icon: FolderSearch },
        { id: 'workflow', label: 'Workflow', icon: Workflow },
      ]
    },
    user: {
      title: 'LIFE OS',
      subtitle: 'NAIKKELAS OS V1.0',
      items: [
        { id: 'account', label: 'Account', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
      ]
    }
  };

  // Update isDirty when content changes
  useEffect(() => {
    if (selectedNode && selectedNode.type === 'file') {
      setIsDirty(fileContent !== selectedNode.content);
    }
  }, [fileContent, selectedNode]);

  const handleSelect = (node: FileNode) => {
    setSelectedNode(node);
    if (node.type === 'file') {
      setFileContent(node.content || '');
      setViewMode('edit');
      setIsDirty(false);
    }
  };

  const handleSave = () => {
    if (!selectedNode || selectedNode.type !== 'file') return;
    
    const updateNodeInFS = (nodes: FileNode[]): FileNode[] => {
      return nodes.map(node => {
        if (node.id === selectedNode.id) {
          return { ...node, content: fileContent };
        }
        if (node.children) {
          return { ...node, children: updateNodeInFS(node.children) };
        }
        return node;
      });
    };

    const newFS = updateNodeInFS(fileSystem);
    setFileSystem(newFS);
    setSelectedNode({ ...selectedNode, content: fileContent });
    setIsDirty(false);
  };

  const flatFiles = useMemo(() => flattenFS(fileSystem), [fileSystem]);

  const resolvedContent = useMemo(() => {
    if (viewMode !== 'preview') return fileContent;
    
    const regex = /(@@[a-zA-Z0-9_./-]+|@[a-zA-Z0-9_.-]+)/g;
    return fileContent.replace(regex, (match) => {
      if (match.startsWith('@@')) {
        const path = match.slice(2);
        const file = flatFiles.find(f => f.path === path);
        return file ? `\`${file.path}\`` : match;
      } else if (match.startsWith('@')) {
        const name = match.slice(1);
        const file = flatFiles.find(f => f.name === name);
        return file ? (file.content || file.description || '') : match;
      }
      return match;
    });
  }, [fileContent, viewMode, flatFiles]);

  return (
    <div className="flex h-screen bg-background text-on-surface font-body overflow-hidden">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(243,255,202,0.05)] h-12 flex items-center">
        <div className="flex justify-between items-center px-4 w-full">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold tracking-widest text-[#f3ffca] font-headline tracking-tighter uppercase">NAIKKELAS OS</span>
            <div className="hidden md:flex items-center bg-surface-container-low px-3 py-1.5 rounded-md border border-outline-variant/10">
              <Search size={14} className="text-on-surface-variant mr-2" />
              <input className="bg-transparent border-none focus:ring-0 text-[10px] font-label uppercase tracking-widest text-on-surface placeholder:text-outline-variant w-40 outline-none" placeholder="Search your life..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[#adaaaa] hover:text-[#72eff5] transition-colors duration-300"><Bell size={16} /></button>
            <button className="text-[#adaaaa] hover:text-[#72eff5] transition-colors duration-300"><Grid size={16} /></button>
            <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-primary/20 flex items-center justify-center overflow-hidden">
              <img alt="User Profile Avatar" src="https://picsum.photos/seed/user/100/100" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* SideNavBar Layer 1 (Global Anchors) */}
      <nav className="fixed left-0 top-0 h-full z-40 flex flex-col py-6 gap-4 bg-[#0e0e0e] w-12 hover:w-48 transition-all duration-300 border-r border-[#262626]/20 pt-16 overflow-hidden group">
        <div className="px-3 flex items-center h-4">
          <span className="text-[#f3ffca] font-black italic text-[9px] font-headline uppercase tracking-widest whitespace-nowrap">NK_OS</span>
        </div>
        <div className="flex flex-col gap-4 flex-1 px-2">
          <button onClick={() => { setPrimaryTab('schedule'); setSecondaryTab('overview'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'schedule' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <Calendar size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">SCHEDULE</span>
          </button>
          <button onClick={() => { setPrimaryTab('finance'); setSecondaryTab('overview'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'finance' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <Wallet size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">FINANCE</span>
          </button>
          <button onClick={() => { setPrimaryTab('notes'); setSecondaryTab('my_notes'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'notes' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <FileText size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">NOTES</span>
          </button>
          <button onClick={() => { setPrimaryTab('contacts'); setSecondaryTab('my_contacts'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'contacts' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <Users size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">CONTACTS</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 pb-4 px-2">
          <button onClick={() => { setPrimaryTab('memory'); setSecondaryTab('overview'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'memory' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <Brain size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">MEMORY</span>
          </button>
          <button onClick={() => { setPrimaryTab('robot'); setSecondaryTab('explorer'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'robot' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <Bot size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">ASSISTANT</span>
          </button>
          <button onClick={() => { setPrimaryTab('user'); setSecondaryTab('account'); }} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap ${primaryTab === 'user' ? 'bg-[#f3ffca] text-[#0e0e0e] shadow-[0_0_15px_rgba(243,255,202,0.4)]' : 'text-[#adaaaa] opacity-60 hover:opacity-100 hover:text-[#72eff5]'}`}>
            <User size={16} className="flex-shrink-0" />
            <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">USER</span>
          </button>
        </div>
      </nav>

      {/* Main Layout with remaining columns */}
      <main className="ml-12 mt-12 flex w-[calc(100%-3rem)] h-[calc(100vh-3rem)] relative z-10">
        
        {/* Column 2: Contextual Tabs (formerly SideNavBar Layer 2) */}
        <div className="w-64 bg-[#131313] border-r border-[#262626]/40 font-body text-sm tracking-tight flex flex-col flex-shrink-0">
          <div className="p-6 mb-4 flex-shrink-0">
            <h2 className="text-[#72eff5] font-headline font-bold text-xs tracking-widest uppercase">{navigation[primaryTab].title}</h2>
            <p className="text-on-surface-variant text-[10px] tracking-[0.2em]">{navigation[primaryTab].subtitle}</p>
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0 px-2">
            {navigation[primaryTab].items.map(item => {
              const Icon = item.icon;
              const isActive = secondaryTab === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => setSecondaryTab(item.id)}
                  className={`flex items-center py-2.5 px-4 rounded-lg transition-all duration-150 group w-full text-left ${isActive ? 'text-[#72eff5] font-bold bg-[#201f1f]/80 border-l-2 border-[#72eff5]' : 'text-[#adaaaa] hover:bg-[#201f1f] hover:text-white'}`}
                >
                  <Icon size={18} className={`mr-3 ${isActive ? '' : 'opacity-50 group-hover:opacity-100'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="mt-auto p-6 flex-shrink-0">
            <button className="w-full py-3 bg-surface-container-high border border-outline-variant/20 rounded-lg text-primary text-xs font-headline font-bold tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
              NEW_ENTRY
            </button>
          </div>
        </div>

        {/* Column 3: File Explorer Panel */}
        {primaryTab === 'robot' && secondaryTab === 'explorer' && (
          <div className="w-72 bg-surface flex flex-col border-r border-outline-variant/10 flex-shrink-0">
            <div className="p-6 pb-2 flex items-center justify-between">
              <h2 className="text-sm font-headline font-bold text-on-surface">Vault</h2>
              <div className="flex gap-2">
                <FolderPlus size={16} className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
                <FilePlus size={16} className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-2">
              <div className="space-y-1">
                {fileSystem.map(node => (
                  <FileTreeItem 
                    key={node.id} 
                    node={node} 
                    level={0} 
                    onSelect={handleSelect}
                    selectedId={selectedNode?.id || null}
                  />
                ))}
              </div>
            </div>
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-tertiary/10 rounded-lg">
                  <Cloud size={16} className="text-tertiary" />
                </div>
                <div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">Sync Status</p>
                  <p className="text-xs font-bold text-on-surface">Naikkelas Cloud Sync</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Column 4: Main Editor Panel */}
        <div className="flex-1 bg-surface-container-lowest flex flex-col overflow-hidden">
          {primaryTab === 'robot' && secondaryTab === 'explorer' ? (
            selectedNode ? (
              <>
                {/* Editor Toolbar */}
                <div className="h-12 flex items-center justify-between px-6 bg-surface-container-low border-b border-outline-variant/10 flex-shrink-0">
                  <div className="flex gap-4 items-center">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <Bold size={16} />
                    </button>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <Italic size={16} />
                    </button>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <Link size={16} />
                    </button>
                    <div className="w-[1px] h-4 bg-outline-variant/30 self-center mx-2"></div>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <ImageIcon size={16} />
                    </button>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <Code size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex bg-surface-container-high rounded-lg p-1 border border-outline-variant/20">
                      <button 
                        onClick={() => setViewMode('edit')}
                        className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-md transition-all ${viewMode === 'edit' ? 'bg-surface-variant text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
                      >
                        <Edit2 size={12} />
                        <span>Edit</span>
                      </button>
                      <button 
                        onClick={() => setViewMode('preview')}
                        className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-md transition-all ${viewMode === 'preview' ? 'bg-surface-variant text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
                      >
                        <Eye size={12} />
                        <span>Preview</span>
                      </button>
                    </div>
                    <button 
                      onClick={handleSave}
                      disabled={!isDirty}
                      className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-lg transition-all ${isDirty ? 'bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20' : 'bg-surface-container-highest text-on-surface-variant cursor-not-allowed'}`}
                    >
                      <Save size={12} />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
                
                {/* File Header */}
                <div className="px-8 py-4 border-b border-surface-variant/20 bg-surface-container-lowest flex-shrink-0">
                  <div className="flex items-center space-x-3 text-sm text-on-surface">
                    {selectedNode.type === 'file' && <FileText size={18} className="text-on-surface-variant" />}
                    {selectedNode.type === 'database' && <Database size={18} className="text-primary" />}
                    <span className="font-headline font-bold text-lg">{selectedNode.name}</span>
                    {selectedNode.type === 'database' && (
                      <span className="text-primary text-[10px] font-bold px-2 py-1 bg-primary/10 rounded uppercase ml-3">
                        {selectedNode.description}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 overflow-hidden relative">
                  {selectedNode.type === 'file' ? (
                    viewMode === 'edit' ? (
                      <MarkdownEditor 
                        fileId={selectedNode.id}
                        value={fileContent} 
                        onChange={setFileContent} 
                        fileSystem={fileSystem} 
                      />
                    ) : (
                      <div className="w-full h-full overflow-y-auto custom-scrollbar p-12 bg-background">
                        <div className="prose prose-invert max-w-3xl mx-auto font-body text-on-surface prose-headings:text-on-surface prose-headings:font-headline prose-a:text-secondary prose-code:text-primary prose-strong:text-on-surface">
                          <ReactMarkdown>{resolvedContent}</ReactMarkdown>
                        </div>
                      </div>
                    )
                  ) : selectedNode.type === 'database' ? (
                    <div className="p-12 flex flex-col items-center justify-center h-full text-on-surface-variant">
                      <Database size={64} className="text-primary/20 mb-6" />
                      <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Database Connection</h3>
                      <p className="text-base text-center max-w-md leading-relaxed">
                        Connected to database <code className="bg-surface-container-high px-2 py-1 rounded text-primary font-mono text-sm">{selectedNode.description}</code>.
                        <br />Search is currently locked in read-only mode.
                      </p>
                      <button className="mt-8 px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 active:scale-95 transition-all text-xs uppercase tracking-widest">
                        Open Search Console
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-on-surface-variant">
                <Terminal size={64} className="text-surface-variant mb-6" />
                <p className="font-headline text-xl">Select a file or database to view</p>
              </div>
            )
          ) : primaryTab === 'robot' && secondaryTab === 'workflow' ? (
            <WorkflowMonitor fileSystem={fileSystem} />
          ) : primaryTab === 'robot' && secondaryTab === 'preferences' ? (
            <RobotPreferences />
          ) : primaryTab === 'schedule' && secondaryTab === 'overview' ? (
            <ScheduleOverview />
          ) : primaryTab === 'schedule' && secondaryTab === 'routine' ? (
            <ScheduleRoutine />
          ) : primaryTab === 'schedule' && secondaryTab === 'calendar' ? (
            <ScheduleCalendar />
          ) : primaryTab === 'schedule' && secondaryTab === 'tasks' ? (
            <ScheduleTasks />
          ) : primaryTab === 'finance' && secondaryTab === 'overview' ? (
            <FinanceOverview />
          ) : primaryTab === 'finance' && secondaryTab === 'transactions' ? (
            <FinanceTransactions />
          ) : primaryTab === 'notes' && secondaryTab === 'my_notes' ? (
            <NotesMyNotes />
          ) : primaryTab === 'contacts' && secondaryTab === 'my_contacts' ? (
            <ContactsMyContacts />
          ) : primaryTab === 'memory' && secondaryTab === 'overview' ? (
            <MemoryOverview />
          ) : primaryTab === 'memory' && secondaryTab === 'memory' ? (
            <MemoryMemory />
          ) : primaryTab === 'user' && secondaryTab === 'account' ? (
            <UserProfile />
          ) : (
            <div className="flex-1 flex items-center justify-center text-on-surface-variant">
              <div className="text-center">
                <div className="text-4xl mb-4 opacity-20"><Settings size={64} className="mx-auto" /></div>
                <h2 className="text-xl font-headline font-bold text-on-surface tracking-widest uppercase mb-2">{navigation[primaryTab].items.find(i => i.id === secondaryTab)?.label}</h2>
                <p className="text-sm tracking-widest opacity-50">MODULE_NOT_INITIALIZED</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
