import React from "react";
import classes from "./Layout.module.scss";
import Footer from "./subcomponents/Footer";
import Header from "./subcomponents/Header";

function Layout(props) {
  return (
    <>
      <div className={classes.background}></div>
      <main className={classes.mainbody}>
        <Header />
        {props.children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
