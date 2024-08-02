import React, { useState } from 'react';
import { BirthDatePicker, StartDatePicker } from './DatePicker';
import { StateSelect, DepartmentSelect } from './Select';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/custom-datepicker.css';
import '../css/form.css';
import Button from "./Button";
import { validate } from "../utils/validation";
import { capitalizeFirstLetter } from "../utils/textFormat";

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

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleDateChange = (name, date) => {
        setEmployee({ ...employee, [name]: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(employee);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const employeeToSend = {
            ...employee,
            firstName: capitalizeFirstLetter(employee.firstName),
            lastName: capitalizeFirstLetter(employee.lastName),
            street: capitalizeFirstLetter(employee.street),
            city: capitalizeFirstLetter(employee.city),
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

        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="personal-details">
                <legend>Personal Details</legend>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={employee.firstName} onChange={handleChange}/>
                {errors.firstName && <p className="error">{errors.firstName}</p>}

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={employee.lastName} onChange={handleChange}/>
                {errors.lastName && <p className="error">{errors.lastName}</p>}

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
                {errors.street && <p className="error">{errors.street}</p>}

                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={employee.city} onChange={handleChange} />
                {errors.city && <p className="error">{errors.city}</p>}

                <StateSelect value={employee.state} onChange={handleChange} />

                <label htmlFor="zip-code">Zip Code</label>
                <input type="text" id="zip-code" name="zipCode" value={employee.zipCode} onChange={handleChange} />
                {errors.zipCode && <p className="error">{errors.zipCode}</p>}
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

            <Button className="submit-btn" type="submit" text="Save" />
        </form>
    );
}

export default Form;
