import React from 'react';
import Card from '../ui/Card';
import { IconInfo, IconWarning, IconCritical } from '../../lib/icons';

const AlertsFeed: React.FC = () => {
    const alerts = [
        { type: 'info', text: 'Consider moving $50,000 from Chase to your Mercury Treasury for a higher yield.' },
        { type: 'warning', text: 'Duplicate subscription found: You paid for Figma twice this month.' },
        { type: 'critical', text: 'Cash flow forecast predicts a balance of -$5,200 on July 28th.' },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'critical': return <IconCritical />;
            case 'warning': return <IconWarning />;
            case 'info':
            default: return <IconInfo />;
        }
    }

    return (
        <Card>
            <h3 className="text-base font-semibold text-text-primary mb-4">AI Insights & Alerts</h3>
            <div className="space-y-3">
                {alerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-base-dark rounded-lg">
                        <span className="flex-shrink-0 mt-1">{getIcon(alert.type)}</span>
                        <p className="text-sm text-slate-300">{alert.text}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default AlertsFeed;