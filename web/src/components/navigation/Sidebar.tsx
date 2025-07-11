import React from 'react';
import { IconLogo, IconDashboard, IconSecurity, IconAudit, IconSettings } from '../../lib/icons';

const Sidebar = ({ currentPage, setCurrentPage, onCashOutClick }) => {
    const navItems = [
        { name: 'Dashboard', icon: <IconDashboard />, page: 'dashboard' },
        { name: 'Security', icon: <IconSecurity />, page: 'security' },
        { name: 'Audit Center', icon: <IconAudit />, page: 'audit' },
        { name: 'Settings', icon: <IconSettings />, page: 'settings' },
    ];

    return (
        <nav className="w-64 bg-black border-r border-slate-800/50 p-4 flex flex-col flex-shrink-0">
            <div className="flex items-center gap-3 mb-10 px-2">
                <IconLogo />
                <h1 className="text-lg font-semibold text-white tracking-tighter">vein</h1>
            </div>
            <ul className="space-y-2">
                {navItems.map(item => (
                    <li key={item.name}>
                        <button 
                            onClick={() => setCurrentPage(item.page)} 
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                currentPage === item.page 
                                ? 'bg-slate-800 text-white' 
                                : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                            }`}
                        >
                            {item.icon} {item.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-auto p-2">
                <button 
                    onClick={onCashOutClick}
                    className="w-full bg-white text-black font-semibold py-2 px-4 rounded-lg text-sm"
                >
                    Cash Out
                </button>
            </div>
        </nav>
    );
};

export { Sidebar };
