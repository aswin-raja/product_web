import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { message , Spin} from 'antd';
import { Icon } from '@iconify/react';


const initialState = {
  name: "",
  email: "",
  form_message: "",
};


export const Contact = (props) => {
  const [{ name, email, form_message }, setState] = useState(initialState);
  const [loader, setLoader] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, form_message);
    setLoader(true)
    // {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
       
      .sendForm("service_mxvcgiz", "template_yumt2qt", e.target, "cFiJoSU1MrFomSFFl")
      .then(
        (result) => {
          console.log(result.text);
          setLoader(false)
          message.success('Message Sent Successfully');
          clearState();
        },
        (error) => {
          console.log(error.text);
          setLoader(false)
          message.error('Failed to Sent Message');
        }
      );
  };
  return (
    <div>
      
      <div id="contact" >
      
      <div className="container" >
    
          <div className="col-md-8" style={{ position: "relative" }}>
          {loader && (<div className="spin-div"><Spin size="large" className="spin"/></div>) }
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="form_message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="blank">
                    <Icon icon="skill-icons:instagram" className="icon" />

                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                    <Icon icon="gg:facebook" className="icon"/>

                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                    <Icon icon="iconoir:facebook" className="icon"/>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Stack & Queue. Designed & Developed  by{" "}
            <a href="https://aswinraja.netlify.app" rel="nofollow" target="blank">
              ASWIN RAJA 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
