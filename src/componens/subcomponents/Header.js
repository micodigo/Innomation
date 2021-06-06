import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import picon from "../../Images/phone-icon.png";
import classes from "./Header.module.scss";
import { useState } from "react";
import "../../themify-icons.css";

export default function Header() {
  const [navbar, setnavbar] = useState(false);

  const headerHandler = () => {
    if (window.scrollY >= 150) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", headerHandler);
  return (
    <>
      <div className={classes.header_sub}>
        <div className={classes.logo}>
          <img src={logo} alt="" className={classes.logo_img} />
        </div>
        <i className={classes.header_sub_phone}>
          <img src={picon} alt="" className={classes.p_icon} /> +91-9958075432
        </i>
        <Link to="/ContactUs" className={classes.header_sub_contact}>
          Contact Us
        </Link>
      </div>

      <div
        className={
          navbar
            ? `${classes.header_main} ${classes.header_main_scroll}`
            : classes.header_main
        }
      >
        <nav className={classes.navbar}>
          <ul className={classes.navbar_links}>
            <li>
              <Link to="/" className={classes.navbar_links_link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className={classes.navbar_links_link}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className={classes.navbar_links_link}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/Products" className={classes.navbar_links_link}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className={classes.navbar_links_link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className={classes.social}>
          <a
            href="https://www.facebook.com/"
            target="blank"
            className={classes.social_link}
          >
            <i className="ti-facebook social-icon"></i>
          </a>

          <a
            href="https://twitter.com/"
            target="blank"
            className={classes.social_link}
          >
            <i className="ti-twitter social-icon"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="blank"
            className={classes.social_link}
          >
            <i className="ti-instagram social-icon"></i>
          </a>

          <a
            href="https://www.skype.com"
            target="blank"
            className={classes.social_link}
          >
            <i className="ti-skype social-icon"></i>
          </a>

          <a
            href=" https://www.linkedin.com/company/innomation-tech-services"
            target="blank"
            className={classes.social_link}
          >
            <i className="ti-linkedin social-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}
