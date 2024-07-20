import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
                        <button className="btn">Create Employee</button>
                    </Link>
                ) 
                : 
                (
                    <Link to="/list">
                        <button className="btn">List of Employees</button>
                    </Link>
                )
            }
            
        </header>
    );
}

export default Header;