import React, { useState } from 'react';
import Card from '../ui/Card';

const AutoCreditCard = () => {
    const [isAutoCredit, setIsAutoCredit] = useState(false);

    return (
        <Card>
            <h3 className="text-base font-semibold text-white mb-2">Auto-Credit Facility</h3>
            <p className="text-sm text-slate-400 mb-4">Automatically draw from your credit line to avoid cash shortfalls and ensure operational continuity.</p>
            
            <div className="flex items-center justify-between bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <span className="font-medium text-white">Enable Auto-Credit</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isAutoCredit} onChange={() => setIsAutoCredit(!isAutoCredit)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>

            {isAutoCredit && (
                <div className="mt-4 text-sm text-blue-400 border border-blue-500/30 bg-blue-500/10 p-3 rounded-lg">
                    <p className="font-bold">Auto-Credit is active.</p>
                    <p className="text-blue-300/80">Credit Limit: $50,000.00 | Outstanding: $0.00</p>
                </div>
            )}
        </Card>
    );
};

export default AutoCreditCard ;
