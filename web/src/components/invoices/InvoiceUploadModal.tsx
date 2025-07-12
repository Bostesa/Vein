import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Modal from '../ui/Modal';
import { IconUpload } from '../../lib/icons';

interface InvoiceUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

const InvoiceUploadModal: React.FC<InvoiceUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            onUpload(file);
            onClose();
        }
    }, [onClose, onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        maxFiles: 1
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white">Upload Invoice</h3>
                <p className="text-sm text-slate-400 mt-1">Drag and drop a PDF file or click to select.</p>
                <div 
                    {...getRootProps()} 
                    className={`mt-4 p-10 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                        isDragActive 
                        ? 'border-white bg-slate-800' 
                        : 'border-slate-700 hover:border-slate-500'
                    }`}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                        <div className="w-12 h-12 flex items-center justify-center bg-slate-800/50 rounded-full mb-2">
                           <IconUpload />
                        </div>
                        <p>{isDragActive ? "Drop the file here..." : "Drag 'n' drop or click to upload"}</p>
                        <p className="text-xs">PDF only, 10MB max</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default InvoiceUploadModal;
