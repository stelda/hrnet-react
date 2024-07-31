import { createSlice } from '@reduxjs/toolkit';
import mockemployees from "../data/employees";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: [mockemployees],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
