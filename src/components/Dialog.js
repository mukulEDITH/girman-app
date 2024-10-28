// src/components/Dialog.js
import React from 'react';

const Dialog = ({ user, onClose }) => (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid #ccc', padding: '20px', backgroundColor: 'white' }}>
        <h2>{user.firstName} {user.lastName}</h2>
        <p>{user.details}</p>
        <button onClick={onClose}>Close</button>
    </div>
);

export default Dialog;
