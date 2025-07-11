import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';

const CashFlowBarChart = ({ data }) => (
    <Card className="h-[300px]">
        <h3 className="text-base font-semibold text-white mb-4">7-Day Cash Flow</h3>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                <XAxis 
                    dataKey="name" 
                    stroke="#64748B" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                />
                <YAxis 
                    stroke="#64748B" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value/1000}k`} 
                />
                <Tooltip 
                    cursor={{fill: 'rgba(100, 116, 139, 0.1)'}} 
                    contentStyle={{backgroundColor: '#111', border: '1px solid #334155', borderRadius: '0.5rem'}} 
                    labelStyle={{color: '#CBD5E1'}} 
                />
                <Bar dataKey="flow" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                        <rect key={`cell-${index}`} fill={entry.flow >= 0 ? 'rgba(56, 189, 248, 0.6)' : 'rgba(244, 114, 182, 0.6)'} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </Card>
);

export { CashFlowBarChart };
