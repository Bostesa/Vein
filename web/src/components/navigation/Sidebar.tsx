import React from 'react';
import { IconLogo, IconDashboard, IconSecurity, IconAudit, IconSettings, IconAgentStore } from '../../lib/icons';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onCashOutClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, onCashOutClick }) => {
    const mainNav = [
        { name: 'Dashboard', icon: <IconDashboard />, page: 'dashboard' },
        { name: 'Audit Center', icon: <IconAudit />, page: 'audit' },
    ];
    const secondaryNav = [
        { name: 'Agent Store', icon: <IconAgentStore />, page: 'agent-store' },
        { name: 'Security', icon: <IconSecurity />, page: 'security' },
        { name: 'Settings', icon: <IconSettings />, page: 'settings' },
    ];

    const NavButton: React.FC<{item: any, isCurrent: boolean}> = ({ item, isCurrent }) => (
        <button 
            onClick={() => setCurrentPage(item.page)} 
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isCurrent 
                ? 'bg-slate-800 text-white' 
                : 'text-text-secondary hover:bg-slate-900 hover:text-white'
            }`}
        >
            {item.icon} {item.name}
        </button>
    );

    return (
        <aside className="w-64 bg-black border-r border-border-color flex flex-col flex-shrink-0 p-4">
            <div className="flex items-center gap-3 mb-6 px-2">
                <IconLogo />
                <h1 className="text-lg font-semibold text-white tracking-tighter">vein</h1>
            </div>
            
            <button 
                onClick={onCashOutClick}
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors mb-6"
            >
                Cash Out
            </button>

            <nav className="flex flex-col flex-grow">
                <ul className="space-y-2">
                    {mainNav.map(item => <li key={item.name}><NavButton item={item} isCurrent={currentPage === item.page} /></li>)}
                </ul>
                <div className="mt-auto">
                    <p className="px-3 pt-4 pb-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">Configuration</p>
                    <ul className="space-y-2">
                         {secondaryNav.map(item => <li key={item.name}><NavButton item={item} isCurrent={currentPage === item.page} /></li>)}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
