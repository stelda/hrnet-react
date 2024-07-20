import React, { useEffect, useState } from 'react';

function ViewEmployeePage() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    return (
        <div>
            <h2>View Employees</h2>
            <ul>
                {employees.length === 0 ? (
                    <li>No employees found.</li>
                ) : (
                    employees.map((employee, index) => (
                        <li key={index}>
                            {employee.firstName} {employee.lastName} - {employee.department}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ViewEmployeePage;
