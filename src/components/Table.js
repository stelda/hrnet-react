import React, {useState} from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

function Table({data}) {
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const HEADER_LABELS = {
        firstName: 'First Name',
        lastName: 'Last Name',
        dateOfBirth: 'Date of Birth',
        startDate: 'Start Date',
        department: 'Department',
        street: 'Street',
        city: 'City',
        state: 'State',
        zipCode: 'Zip Code'
    };

    const handleSearch = (data) => {
        return data.filter(row =>
            Object.values(row).some(
                value => value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    };

    const sortedData = (data) => {
        if (sortConfig.key) {
            return [...data].sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    };

    const filteredData = handleSearch(data);
    const sortedFilteredData = sortedData(filteredData);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedData = sortedFilteredData.slice(startIndex, startIndex + rowsPerPage);

    const requestSort = (key) => {  // Gère la demande de tri
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    const headers = Object.keys(data[0]);

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <table className="table-elements">
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} onClick={() => requestSort(header)}>
                            {HEADER_LABELS[header] || header}
                            <span className="arrow">
                                {sortConfig.key === header ? (
                                    sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'
                                ) : null}
                            </span>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {sortedFilteredData.length === 0 ? (
                        <tr><td colSpan={headers.length}>No results found.</td></tr>
                    ) : (
                        selectedData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex}>
                                        {row[header] instanceof Date ? row[header].toLocaleDateString('en-US',{
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        }) : row[header]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <Pagination
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={filteredData.length}
            />
</div>
    );
}

export default Table;
