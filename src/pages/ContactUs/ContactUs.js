import React, { useState } from "react";
import cls from "./Contact.module.scss";
import { useFormik } from "formik";
// import Header from "../componens/subcomponents/Header";
import MapContainer from "./SubComponents/Map";
import picon from "../../Images/phone-icon2.png";
import addrs from "../../Images/add.png";
import email from "../../Images/emailicon.png";
import Ourpartners from "../Home/SubComponents/Ourpartners";

export default function Contact(props) {
  const [submit, setSubmit] = useState(false);
  // const [state, setState] = useState(false);
  const formik = useFormik({
    initialValues: { name: "", contact: "", email: "", message: "" },
    onSubmit: () => {
      setSubmit(true);
    },
    validate,
  });

  // function deleteHandler() {
  //   setstate(true);
  // }

  function closeModal() {
    setSubmit(false);
  }

  return (
    <div className={cls.maindiv1}>
      {/* <Header /> */}
      <div className={cls.div5}>
        {/* <img src={cont} alt="" className={cls.img2} /> */}
        <h1 className={cls.head1}>Contact Us</h1>
      </div>
      <div className={cls.div4}>
        <div>
          {/* <h2>Address</h2> */}
          {/* <br /> */}
          <img src={addrs} alt="" className={cls.img} />
          {/* <h2>Address</h2> */}
        </div>
        <div>
          <img src={picon} alt="" className={cls.img} />
          {/* <h2>+91-9958075432</h2> */}
        </div>
        <div>
          <img src={email} alt="" className={cls.img} />
          {/* <h2>saurabhgupta0502@gmail.com</h2> */}
        </div>
      </div>
      <div className={cls.div4}>
        <div>
          {/* <h2>Address</h2> */}
          {/* <br /> */}
          {/* <img src={addrs} alt="" className={cls.img} /> */}
          <h2>Address</h2>
        </div>
        <div>
          {/* <img src={picon} alt="" className={cls.img} /> */}
          <h2>+91-9958075432</h2>
        </div>
        <div>
          {/* <img src={email} alt="" className={cls.img} /> */}
          <h2>saurabhgupta0502@gmail.com</h2>
        </div>
      </div>
      <div className={cls.maindiv}>
        <div className={cls.div}>
          <h1>Write a Message</h1>
          <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor="name">Your Name: </label> */}
            <div className={cls.div2}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <h3>{formik.errors.name}</h3> : null}
            </div>
            <div className={cls.div2}>
              <input
                name="contact"
                type="text"
                placeholder="Your Phone"
                onChange={formik.handleChange}
                value={formik.values.contact}
              />
              {formik.errors.contact ? <h3>{formik.errors.contact}</h3> : null}
            </div>
            <div className={cls.div2}>
              <input
                name="email"
                type="text"
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <h3>{formik.errors.email}</h3> : null}
            </div>
            <div className={cls.div2}>
              <input
                name="message"
                type="text"
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.errors.message ? <h3>{formik.errors.message}</h3> : null}
              {/* {JSON.stringify(formik.errors) === "{}"
              ? () => {
                  setState(true);
                }
              : null} */}
            </div>
            {/* <label htmlFor="contact">Your Phone: </label> */}
            {/* <label htmlFor="email">Your Email: </label> */}
            {/* <label htmlFor="message">Your Message: </label> */}
            <br />
            <button type="Submit">Submit</button>
            {/* {submit ? console.log("Mayank") : null} */}
          </form>
        </div>
        {submit && <Modal onClick={closeModal} />}
        {submit && <Backdrop onClick={closeModal} />}
        <div className={cls.div3}>
          <MapContainer />
        </div>
      </div>
      <Ourpartners />
    </div>
  );
}

function Modal(props) {
  function cancelHandler() {
    props.onClick();
  }
  return (
    <div className={cls.modal}>
      <h1>Thank you for your response.</h1>
      <button onClick={cancelHandler}>Close</button>
    </div>
  );
}

function Backdrop(props) {
  return <div className={cls.backdrop} onClick={props.onClick}></div>;
}

const validate = (values) => {
  const errors = {};
  // console.log(errors);
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.contact) {
    errors.contact = "Required";
  } else if (/\D/i.test(values.contact)) {
    errors.contact = "Only numbers are allowed.";
  } else if (values.contact.length != 10) {
    errors.contact = "Must be 10 numbers.";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  }
  console.log(JSON.stringify(errors));
  return errors;
};
