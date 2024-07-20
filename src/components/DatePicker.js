import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/custom-datepicker.css'


// todo 1: faire en sorte que l'on puisse entrer une date directement dans le champ de saisie
// todo 2: ajuster le css du header du bithDatePicker
export function BirthDatePicker({ selected, onChange }) {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            dateFormat="MM/dd/yyyy"
            showYearDropdown
            yearDropdownItemNumber={124}
            scrollableYearDropdown
            minDate={new Date(1900, 0, 1)}
            maxDate={new Date(2024, 11, 31)}
        />
    );
}

export function StartDatePicker({ selected, onChange }) {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            dateFormat="MM/dd/yyyy"
        />
    );
}
