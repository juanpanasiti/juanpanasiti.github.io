import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Experience from "./views/Experience";
import Education from "./views/Education";
import Contact from "./views/Contact";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
