import React from "react";
// import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
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
