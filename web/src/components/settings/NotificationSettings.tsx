import React from 'react';
import Card from '../ui/Card';

const NotificationSettings: React.FC = () => {
    const settings = [
        { id: 'low-balance', label: 'Low Balance Alerts', description: 'Notify me when cash is forecast to dip below a threshold.' },
        { id: 'large-fee', label: 'Large Fee Detections', description: 'Flag transactions with unusually high processing or service fees.' },
        { id: 'duplicate-sub', label: 'Duplicate Subscriptions', description: 'Identify recurring payments to the same vendor.' },
    ];

    return (
        <Card>
            <h3 className="text-lg font-semibold text-white mb-6">Notification Settings</h3>
            <div className="space-y-4">
                {settings.map(setting => (
                    <div key={setting.id} className="flex items-center justify-between p-2 rounded-md hover:bg-slate-900">
                        <div>
                            <p className="font-medium text-white">{setting.label}</p>
                            <p className="text-sm text-slate-400">{setting.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                        </label>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default NotificationSettings;
