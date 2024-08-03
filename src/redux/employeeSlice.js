import { createSlice } from '@reduxjs/toolkit';
import mockemployees from "../data/employees";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: [mockemployees],
    reducers: {
        addEmployee: (state, action) => {
            if (Object.keys(action.payload).length !== 0) {
                state.push(action.payload);
                localStorage.setItem('employees', JSON.stringify(state));
            }
        },
        setEmployees: (state, action) => {
            return action.payload;
        }
    }
});

export const { addEmployee, setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
