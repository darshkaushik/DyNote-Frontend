import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import WorkSpace from "./pages/WorkSpace/workspace";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/workspace" component={WorkSpace} />
      {/* <Route path="/not-found" component={NotFound} /> */}
      <Redirect from="/" exact to="/home" />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
}

export default App;
