import React, { useState } from 'react';
import PageTitle from '../components/layout/PageTitle';
import AutoCreditCard from '../components/settings/AutoCreditCard';
import ProfileSettings from '../components/settings/ProfileSettings';
import NotificationSettings from '../components/settings/NotificationSettings';

const SettingsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'notifications':
                return <NotificationSettings />;
            case 'autocredit':
                return <AutoCreditCard />;
            case 'profile':
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <>
            <PageTitle title="Settings" />
            <div className="flex flex-col lg:flex-row gap-8">
                <aside className="lg:w-1/4">
                    <nav className="flex flex-col space-y-2">
                        <button onClick={() => setActiveTab('profile')} className={`text-left p-2 rounded-md text-sm ${activeTab === 'profile' ? 'bg-slate-800 font-semibold' : 'hover:bg-slate-900'}`}>Profile & Security</button>
                        <button onClick={() => setActiveTab('notifications')} className={`text-left p-2 rounded-md text-sm ${activeTab === 'notifications' ? 'bg-slate-800 font-semibold' : 'hover:bg-slate-900'}`}>Notifications</button>
                        <button onClick={() => setActiveTab('autocredit')} className={`text-left p-2 rounded-md text-sm ${activeTab === 'autocredit' ? 'bg-slate-800 font-semibold' : 'hover:bg-slate-900'}`}>Auto-Credit</button>
                    </nav>
                </aside>
                <div className="flex-1">
                    {renderContent()}
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
