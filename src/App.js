import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portofolio" component={Portofolio} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App
