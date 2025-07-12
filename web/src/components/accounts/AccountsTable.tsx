import React from 'react';
import Card from '../ui/Card';
import { formatCurrency } from '../../lib/utils';
import { Account } from '../../lib/types'; // Import the type

interface AccountsTableProps {
  accounts: Account[];
}

const AccountsTable: React.FC<AccountsTableProps> = ({ accounts }) => {
    return (
        <Card>
            <h3 className="text-base font-semibold text-white mb-4">Connected Accounts</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs text-slate-400 font-semibold uppercase border-b border-slate-800">
                            <th className="p-3">Account</th>
                            <th className="p-3 text-right">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => (
                            <tr key={account.id} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                                <td className="p-3 text-white font-medium">
                                    {account.name}
                                    <span className="block text-xs text-slate-400 font-normal">{account.provider}</span>
                                </td>
                                <td className="p-3 text-right text-slate-300 font-mono">
                                    {formatCurrency(account.balance)}
                                </td>
                            </tr>
                        ))}
                         {accounts.length === 0 && (
                            <tr>
                                <td colSpan={2} className="p-4 text-center text-slate-500">
                                    No accounts connected.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default AccountsTable;
