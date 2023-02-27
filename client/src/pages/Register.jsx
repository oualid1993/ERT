import React from "react";
import "../styles/register.css";
import { useState, useEffect } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  //get data from the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //submit form to backend
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-page">
      <form onSubmit={onSubmit}>
        <div className="login-card">
          <div className="card-title">Register</div>
          <div className="form-groupe">
            <div className="input-form">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={onChange}
              />
            </div>
            <div className="input-form">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="input-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="input-form">
              <input
                type="password"
                name="password2"
                placeholder="Confirme Password"
                value={password2}
                onChange={onChange}
              />
            </div>
            <button className="btn-submit">sign in </button>
          </div>
        </div>
      </form>
    </div>
  );
}
