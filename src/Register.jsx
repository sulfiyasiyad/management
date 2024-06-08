import React, { useState } from 'react';
import axios from 'axios';
// import {  useNavigate } from 'react-router-dom'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './Register.css'; 













// const Register = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         pancard: '',
        
//     });
    
//     const [errors, setErrors] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');
//     const navigate = useNavigate(); 

//     const handleChange = e => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         validateField(e.target.name, e.target.value);
//     };

//     const validateField = (fieldName, value) => {
//         let fieldErrors = { ...errors };

//         switch (fieldName) {
//             case 'username':
//                 fieldErrors.username = value ? '' : 'Username is required';
//                 break;
//             case 'email':
//                 fieldErrors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
//                     ? ''
//                     : 'Email is invalid';
//                 break;
           
//             default:
//                 break;
//         }
//         setErrors(fieldErrors);
//     };
//     console.log(formData);
//     const handleSubmit = async e => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/api/users/', formData);
//             console.log(response.data);
//             setSuccessMessage('Registration successful');
//             console.log('Success');
         
//             setFormData({
//                 username: '',
//                 email: '',
               
//             });
//             setErrors({});
//             navigate('/');
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setErrors({ ...errors, ...error.response.data });
//                 console.log('fail');
//             } else {
//                 setErrors({ ...errors, general: 'Registration failed' });
//             }
//         }
//     };

//     return (
//         <div className="register-page">
            
            
//             <div className="register-box">
//                 <form onSubmit={handleSubmit} className="register-form">
//                     <h2 className='reg'>Register Here</h2>
//                     <div>
//                         <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             placeholder="Username"
//                             required
//                         />
//                         {errors.username && <p className="error">{errors.username}</p>}
//                     </div>
//                     <div>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Email"
//                             required
//                         />
//                         {errors.email && <p className="error">{errors.email}</p>}
//                     </div>
//                     <div>
//                         <input type='hidden' name='user_type' value={2} />
//                     </div>
                   

//                     {errors.general && <p className="error">{errors.general}</p>}
//                     {successMessage && <p className="success">{successMessage}</p>}
//                     <button type="submit">Register</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        // password: '',
        // department:'',
        // profile:'',
        // certificate:''
    });
    
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); 

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validateField(e.target.name, e.target.value);
    };

    const validateField = (fieldName, value) => {
        let fieldErrors = { ...errors };

        switch (fieldName) {
            case 'username':
                fieldErrors.username = value ? '' : 'Username is required';
                break;
            case 'email':
                fieldErrors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? ''
                    : 'Email is invalid';
                break;
            // case 'password':
            //     fieldErrors.password = value.length >= 8 &&
            //                           /[A-Z]/.test(value) &&
            //                           /[a-z]/.test(value) &&
            //                           /[0-9]/.test(value) &&
            //                           /[^A-Za-z0-9]/.test(value)
            //         ? ''
            //         : 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
            //     break;
            default:
                break;
        }
        setErrors(fieldErrors);
    };
    console.log(formData);
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/', formData);
            console.log(response.data);
            setSuccessMessage('Registration successful! A confirmation email has been sent.');
            console.log('Success');
            // Clear form
            setFormData({
                username: '',
                email: '',
                // password: '',
                // department:'',
                // profile:'',
                // certificate:''
            });
            setErrors({});
            navigate('/');
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors({ ...errors, ...error.response.data });
                console.log('fail');
            } else {
                setErrors({ ...errors, general: 'Registration failed' });
            }
        }
    };

    return (
        <div className="register-page">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="register"> Register</Link>
                    </li>
                    
                  
                </ul>
            </nav>
            
            <div className="register-box">
                <form onSubmit={handleSubmit} className="register-form">
                    <h2 className='reg'>Register Here....</h2>
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
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    {/* <div>
                        <input type='text' name='department' value={formData.department}
                            onChange={handleChange}
                            placeholder="Department"
                            required/>
                            {errors.department && <p className="error">{errors.department}</p>}
                    </div>
                    <div>
                        <label className='reg'>Profile Image</label>
                        <input type='file' name='profile' value={formData.profile}
                            onChange={handleChange}
                            placeholder="Profile Image"
                            required />
                            {errors.profile && <p className="error">{errors.profile}</p>}
                    </div>
                    <div>
                        <label className='reg'>Degree Certificate</label>
                        <input type='file' name='certificate' placeholder='Degree Certificate' onChange={handleChange} required value={formData.certificate} />
                        {errors.certificate && <p className="error">{errors.certificate}</p>}
                    </div>
                    <div>
                        <input type='hidden' name='type' value={3} />
                    </div> */}
                     {/* <div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div> */}
                    {errors.general && <p className="error">{errors.general}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;


