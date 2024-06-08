import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register.jsx';

import Home from './Home.jsx';


import Signin from './Signin.jsx';
import Admin from './Admin.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/admin" element={<Admin />} />

            </Routes>
        </Router>
    );
};

export default App;
