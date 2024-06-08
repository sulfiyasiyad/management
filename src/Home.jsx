// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
    return (
        <div className="home-page">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>

            <div className="home-content">
                <h1>Welcome to Our Website!</h1>
                <p>This is the home page. You can navigate to different sections using the links above.</p>
            </div>
        </div>
    );
};

export default Home;
