import React from 'react';
import { Card } from '../ui/Card';
import { RiskBadge } from '../ui/RiskBadge';
import { formatCurrency } from '../../lib/utils';

const InvoicesTable = ({ invoices }) => (
    <Card>
        <h3 className="text-base font-semibold text-white mb-4">Invoices</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-xs text-slate-400 font-semibold uppercase border-b border-slate-800">
                        <th className="p-3">Vendor</th>
                        <th className="p-3">Risk</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Due Date</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(inv => (
                        <tr key={inv.id} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                            <td className="p-3 text-white font-medium">{inv.vendor}</td>
                            <td className="p-3"><RiskBadge score={inv.risk} /></td>
                            <td className="p-3 text-slate-300 font-mono">{formatCurrency(inv.amount)}</td>
                            <td className="p-3 text-slate-300">{inv.dueDate}</td>
                            <td className="p-3 text-slate-300">{inv.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);

export { InvoicesTable };
