import React from 'react';
import { PageTitle } from '../components/layout/PageTitle';
import { AuditExportCard } from '../components/audit/AuditExportCard';

const AuditPage = () => (
    <>
        <PageTitle title="Audit Center" />
        <div className="max-w-3xl">
            <AuditExportCard />
            {/* Other audit-related components can be added here */}
        </div>
    </>
);

export default AuditPage;
