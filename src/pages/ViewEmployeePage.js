import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

function ViewEmployeePage() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    return (
        <div>
            <h2>View Employees</h2>
            <Table data={employees} />
        </div>
    );
}

export default ViewEmployeePage;
