import React from 'react';
import Card from '../ui/Card';
import { formatCurrency } from '../../lib/utils';
import { Invoice } from '../../lib/types';

// Widget for displaying key financial health metrics
export const FinancialHealthWidget: React.FC = () => {
    const burnRate = 15230; // Mock data
    const runwayMonths = 18; // Mock data

    return (
        <Card>
            <h3 className="text-base font-semibold text-text-primary mb-4">Financial Health</h3>
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Avg. Monthly Burn</span>
                    <span className="font-mono text-text-primary">{formatCurrency(burnRate)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Runway</span>
                    <span className="font-mono text-text-primary">{runwayMonths} months</span>
                </div>
            </div>
        </Card>
    );
};

// Widget for showing actionable items like pending approvals
interface ActionItemsWidgetProps {
    pendingInvoices: Invoice[];
}
export const ActionItemsWidget: React.FC<ActionItemsWidgetProps> = ({ pendingInvoices }) => {
    return (
        <Card>
            <h3 className="text-base font-semibold text-text-primary mb-4">Action Items</h3>
            {pendingInvoices.length > 0 ? (
                 <div className="space-y-2">
                    {pendingInvoices.map(invoice => (
                        <div key={invoice.id} className="p-3 bg-base-dark rounded-lg flex justify-between items-center">
                            <div>
                                <p className="text-sm text-text-primary">Approve invoice from <span className="font-semibold">{invoice.vendor}</span></p>
                                <p className="text-xs text-text-secondary">{formatCurrency(invoice.amount)}</p>
                            </div>
                            <button className="text-sm text-brand-blue hover:underline">View</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-text-secondary text-center py-4">No pending actions.</p>
            )}
        </Card>
    );
};