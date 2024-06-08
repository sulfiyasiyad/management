

import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'; 

// function Signin() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate()


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/api/login/', {
//                 username: username,
//                 password: password,
//             });
//             console.log(response.data);
//             // Store the tokens (this is a simple example, for production use secure storage)
//             localStorage.setItem('access_token', response.data.access);
//             localStorage.setItem('refresh_token', response.data.refresh);
//             // Redirect to admin page
//             navigate('/admin');
//         } catch (error) {
//             console.error('Login failed', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default Signin;
// components/Login.js


// components/Login.js

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { username, password } = formData;
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Username is required';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/login/', formData);
            // Assuming the response contains a success message or token
            console.log(response.data);
            // Navigate to the home page or dashboard
            navigate('/admin');
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'Login failed');
            } else {
                setErrorMessage('Login failed');
            }
        }
    };

    return (
        <div className="login-page">
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

            <div className="login-box">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Login</h2>
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
