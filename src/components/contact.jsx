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
    
          <div className="col-md-8 col-md-offset-2" style={{ position: "relative" }}>
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
        </div>
      </div>
      <div id="footer">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3">
          
                <h4>Stack & Queue</h4>

              <p>Empowering Your Business with Innovative IT Solutions and Support.</p>
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noopener noreferrer">
                      <Icon icon="skill-icons:instagram" className="icon" />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"} target="_blank" rel="noopener noreferrer">
                      <Icon icon="gg:facebook" className="icon"/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"} target="_blank" rel="noopener noreferrer">
                      <Icon icon="mdi:linkedin" className="icon"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="col-md-3">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#page-top">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div className="col-md-3">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/projects">Projects</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="col-md-3">
              <h4>Get In Touch</h4>
              <div className="footer-contact">
                <p>
                  <i className="fa fa-map-marker"></i>
                  {props.data ? props.data.address : "123 Business Street, City, State 12345"}
                </p>
                <p>
                  <i className="fa fa-phone"></i>
                  {props.data ? props.data.phone : "+1 (555) 123-4567"}
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  {props.data ? props.data.email : "info@stackqueue.com"}
                </p>
                <p>
                  <i className="fa fa-clock-o"></i>
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="footer-copyright">
                &copy; 2025 Stack & Queue. All rights reserved. Designed & Developed by{" "}
                <a href="https://aswinraja.netlify.app" rel="nofollow" target="_blank">
                  ASWIN RAJA 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
