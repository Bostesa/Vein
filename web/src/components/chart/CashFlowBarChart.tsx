import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import { CashFlowData } from '../../lib/types';
interface CashFlowBarChartProps { data: CashFlowData[]; }
const CashFlowBarChart: React.FC<CashFlowBarChartProps> = ({ data }) => (
    <Card className="h-[300px]">
        <h3 className="text-base font-semibold text-text-primary mb-4">7-Day Cash Flow</h3>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value: number) => `$${value/1000}k`} />
                <Tooltip cursor={{fill: 'rgba(100, 116, 139, 0.1)'}} contentStyle={{backgroundColor: '#111', border: '1px solid #334155', borderRadius: '0.5rem'}} labelStyle={{color: '#E2E8F0'}} />
                <Bar dataKey="flow" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                        <rect key={`cell-${index}`} fill={entry.flow >= 0 ? '#3b82f6' : '#ef4444'} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </Card>
);
export default CashFlowBarChart;