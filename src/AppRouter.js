import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Error404Page from './pages/Error404Page';
import CreateEmployeePage from "./pages/CreateEmployeePage";
import ViewEmployeePage from "./pages/ViewEmployeePage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/new"/>}/>
            <Route path="/new" element={<CreateEmployeePage/>}/>
            <Route path="/list" element={<ViewEmployeePage/>}/>
            <Route path="*" element={<Error404Page/>}/>
        </Routes>
    );
}

export default AppRouter;