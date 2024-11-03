import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>My Website</h1>
            <nav>
                <ul style={navStyle}>
                    <li><a href="/">AboutMe</a></li>
                    <li><a href="/Portfolio">Portfolio</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Project">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
};

const navStyle = {
    listStyle: 'none',
    padding: 0,
};

export default Header;
