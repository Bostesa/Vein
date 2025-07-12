import React from 'react';
import { IconLogo } from '../../lib/icons';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 border-b border-slate-800/50 sticky top-0 bg-black/80 backdrop-blur-sm z-40">
            {/* Left side: Logo and App Name */}
            <div className="flex items-center gap-3">
                <IconLogo />
                <h1 className="text-lg font-semibold text-white tracking-tighter">vein</h1>
            </div>

            {/* Right side: User Actions */}
            <div className="flex items-center gap-4">
                <button className="text-sm text-slate-400 hover:text-white transition-colors">
                    Help
                </button>
                <button className="w-8 h-8 rounded-full bg-slate-800 text-white font-semibold flex items-center justify-center hover:bg-slate-700 transition-colors">
                    D
                </button>
            </div>
        </header>
    );
};

export default Header;