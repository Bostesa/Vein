import React, { useMemo } from 'react';
import { Card } from '../ui/Card';
import { GlowingBorder } from '../ui/GlowingBorder';
import { formatCurrency } from '../../lib/utils';

const TotalCashCard = ({ accounts }) => {
    // useMemo ensures this calculation only re-runs when the accounts array changes.
    const totalCash = useMemo(() => 
        accounts.reduce((sum, acc) => sum + acc.balance, 0), 
        [accounts]
    );

    return (
        <Card className="overflow-hidden">
            <GlowingBorder side="top" color="blue" />
            <h2 className="text-sm font-medium text-slate-400 mb-2">Total Cash Balance</h2>
            <p className="text-5xl font-bold text-white tracking-tighter">{formatCurrency(totalCash)}</p>
            <p className="text-green-400 mt-2 text-sm">+2.1% vs last week</p>
        </Card>
    );
};

export { TotalCashCard };
