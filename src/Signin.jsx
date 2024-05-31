import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn-submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;

