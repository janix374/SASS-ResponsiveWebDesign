import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="container flex-nav">
                <h1 className="logo">Janix</h1>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/features">Features</Link></li>
                        <li> <Link to="/docs">Docs</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;