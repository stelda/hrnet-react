import React from 'react';
import '../css/table.css';
import Button from "./Button";

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
                <p htmlFor="rowsPerPage">Show </p>
                <select id="rowsPerPage" value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <p> results</p>
            </div>

            <div className='pages'>
                <Button
                    className="prev-btn"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    text="Previous"
                />
                <p> Page {currentPage} of {Math.ceil(totalItems / rowsPerPage)}</p>
                <Button
                    className="next-btn"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(totalItems / rowsPerPage)}
                    text="Next"
                />
            </div>
        </div>
    );
}

export default Pagination;