import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';
import { formatCurrency } from '../../lib/utils';

const CashFlowLineChart = ({ data }) => (
    <Card className="h-[300px]">
        <h3 className="text-base font-semibold text-white mb-4">90-Day Cash Forecast</h3>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis 
                    dataKey="date" 
                    stroke="#64748B" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(str) => new Date(str).toLocaleDateString('en-US', {month: 'short'})} 
                    interval={29} 
                />
                <YAxis 
                    stroke="#64748B" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value/1000}k`} 
                />
                <Tooltip 
                    contentStyle={{backgroundColor: '#111', border: '1px solid #334155', borderRadius: '0.5rem'}} 
                    labelStyle={{color: '#CBD5E1'}} 
                    formatter={(value) => [formatCurrency(value), 'Median']} 
                />
                <Line type="monotone" dataKey="median" stroke="#FFFFFF" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    </Card>
);

export { CashFlowLineChart };
