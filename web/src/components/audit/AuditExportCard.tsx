import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Card } from '../ui/Card';
import { Spinner } from '../ui/Spinner';

const AuditExportCard = () => {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = () => {
        setIsExporting(true);
        toast.loading('Generating audit package...');
        
        // Simulate API call to generate a report
        setTimeout(() => {
            setIsExporting(false);
            toast.dismiss();
            toast.success('Export complete! Your download will begin shortly.');
            // In a real app, you would trigger a file download here.
            console.log("ZIP download initiated for Q3 2025.");
        }, 2500);
    };

    return (
        <Card>
             <h3 className="text-base font-semibold text-white mb-2">Export Audit Package</h3>
             <p className="text-sm text-slate-400 mb-4">Generate and download a ZIP archive of all transactions and cryptographic proofs for a selected period.</p>
             <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
                    <option>Q3 2025</option>
                    <option>Q2 2025</option>
                    <option>Q1 2025</option>
                </select>
                <button 
                    onClick={handleExport} 
                    disabled={isExporting} 
                    className="bg-white text-black font-semibold py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 disabled:bg-slate-500 w-full sm:w-auto"
                >
                    {isExporting && <Spinner />}
                    Export ZIP
                </button>
             </div>
             <p className="text-xs text-slate-500 mt-4">Note: Download links are secure and expire in 24 hours.</p>
        </Card>
    );
};

export { AuditExportCard };
