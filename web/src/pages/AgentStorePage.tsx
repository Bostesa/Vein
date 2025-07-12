import React from 'react';
import PageTitle from '../components/layout/PageTitle';
import Card from '../components/ui/Card';

const AgentStorePage: React.FC = () => {
    const agents = [
        { name: 'Autonomous Bookkeeper', description: 'Automatically categorizes transactions and closes your books.', status: 'Installed' },
        { name: 'Vendor Rate Negotiator', description: 'Monitors SaaS spend and negotiates better rates on your behalf.', status: 'Install' },
        { name: 'Tax Optimizer', description: 'Prepares data for tax season and identifies potential savings.', status: 'Install' },
        { name: 'FX Hedging Agent', description: 'Automatically hedges foreign currency exposure based on your risk tolerance.', status: 'Coming Soon' },
    ];

    return (
        <>
            <PageTitle title="Agent Store" />
            <p className="mb-8 max-w-2xl text-slate-400">
                Enhance your financial operations by installing autonomous agents. Each agent performs specific tasks to save you time and money.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map(agent => (
                    <Card key={agent.name} className="flex flex-col">
                        <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                        <p className="text-sm text-slate-400 mt-2 flex-grow">{agent.description}</p>
                        <div className="mt-4">
                            <button
                                disabled={agent.status !== 'Install'}
                                className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                                    agent.status === 'Installed' ? 'bg-green-500/10 text-accent-green' :
                                    agent.status === 'Install' ? 'bg-brand-blue hover:bg-blue-700 text-white' :
                                    'bg-slate-800 text-slate-500 cursor-not-allowed'
                                }`}
                            >
                                {agent.status}
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default AgentStorePage;
