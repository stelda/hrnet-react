import React from 'react';
import '../css/modal.css';

function Modal({ isOpen, onClose, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-message">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Modal;

