import React from 'react';
import Button from './Button';
import '../css/modal.css';

function Modal({ isOpen, onClose, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <Button className="modal-close" onClick={onClose} text="&times;" />
                <div className="modal-message">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Modal;

