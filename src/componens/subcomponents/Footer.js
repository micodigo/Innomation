import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import logo_small from "../../Images/logo-small.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.block} ${classes.main}`}>
        <div className={classes.social}>
          <img src={logo_small} alt="" />
          <div className={classes.social_links}>
            <a
              href="https://twitter.com/"
              target="blank"
              className={classes.social_links_link}
            >
              <i className={`ti-twitter ${classes.social_icon}`}></i>
            </a>
            <a
              href="https://www.skype.com"
              target="blank"
              className={classes.social_links_link}
            >
              <WhatsAppIcon fontSize="large" className={classes.social_icon} />
            </a>
            <a
              href=" https://www.linkedin.com/company/innomation-tech-services"
              target="blank"
              className={classes.social_links_link}
            >
              <i className="ti-linkedin social-icon"></i>
            </a>
          </div>
        </div>
        <div className={classes.shortcut}>
          <div className={classes.shortcut_details}>
            <h3 className={classes.heading_secondary}>Contact Us</h3>
            <ul>
              <li>InnoMation Tech Services</li>
              <li>+91-9958075432</li>
              <li>saurabhgupta0502@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className={classes.shortcut}>
          <div className={classes.shortcut_details}>
            <h3 className={classes.heading_secondary}>Need Help?</h3>
            <ul>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.shortcut}>
          <div className={classes.shortcut_details}>
            <h3 className={classes.heading_secondary}>Services</h3>
            <ul>
              <li>
                <Link to="/Services">Machine Automation</Link>
              </li>
              <li>
                <Link to="/Services">Panel Building</Link>
              </li>
              <li>
                <Link to="/Services">PLC Programming</Link>
              </li>
              <li>
                <Link to="/Services">Industrial IOT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${classes.block} ${classes.copyright}`}>
        <h3 className={classes.copyright_heading}>
          Copyright &copy; 2021, InnoMation Tech Services
        </h3>
        <div className={classes.copyright_links}>
          <Link to="/AboutUs" className={classes.link}>
            About Us{" "}
          </Link>
          <span>|</span>
          <Link to="/ContactUs" className={classes.link}>
            {" "}
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
