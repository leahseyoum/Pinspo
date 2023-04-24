import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { NavLink } from 'react-router-dom';
import './SignupForm.css';
import pinterestLogo from '../../assets/pinterestLogo.png'

function SignupFormPage({ onClose }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-modal-content">
      
      <div className="logo">
        <img className='pinterest-logo-modal' src={pinterestLogo} />
        <h1 className="welcome-message">Welcome to Pinspo</h1>
      </div>
      <button class="close" onClick={onClose}>&times;</button>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3 className="login-header">Sign Up</h3>
        <ul className="signup-errors">
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        <label className="signup-email" hmtlFor="email">
          Email
        </label>
          <input
            className="signup-input"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label className="signup-username" htmlFor="username">
          Username
        </label>
          <input
            className="signup-input"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        <label className="signup-password" htmlFor="password">
          Password
        </label>
          <input
            className="signup-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <label className="signup-confirm-password" hmtlFor="confirm-password">
          Confirm Password
        </label>
          <input
            className="signup-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormPage;