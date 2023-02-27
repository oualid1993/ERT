import React from "react";
import { useState, useEffect } from "react";
import "./hero.css";
import "../../index.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { GetMessage } from "../../redux/apiCalls/MessageApiCall";

export default function Contact() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    tel: "",
    name: "",
    textMessage: "",
  });

  const { email, tel, name, textMessage } = formData;
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

    if (
      formData.name === "" ||
      formData.tel === "" ||
      formData.email === "" ||
      formData.textMessage === ""
    ) {
      toast.error("s'il vous plait replire tout les champs");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/message/addMessage",
          formData
        );
        toast.success(" message envoyé  ");
        setFormData({
          email: "",
          tel: "",
          name: "",
          textMessage: "",
        });
        dispatch(GetMessage());
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <section className="Contact" id="contact">
      <div className="title-section white-color-text"> Nous Contacter</div>
      <div className="container ">
        <div className="contact-content">
          <div className="logo-contact">
            <img src={"/static/images/contact-logo.png"} width="100%" alt="" />
          </div>
          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div className="contact-card">
                <div className="card-title">Contacter Nous</div>
                <div className="form-groupe">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Nom"
                      value={name}
                      name="name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="input-form">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="input-form">
                    <input
                      type="number"
                      name="tel"
                      placeholder="Nr Tel"
                      onChange={onChange}
                      value={tel}
                    />
                  </div>
                  <div className="input-form">
                    <textarea
                      type="number"
                      placeholder="Ecrire votre Message"
                      onChange={onChange}
                      name="textMessage"
                      cols="30"
                      rows="10"
                    >
                      {textMessage}
                    </textarea>
                  </div>

                  <button className="btn-submit">envoyer </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
