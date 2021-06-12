import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./componens/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/Aboutus" exact>
            <Home />
          </Route>
          <Route path="/Services" exact>
            <Home />
          </Route>
          <Route path="/Products" exact>
            <Home />
          </Route> */}
        <Route path="/ContactUs" exact>
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
