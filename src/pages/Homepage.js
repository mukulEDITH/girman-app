// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Homepage.css';
import Navbar from '../components/Navbar';

const HomePage = () => { 
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <div className="homepage-container">
             <Navbar/>

            {/* Logo and Branding */}
            <div className="logo-container">
      <a  href="https://girmantech.com/" target='_blank'>
                <img src= "./Group 1.png" alt="Girman Logo" />
                </a>
                <h1 style={{ fontSize: '5em', margin: '20px' }}>Girman</h1>
            </div>

            <div className="search-box">
    <form onSubmit={handleSearch}>
        <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
    </form>
</div>


        </div>
    );
};

export default HomePage;
