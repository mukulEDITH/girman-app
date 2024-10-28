// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS for navbar-specific styles

const Navbar = () => (
    <header className="navbar">
        <nav className="navbar-links">
           <div  className="navbar-logo-main">
           <img src="./Logo.png" alt="Girman Logo"  /> 
           </div>
             
        
            <a href="#search">SEARCH</a>
            <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer">WEBSITE</a>
            <a href="https://linkedin.com/company/girmantech" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="mailto:contact@girmantech.com">CONTACT</a>
        </nav>
        
    </header>
);

export default Navbar;
