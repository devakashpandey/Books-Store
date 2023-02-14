import React from 'react'
import "./Contact.css"
import { AiFillLinkedin } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"

const Contact = () => {
  return (
     <>
     <div className="container mt-5">
      <div className='inner-div'>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Hey! here you get all types of books, web designing, web developer, programming & more.
            If you have own books you can publish here by the <b>Add Books</b> option & <b>Earn</b> with me.<br/>
            So, fill this form and lets get in touch and make this project big.
          </p>

          <div className="info">
            <div className="information">
              <img src="./assets/location.png" className="icon" alt="" />
              <p>New karman tola, Ara</p>
            </div>
            <div className="information">
              <img src="./assets/email.png" className="icon" alt="" />
              <p>4kkyp4nd3y@gmail.com</p>
            </div>
            <div className="information">
              <img src="./assets/phone.png" className="icon" alt="" />
              <p>+91 8935824070</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="">
                <i> <BsFacebook/></i>
              </a>
              <a href="https://github.com/devakashpandey" >
                <i> < BsGithub/></i>
              </a>
              <a href="https://www.instagram.com/codingwithakash/" target="_blank">
                <i>< BsInstagram /></i>
              </a>
              <a href="https://www.linkedin.com/in/devakashpandey/" target="_blank">
              <i><AiFillLinkedin/></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='Username' />
              
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input"  placeholder='Email'/>
       
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder='Phone' />
 
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message'></textarea>
            </div>
            <input type="submit" value="Send" className="btnn" />
          </form>
        </div>
      </div>
      </div>
    </div>
     </>
  )
}

export default Contact;
