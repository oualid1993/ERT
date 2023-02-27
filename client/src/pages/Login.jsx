import React from "react";
import "../styles/register.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/apiCalls/authApiCall";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //  use dispatch to send data to redux
  const dispatch = useDispatch();

  const { email, password } = formData;

  //get data from the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //submit form to backend
  const onSubmit = async (e) => {
    e.preventDefault();

    // validate inputs
    if (email.trim() === "" || password.trim() === "")
      toast.error("email ou mot de passe et vide ");
    // dipatch the data to redux authApiCall to sent it to server
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-center" />
      <form onSubmit={onSubmit}>
        <div className="login-card">
          <div className="card-title">Login</div>
          <div className="form-groupe">
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
            <button className="btn-submit">sign in </button>
          </div>
        </div>
      </form>
    </div>
  );
}
