import React from "react";
import { Link } from 'react-router-dom'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
      <Link to="/"> Home </Link>
        <Link to="/trails">Hykes</Link>
        <Link to="/trails/new">Add Hyke</Link>
        <Link to="/about">About</Link>


        <a
          className="footer-link"
          href="https://www.linkedin.com/in/nyheimhunter/"
          target="blank"
        >
          {" "}
          Nyheim Hunter
          <i id="icon" className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
