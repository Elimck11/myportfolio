// src/App.js
import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Project from './Project';

const App = () => {
    return (
        <div>
            <div>
                <Resume />
            <Header />
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<h2>Welcome to my website!</h2>} />
                    <Route path="/about" element={<h2>About Us</h2>} />
                    <Route path="/contact" element={<h2>Contact Us</h2>} />
                </Routes>
            </main>
            <Footer />
            </div>
        </div>
    );
};

export default App;

