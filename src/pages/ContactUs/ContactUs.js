import React from "react";
import cls from "./Contact.module.scss";
import Hero from "../../components/CommonHero";
import Address from "./SubComponents/Address";
import Form from "./SubComponents/Form";
import Ourpartners from "../Home/SubComponents/Ourpartners";

export default function Contact(props) {
  return (
    <div className={cls.maindiv1}>
      <Hero name="Contact Us" link="ContactUs" />
      <Address />
      <Form />
      <Ourpartners />
    </div>
  );
}
