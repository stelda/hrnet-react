import React from 'react';
import '../css/table.css';

// todo 3: ajouter css pour le tableau
// todo 4: changer le format des dates
function Table({ data }) {
    if (data.length === 0) {
        return <p>No data available.</p>;
    }

    // Assuming all objects have the same keys, we use the keys from the first object as headers
    const headers = Object.keys(data[0]);

    return (
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {headers.map((header, colIndex) => (
                        <td key={colIndex}>{row[header]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
