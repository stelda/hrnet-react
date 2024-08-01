import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from "./Button";
import '../css/header.css';

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <Link to="/">
                <img src="/logo.png" alt="Logo Wealth Health"/>
            </Link>

            <Link to="/" className="home-link">
                <h1>HRnet</h1>
            </Link>

            {location.pathname === '/list' ? 
                (
                    <Link to="/new">
                        <Button className="submit-btn" type="submit" text="Create Employee" />
                    </Link>
                ) 
                : 
                (
                    <Link to="/list">
                        <Button className="list-btn" text="List of Employees" />
                    </Link>
                )
            }
            
        </header>
    );
}

export default Header;