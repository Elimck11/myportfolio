import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to="/">Aboutme</Link></li>
                <li style={liStyle}><Link to="/about">Portfolio</Link></li>
                <li style={liStyle}><Link to="/contact">Contact</Link></li>
                <li style={liStyle}><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
};

const navStyle = {
    background: '#333',
    padding: '10px 20px',
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
};

const liStyle = {
    color: '#fff',
};

export default Navigation;
