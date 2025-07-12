import React from 'react';
import Card from '../ui/Card';

const ProfileSettings: React.FC = () => {
    return (
        <Card>
            <h3 className="text-lg font-semibold text-white mb-6">Profile & Security</h3>
            <div className="space-y-4">
                <div>
                    <label className="text-sm text-slate-400">Full Name</label>
                    <input type="text" defaultValue="Danny Kardhashi" className="w-full mt-1 p-2 bg-base-light border border-border-color rounded-md" />
                </div>
                <div>
                    <label className="text-sm text-slate-400">Email Address</label>
                    <input type="email" defaultValue="danny@vein.app" className="w-full mt-1 p-2 bg-base-light border border-border-color rounded-md" />
                </div>
                 <div>
                    <label className="text-sm text-slate-400">Password</label>
                    <button className="w-full mt-1 text-left p-2 bg-base-light border border-border-color rounded-md text-brand-blue hover:bg-slate-800">Change Password</button>
                </div>
                <div>
                    <label className="text-sm text-slate-400">Biometric MFA</label>
                     <div className="flex items-center justify-between mt-1 p-2 bg-base-light border border-border-color rounded-md">
                        <span>Enabled on this device</span>
                        <button className="text-sm text-accent-red hover:underline">Remove</button>
                    </div>
                </div>
                 <button className="w-full bg-brand-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">Save Changes</button>
            </div>
        </Card>
    );
};

export default ProfileSettings;