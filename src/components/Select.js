import React from 'react';
import states from '../data/states';

export function StateSelect({ value, onChange }) {
    return (
        <div>
            <label htmlFor="state">State</label>
            <select name="state" id="state" value={value} onChange={onChange}>
                {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>
        </div>
    )
};

export function DepartmentSelect({ value, onChange }) {
    return (
        <div>
            <label htmlFor="department">Department</label>
            <select name="department" id="department" value={value} onChange={onChange}>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
        </div>
    );
}