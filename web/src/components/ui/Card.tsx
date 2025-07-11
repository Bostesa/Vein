import React from 'react';

const Card = ({ children, className = '' }) => (
    <div className={`bg-[#0A0A0A] border border-slate-800/50 rounded-xl p-6 relative ${className}`}>
        {children}
    </div>
);

export { Card };
