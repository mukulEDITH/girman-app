import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../pages/SearchResultsPage.css'; 
import usersData from '../data/users.json';
import Card from '../components/Card';
import Navbar from '../components/Navbar'; // Import Navbar component

const SearchResultsPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuery = queryParams.get('query') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [filteredUsers, setFilteredUsers] = useState(usersData);

    useEffect(() => {
        const results = usersData.filter(user =>
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredUsers(results);
    }, [searchQuery]);

    return (
        <div className="search-results-container">
            {/* Include Navbar at the top */}
            <Navbar />

            <header className="search-results-header">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </header>

            <div className="user-cards-grid">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <Card key={user.id} user={user} />
                    ))
                ) : (
                    <div>
                        
                        <img src='./error.png' alt="No results" class="error-image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
