import React, { useState } from 'react';
import { BirthDatePicker, StartDatePicker } from '../components/DatePicker';
import { StateSelect, DepartmentSelect } from '../components/Select';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/custom-datepicker.css';

function Form({ onSave }) {

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        startDate: new Date(),
        department: 'Sales',
        street: '',
        city: '',
        state: 'AL',
        zipCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleDateChange = (name, date) => {
        setEmployee({ ...employee, [name]: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeToSend = {
            ...employee,
            dateOfBirth: employee.dateOfBirth.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            startDate: employee.startDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
        };

        onSave(employeeToSend);

        // reset form
        setEmployee({
            firstName: '',
            lastName: '',
            dateOfBirth: new Date(),
            startDate: new Date(),
            department: 'Sales',
            street: '',
            city: '',
            state: 'AL',
            zipCode: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="personal-details">
                <legend>Personal Details</legend>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={employee.firstName} onChange={handleChange}/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={employee.lastName} onChange={handleChange}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <BirthDatePicker
                    selected={employee.dateOfBirth}
                    onChange={(date) => handleDateChange('dateOfBirth', date)}
                />


            </fieldset>

            <fieldset className="address-details">
                <legend>Address Details</legend>

                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" value={employee.street} onChange={handleChange} />

                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={employee.city} onChange={handleChange} />
                
                <StateSelect value={employee.state} onChange={handleChange} />

                <label htmlFor="zip-code">Zip Code</label>
                <input type="number" id="zip-code" name="zipCode" value={employee.zipCode} onChange={handleChange} />
            </fieldset>

            <fieldset className="employment-details">
                <legend>Employment Details</legend>
                <DepartmentSelect value={employee.department} onChange={handleChange}/>
                <label htmlFor="start-date">Start Date</label>
                <StartDatePicker
                    selected={employee.startDate}
                    onChange={(date) => handleDateChange('startDate', date)}
                />
            </fieldset>

            <button type="submit">Save</button>
        </form>
    );
}

export default Form;
