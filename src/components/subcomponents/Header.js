import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import picon from "../../Images/phone-icon.png";
import classes from "./Header.module.scss";
import { useState } from "react";
import "../../themify-icons.css";
import Dropdown from "../Dropdown";

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
          <Link to="/">
            <img src={logo} alt="" className={classes.logo_img} />
          </Link>
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
              <div>
                <button>
                  <Link to="/AboutUs" className={classes.navbar_links_link}>
                    About Us
                  </Link>
                </button>
                <Dropdown />
              </div>
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
            href="https://api.whatsapp.com/send/?phone=919958075432&text&app_absent=0"
            target="blank"
            className={classes.social_link}
          >
            <svg
              id="WhatsApp_Logo"
              data-name="WhatsApp Logo"
              xmlns="http://www.w3.org/2000/svg"
              width="455"
              height="455"
              viewBox="0 0 455 455"
              className={classes.social_icon}
            >
              <path
                id="WA_Logo"
                data-name="WA Logo"
                class="cls-1"
                d="M22.394,435.826l29.49-107.717A207.5,207.5,0,0,1,24.137,224.187c0.046-114.611,93.3-207.856,207.873-207.856A207.906,207.906,0,0,1,439.882,224.353c-0.046,114.614-93.306,207.868-207.869,207.868h-0.086a207.686,207.686,0,0,1-99.337-25.3Zm115.3-66.539L144,373.032a172.519,172.519,0,0,0,87.937,24.083h0.071c95.228,0,172.735-77.508,172.773-172.775a172.8,172.8,0,0,0-172.7-172.9c-95.3,0-172.808,77.5-172.846,172.761A172.357,172.357,0,0,0,85.65,316.147l4.108,6.538L72.3,386.441Zm199.041-95.5c-1.3-2.167-4.76-3.467-9.954-6.067s-30.73-15.164-35.491-16.9-8.224-2.6-11.686,2.6-13.416,16.9-16.447,20.366-6.059,3.9-11.252,1.3S229.976,267,210.137,249.3c-15.441-13.773-25.865-30.781-28.9-35.982s-0.323-8.01,2.277-10.6c2.337-2.327,5.195-6.067,7.792-9.1s3.462-5.2,5.193-8.665,0.866-6.5-.433-9.1-11.685-28.167-16.014-38.567c-4.216-10.127-8.5-8.755-11.686-8.916-3.026-.151-6.492-0.183-9.955-0.183a19.083,19.083,0,0,0-13.85,6.5c-4.761,5.2-18.179,17.767-18.179,43.331S145,228.285,147.6,231.752s36.624,55.929,88.728,78.427a298.249,298.249,0,0,0,29.61,10.941c12.442,3.954,23.765,3.4,32.715,2.058,9.979-1.49,30.73-12.564,35.058-24.7S338.035,275.948,336.736,273.783Z"
              />
            </svg>
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
