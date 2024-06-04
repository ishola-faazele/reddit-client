// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-red-500">Leave Site?</h2>
        <div className="mb-4 text-black">
            <p>This functionality is out of the scope of this project.</p>
            <p>Do you want to continue to the actual Reddit site?</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-gray-800 text-white rounded">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
