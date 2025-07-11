import React from 'react';
import { PageTitle } from '../components/layout/PageTitle';
import { ZkProofVerifier } from '../components/security/ZkProofVerifier';

const SecurityPage = () => (
    <>
        <PageTitle title="Security" />
        <div className="max-w-3xl">
            <ZkProofVerifier />
            {/* Other security components can be added here */}
        </div>
    </>
);

export default SecurityPage;
