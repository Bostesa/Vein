import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';
import { Modal } from '../ui/Modal';
import { IconUpload } from '../../lib/icons';

const InvoiceUploadModal = ({ isOpen, onClose, onUpload }) => {
    // useCallback ensures this function isn't recreated on every render
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            // Pass the uploaded file to the parent component's handler
            onUpload(file);
            onClose(); // Close the modal after successful drop
        }
    }, [onClose, onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'] // Only accept PDF files
        },
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
                        <p>
                            {isDragActive ? "Drop the file here..." : "Drag 'n' drop or click to upload"}
                        </p>
                        <p className="text-xs">PDF only, 10MB max</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export { InvoiceUploadModal };
