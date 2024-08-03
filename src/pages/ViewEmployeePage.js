import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmployees } from '../redux/employeeSlice';
import Table from '../components/Table';

function ViewEmployeePage() {
    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        if (storedEmployees.length > 0) {
            dispatch(setEmployees(storedEmployees));
        }
    }, [dispatch]);

    return (
        <div>
            <div className="container">
                <h2>View Employees</h2>
                <Table data={employees} />
            </div>
        </div>
    );
}

export default ViewEmployeePage;
