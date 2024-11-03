import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 My Website</p>
            <nav>
                <ul style={navStyle}>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </nav>
        </footer>
    );
};

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 20px',
    position: 'relative',
    bottom: 0,
    width: '100%',
};

const navStyle = {
    listStyle: 'none',
    padding: 0,
};

export default Footer;
