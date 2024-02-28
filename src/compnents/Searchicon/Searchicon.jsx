import React, { useState, useEffect, useRef } from 'react';
import './stylesearchicon.scss';
import SearchBar from '../Searchbar/Searchbar';

function SearchIcon() {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const searchIconRef = useRef(null);

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchIconRef.current && !searchIconRef.current.contains(event.target)) {
                setIsSearchBarVisible(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsSearchBarVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        
        <div className="iconclass" ref={searchIconRef}>
            <i className="fas fa-search search-icon3" onClick={toggleSearchBar}></i>
            {isSearchBarVisible && <SearchBar className="active" />} {/* Add className conditionally */}
        </div>
    );
}

export default SearchIcon;