import React from 'react';
import '../css/table.css';

function SearchBar({ searchQuery, setSearchQuery }) {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='searchbar'>
            <label htmlFor="search">
                <i className='fas fa-search'></i>
            </label>
            <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchBar;

