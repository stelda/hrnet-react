import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';

import mockemployees from "../data/employees";


const store = configureStore({
    reducer: {
        employees: employeeReducer
    },
    preloadedState: {
        employees: mockemployees
    }
});

export default store;
