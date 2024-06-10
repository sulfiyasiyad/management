// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    pancard: '',
    user_type:2
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/', formData);
      console.log(response.data);
      console.log('sucess')
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="first_name"  onChange={handleChange} />
        {errors.fname && <p>{errors.fname}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="last_name"  onChange={handleChange} />
        {errors.lname && <p>{errors.lname}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username"  onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email"  onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>PAN Card:</label>
        <input type="text" name="pancard"  onChange={handleChange} />
        {errors.pancard && <p>{errors.pancard}</p>}
      </div>
      <div>
        <input type='hidden' name="user_type" value={formData.user_type}></input>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
