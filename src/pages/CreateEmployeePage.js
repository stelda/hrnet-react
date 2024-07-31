import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import Form from '../components/Form';
import Modal from '../components/Modal';
import '../css/main.css';

function CreateEmployeePage() {
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const saveEmployee = (employee) => {
        dispatch(addEmployee(employee));
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
