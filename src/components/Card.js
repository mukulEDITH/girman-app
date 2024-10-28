import React, { useState } from 'react';
import '../pages/SearchResultsPage.css';  // Import the CSS here if not done already

const Card = ({ user }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="user-card">
            <img src={user.profileImage || "./Ellipse 2.png"} alt="User" className="user-image" />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.address}</p>
            <p>📞 {user.phoneNumber}</p>
            <button className="fetch-details-button" onClick={() => setOpen(true)}>Fetch Details</button>
            
            {open && (
                <div className={`dialog-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
                    <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Fetch Details</h2>
                        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Location:</strong> {user.address}</p>
                        <p><strong>Contact Number:</strong> {user.phoneNumber}</p>
                        <img src={user.profileImage || "https://via.placeholder.com/150"} alt="Profile" />
                        <button className="close-button" onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
