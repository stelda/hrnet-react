import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/custom-datepicker.css'

export function BirthDatePicker({ selected, onChange }) {
    const [selectedDate, setSelectedDate] = useState(selected);

    return (
        <DatePicker
            selected={selectedDate}
            onChange={date => {
                setSelectedDate(date);
                onChange(date);
            }}
            dateFormat="MM/dd/yyyy"
            renderCustomHeader={
                ({
                    date,
                    changeYear,
                    changeMonth,
                }) => (
                    <div className="birthdatepicker-header">
                        <select
                            value={date.getFullYear()}
                            onChange={({ target: { value } }) => changeYear(value)}
                        >
                            {Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        <select
                            value={date.getMonth()}
                            onChange={({ target: { value } }) => changeMonth(value)}
                        >
                            {[
                                "January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ].map((month, index) => (
                                <option key={month} value={index}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>
                )
        }
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
