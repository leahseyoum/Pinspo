import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch} from "react-redux";
import { NavLink } from 'react-router-dom';
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
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
  };

  return (
    <>
      <h1 className="login-header">Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul className="login-errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="login-credentiallabel" htmlfor="credential">
          Username or Email
        </label>
          <input className="login-credential"
            type="text"
            id="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        <label className="login-passwordlabel" htmlFor="password">
          Password
        </label>
          <input
            className="login-password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <div className="login-buttons"> 
          <button className="login-button" type="submit">Log In</button>
            <h3 id="modal-or">OR</h3>
            <button className="modal-demo-button" onClick={()=>{setCredential("Demouser");setPassword("demopassword")}}>Continue as Demo User</button>

        </div>
      </form>

      {/* <NavLink to="/signup">Sign Up</NavLink> */}
    </>
  );
}

export default LoginForm;