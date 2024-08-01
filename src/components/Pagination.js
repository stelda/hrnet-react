import React from 'react';
import '../css/table.css';

function Pagination({ rowsPerPage, setRowsPerPage, currentPage, setCurrentPage, totalItems }) {
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalItems / rowsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='pagination'>
            <div className='results'>
                <label htmlFor="rowsPerPage">Show </label>
                <select id="rowsPerPage" value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <span> results</span>
            </div>

            <div className='pages'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> Page {currentPage} of {Math.ceil(totalItems / rowsPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(totalItems / rowsPerPage)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;