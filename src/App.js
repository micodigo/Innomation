import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./componens/Layout";
import Home from "./pages/Home";

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
          </Route>
          <Route path="/ContactUs" exact>
            <Home />
          </Route> */}
      </Switch>
    </Layout>
  );
}

export default App;
