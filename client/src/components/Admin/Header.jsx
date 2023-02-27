import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { authActions } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { BorderWidth } from "react-bootstrap-icons";

export default function Header() {
  //get user info from redux
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // display and not the dropdawn div

  const [dropDawn, setDropDawn] = useState(false);
  const [dropDawnMenu, setDropDawnMenu] = useState(true);
  return (
    <div className="Navbar">
      <div className="container ">
        <div className="nav-bar-content">
          <div className="logo ">
            <Link to="/">
              <img
                className="logo-image "
                src={"/static/images/logo.png"}
                width="95px"
              />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="centre">
              <div
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("hero");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Home
              </div>
            </li>
            <li className="centre">
              <div
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("who-we-are");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Qui Nous Sommes
              </div>
            </li>
            <li className="centre">
              <div
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("secteur");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Secteur
              </div>
            </li>
            <li className="centre">
              <div
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("travaux");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Nous Travaux
              </div>
            </li>
            <li className="centre">
              <div
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Nous Contacter
              </div>
            </li>
          </ul>

          <div className="login-register">
            <ul className="links">
              {user ? (
                <>
                  <li className="centre">
                    <div
                      className=" username"
                      onClick={() => {
                        setDropDawn((prev) => !prev);
                      }}
                    >
                      {user.username}
                    </div>
                    <div
                      className="dropDawn"
                      style={{ display: dropDawn ? "flex" : "none" }}
                    >
                      <Link
                        className="link dropDown-item"
                        to="/Admin"
                        onClick={() => {
                          setDropDawn((prev) => !prev);
                        }}
                      >
                        Dashboard
                      </Link>

                      <Link
                        onClick={() => {
                          localStorage.removeItem("userInfo");
                          dispatch(authActions.logout());
                          setDropDawn((prev) => !prev);
                          console.log("click");
                        }}
                        className="link dropDown-item"
                        to="/login"
                      >
                        Logout
                      </Link>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="centre">
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="centre">
                    <Link className="link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <BorderWidth
            className="app-logo"
            onClick={() => {
              if (dropDawnMenu)
                document.querySelector(".nav-links").style.display = "flex";
              else document.querySelector(".nav-links").style.display = "none";

              setDropDawnMenu((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
}
