import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import Form from '../components/Form';
import Modal from 'react-modal-stelda';
import '../css/main.css';

function CreateEmployeePage() {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveEmployee = (employee) => {

        if (Object.keys(employee).length === 0) {
            alert('Invalid employee data');
            return;
        }

        employee.dateOfBirth = new Date(employee.dateOfBirth).toISOString();
        employee.startDate = new Date(employee.startDate).toISOString();

        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        storedEmployees.push(employee);
        localStorage.setItem('employees', JSON.stringify(storedEmployees));
        dispatch(addEmployee(employee));
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false)

    return (
        <div>
            <div className="container">
                <h2>Create Employee</h2>
                <Form onSave={saveEmployee}/>
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    message="Employee Created."
                    overlayClassName="custom-overlay"
                    contentClassName="custom-content"
                    closeButtonClassName="custom-close-button"
                >
                </Modal>
            </div>
        </div>
    );
}

export default CreateEmployeePage;
