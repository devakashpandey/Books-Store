import React from 'react';
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const Footer = () => {
  return (
     <>

    <footer>
        <div class="footer-content">
            <h3>Books Store</h3>
            <p>Hey! here you get all types of books, web designing, web developer, programming & more.</p>
            <ul class="socials">
                <li><a href="https://www.facebook.com/akkytricks/" target="_blank"><BsFacebook/></a></li>
                <li><a href="https://www.instagram.com/codingwithakash/" target="_blank"><BsInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/devakashpandey/" target="_blank"><BsLinkedin /></a></li>
                <li><a href="https://github.com/devakashpandey" target="_blank"><BsGithub /></a></li>
            </ul>
        </div>

        <div class="footer-bottom">
            <p>Copyright © 2023 - All Rights Reserved.  Designed by <span>Akash Pandey</span></p>
        </div>
    </footer>

     </>
  )
}

export default Footer;
