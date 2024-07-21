import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <label htmlFor="search">Search: </label>
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

