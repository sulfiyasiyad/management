import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>PAN Card</label>
            <input type="text" placeholder="Enter your PAN card number" required />
          </div>
          <button type="submit" className="btn-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
