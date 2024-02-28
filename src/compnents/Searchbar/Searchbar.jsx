import React from 'react'
import "./stylesearchbar.scss"

import { useState } from 'react';

function Searchbar() {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search logic here
        console.log('Search query:', searchQuery);
        // You can implement further actions like fetching search results
    };

    return (
        <>
            <div className="outsidebox">
                <div className={`search-bar${isSearchOpen ? ' active' : ''}`}>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleInputChange}
                                placeholder="Search..."
                            />
                            <i className="fas fa-search search-icon"></i>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Searchbar
