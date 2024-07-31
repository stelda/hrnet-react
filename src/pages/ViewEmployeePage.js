import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import Table from '../components/Table';

function ViewEmployeePage() {
    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        dispatch(addEmployee(storedEmployees));
    }, [dispatch]);

    return (
        <div>
            <h2>View Employees</h2>
            <Table data={employees} />
        </div>
    );
}

export default ViewEmployeePage;
