import React from 'react';
import { PageTitle } from '../components/layout/PageTitle';
import { AutoCreditCard } from '../components/settings/AutoCreditCard';

const SettingsPage = () => (
    <>
        <PageTitle title="Settings" />
        <div className="max-w-3xl">
            <AutoCreditCard />
            {/* Other settings panels can be added here */}
        </div>
    </>
);

export default SettingsPage;
