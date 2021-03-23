import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/portofolio" component={Portofolio} />
        <Route path="/blog" component={Blog} />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
};

export default App;
