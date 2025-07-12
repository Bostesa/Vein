import React, { useState, useMemo } from 'react';

import PageTitle from '../components/layout/PageTitle';
import TotalCashCard from '../components/accounts/TotalCashCard';
import CashFlowLineChart from '../components/chart/CashFlowLineChart';
import CashFlowBarChart from '../components/chart/CashFlowBarChart';
import InvoicesTable from '../components/invoices/InvoicesTable';
import AlertsFeed from '../components/dashboard/AlertsFeed';
import { FinancialHealthWidget, ActionItemsWidget } from '../components/dashboard/DashboardWidgets'; // New import
import { Account, Invoice, CashFlowData, ForecastData } from '../lib/types';

// Mock Data
const initialAccounts: Account[] = [{ id: 1, name: 'Chase Business Checking', provider: 'Chase', balance: 125450.75 }];
const initialInvoices: Invoice[] = [
    { id: 'inv_1', vendor: 'Vercel', amount: 99.00, dueDate: '2025-07-15', status: 'Paid', risk: 10 },
    { id: 'inv_2', vendor: 'OpenAI', amount: 150.00, dueDate: '2025-07-20', status: 'Pending Approval', risk: 45 },
    { id: 'inv_3', vendor: 'Figma', amount: 450.00, dueDate: '2025-08-01', status: 'Scheduled', risk: 25 },
];
const mockCashFlow7Day: CashFlowData[] = [{ name: 'M', flow: 12000 }, { name: 'T', flow: -3400 }, { name: 'W', flow: 8500 }, { name: 'T', flow: 15000 }, { name: 'F', flow: -7600 }, { name: 'S', flow: 2000 }, { name: 'S', flow: 500 }];

const generateForecastData = (): ForecastData[] => {
    let data: ForecastData[] = []; let lastValue = 185000;
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
    const pendingInvoices = useMemo(() => invoices.filter(inv => inv.status === 'Pending Approval'), [invoices]);

    return (
        <>
            <PageTitle title="Dashboard" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* Main Content Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <TotalCashCard accounts={accounts} />
                    <CashFlowLineChart data={forecastData} />
                    <InvoicesTable invoices={invoices} />
                </div>
                {/* Right Sidebar Column */}
                <div className="flex flex-col gap-6">
                    <ActionItemsWidget pendingInvoices={pendingInvoices} />
                    <FinancialHealthWidget />
                    <AlertsFeed />
                    <CashFlowBarChart data={mockCashFlow7Day} />
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
