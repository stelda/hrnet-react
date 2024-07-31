import React, {useState} from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

function Table({data}) {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

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

    const filteredData = handleSearch(data);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    const headers = Object.keys(data[0]);

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Pagination
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={filteredData.length}
            />
            <table>
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{HEADER_LABELS[header] || header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {selectedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex}>{row[header] instanceof Date ? row[header].toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }) : row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
</div>
    );
}

export default Table;
