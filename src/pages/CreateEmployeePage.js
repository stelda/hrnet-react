import React, { useState } from 'react';
import Form from '../components/Form';
import Modal from '../components/Modal';
import '../css/main.css';

function CreateEmployeePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const saveEmployee = (employee) => {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        setModalIsOpen(true);
    };

    return (
        <div>
            <div className="container">
                <h2>Create Employee</h2>
                <Form onSave={saveEmployee}/>
                <Modal 
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    message="Employee created !"
                >
                </Modal>
            </div>
        </div>
    );
}

export default CreateEmployeePage;
