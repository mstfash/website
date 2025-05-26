import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] ">
      {/* Modal Header - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-[9999]">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-medium ">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
      </div>
      
      {/* Scrollable Content Container */}
      <div className="absolute inset-0 overflow-y-auto pt-[64px] pb-8">
        {children}
      </div>
    </div>
  );
};