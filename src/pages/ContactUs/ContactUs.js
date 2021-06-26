import React, { useState } from "react";
import cls from "./Contact.module.scss";
import Hero from "../../components/CommonHero";
import Address from "./SubComponents/Address";
import { useFormik } from "formik";
import Map2 from "./SubComponents/Map2";
import Ourpartners from "../Home/SubComponents/Ourpartners";

export default function Contact(props) {
  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState(false);
  const formik = useFormik({
    initialValues: { name: "", contact: "", email: "", message: "" },
    onSubmit: () => {
      setSubmit(true);
    },
    validate,
  });
  function closeModal() {
    setSubmit(false);
  }
  return (
    <div className={cls.maindiv1}>
      <Hero name="Contact Us" link="ContactUs" />
      <Address />
      <div className={cls.maindiv}>
        <div className={cls.div3}>
          <Map2 />
        </div>
        <div className={cls.div}>
          <h1>Write a Message</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className={cls.div2}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {state ? (
                formik.errors.name ? (
                  <h2 className={cls.modal2}>{formik.errors.name}</h2>
                ) : null
              ) : null}
            </div>
            <div className={cls.div2}>
              <input
                name="contact"
                type="text"
                placeholder="Your Phone"
                onChange={formik.handleChange}
                value={formik.values.contact}
              />
              {state ? (
                formik.errors.contact ? (
                  <h2 className={cls.modal2}>{formik.errors.contact}</h2>
                ) : null
              ) : null}
            </div>
            <div className={cls.div2}>
              <input
                name="email"
                type="text"
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {state ? (
                formik.errors.email ? (
                  <h2 className={cls.modal2}>{formik.errors.email}</h2>
                ) : null
              ) : null}
            </div>
            <div className={cls.div2}>
              <input
                name="message"
                type="text"
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {state ? (
                formik.errors.message ? (
                  <h2 className={cls.modal2}>{formik.errors.message}</h2>
                ) : null
              ) : null}
            </div>
            <br />
            <button type="Submit" onClick={() => setState(true)}>
              Submit
            </button>
          </form>
        </div>
        {submit && <Modal onClick={closeModal} />}
        {submit && <Backdrop onClick={closeModal} />}
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
