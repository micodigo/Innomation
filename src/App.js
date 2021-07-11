import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Contact from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
import Industries from "./pages/Industries/Industries";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/Services" exact>
          <Services />
        </Route>
        <Route path="/Industries" exact>
          <Industries />
        </Route>
        <Route path="/Products" exact>
          <Products />
        </Route>
        <Route path="/ContactUs" exact>
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
