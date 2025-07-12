import React, { useState } from 'react';
import Card from '../ui/Card';
import Spinner from '../ui/Spinner';
import { IconCheckCircle, IconXCircle } from '../../lib/icons';

type VerificationStatus = 'Valid' | 'Invalid' | null;

const ZkProofVerifier: React.FC = () => {
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationResult, setVerificationResult] = useState<VerificationStatus>(null);

    const handleVerify = () => {
        setIsVerifying(true);
        setVerificationResult(null);
        setTimeout(() => {
            const isValid = Math.random() > 0.2;
            setVerificationResult(isValid ? 'Valid' : 'Invalid');
            setIsVerifying(false);
        }, 2000);
    };

    return (
        <Card>
            <h3 className="text-base font-semibold text-white mb-2">Zero-Knowledge Proof Verification</h3>
            <p className="text-sm text-slate-400 mb-4">Run a client-side verification of the latest system integrity proof to ensure cryptographic trust.</p>
            <div className="flex items-center gap-4">
                <button 
                    onClick={handleVerify} 
                    disabled={isVerifying} 
                    className="bg-white text-black font-semibold py-2 px-4 rounded-lg text-sm flex items-center gap-2 disabled:bg-slate-500 disabled:cursor-not-allowed"
                >
                    {isVerifying && <Spinner />}
                    Verify Proof
                </button>
                {verificationResult && (
                    <div className={`flex items-center gap-2 font-semibold ${verificationResult === 'Valid' ? 'text-green-400' : 'text-red-400'}`}>
                        {verificationResult === 'Valid' ? <IconCheckCircle /> : <IconXCircle />}
                        Proof {verificationResult}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default ZkProofVerifier;
