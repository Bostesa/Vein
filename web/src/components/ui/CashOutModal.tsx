import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from './Modal';
import Spinner from './Spinner';
import { IconMic } from '../../lib/icons';

interface CashOutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CashOutModal: React.FC<CashOutModalProps> = ({ isOpen, onClose }) => {
    const [amount, setAmount] = useState('300');
    const [isProcessing, setIsProcessing] = useState(false);
    
    const handleCashOut = () => {
        if (isProcessing) return;
        
        setIsProcessing(true);
        if (parseFloat(amount) > 500) {
            toast('Biometric authentication required for amounts over $500.');
        }

        setTimeout(() => {
            toast.success(`$${amount} is on the way.`);
            setIsProcessing(false);
            onClose();
        }, 1500);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-slate-400">
                    <IconMic />
                </div>
                <h3 className="text-lg font-semibold text-white">Voice Cash Out</h3>
                <p className="text-sm text-slate-400 mt-1">Say "cashout" followed by an amount, or enter it manually.</p>
                <div className="my-6">
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg text-center text-white text-3xl font-bold p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                        placeholder="0"
                    />
                </div>
                <button 
                    onClick={handleCashOut} 
                    disabled={isProcessing || !amount || parseFloat(amount) <= 0} 
                    className="w-full bg-white text-black font-semibold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 disabled:bg-slate-500 disabled:cursor-not-allowed"
                >
                    {isProcessing && <Spinner />}
                    Confirm Cash Out
                </button>
            </div>
        </Modal>
    );
};

export default CashOutModal;