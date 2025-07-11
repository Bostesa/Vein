import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        // The overlay
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" 
            onClick={onClose}
        >
            {/* The modal content */}
            <div 
                className="bg-[#0A0A0A] border border-slate-800 rounded-xl shadow-2xl w-full max-w-md" 
                onClick={e => e.stopPropagation()} // Prevents closing when clicking inside the modal
            >
                {children}
            </div>
        </div>
    );
};

export { Modal };
