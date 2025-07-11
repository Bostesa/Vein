import React, { useState, useMemo } from 'react';

import { PageTitle } from '../components/layout/PageTitle';
import { TotalCashCard } from '../components/accounts/TotalCashCard';
import { CashFlowLineChart } from '../components/chart/CashFlowLineChart';
import { CashFlowBarChart } from '../components/chart/CashFlowBarChart';
import { InvoicesTable } from '../components/invoices/InvoicesTable';

// Mock Data (In a real app, this would come from an API context or state management library)
const initialAccounts = [{ id: 1, name: 'Chase Business Checking', provider: 'Chase', balance: 125450.75 }];
const initialInvoices = [
    { id: 'inv_1', vendor: 'Vercel', amount: 99.00, dueDate: '2025-07-15', status: 'Paid', risk: 10 },
    { id: 'inv_2', vendor: 'OpenAI', amount: 150.00, dueDate: '2025-07-20', status: 'Pending Approval', risk: 45 },
    { id: 'inv_3', vendor: 'Figma', amount: 450.00, dueDate: '2025-08-01', status: 'Scheduled', risk: 25 },
    { id: 'inv_4', vendor: 'AWS', amount: 2345.67, dueDate: '2025-08-05', status: 'Paid', risk: 85 },
];
const mockCashFlow7Day = [{ name: 'M', flow: 12000 }, { name: 'T', flow: -3400 }, { name: 'W', flow: 8500 }, { name: 'T', flow: 15000 }, { name: 'F', flow: -7600 }, { name: 'S', flow: 2000 }, { name: 'S', flow: 500 }];
const generateForecastData = () => {
    let data = []; let lastValue = 185000;
    for (let i = 0; i < 90; i++) {
        const date = new Date(); date.setDate(date.getDate() + i);
        lastValue += (Math.random() - 0.45) * 5000;
        data.push({ date: date.toISOString().split('T')[0], median: Math.round(lastValue) });
    }
    return data;
};

const DashboardPage = () => {
    const [accounts] = useState(initialAccounts);
    const [invoices] = useState(initialInvoices);
    const forecastData = useMemo(() => generateForecastData(), []);

    return (
        <>
            <PageTitle title="Dashboard" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <TotalCashCard accounts={accounts} />
                    <CashFlowLineChart data={forecastData} />
                </div>
                <div className="flex flex-col gap-6">
                    <CashFlowBarChart data={mockCashFlow7Day} />
                </div>
            </div>
            <div className="mt-6">
                <InvoicesTable invoices={invoices} />
            </div>
        </>
    );
};

export default DashboardPage;
