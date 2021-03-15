import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ isLogin, setIsLogin }}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/blog" component={Blog} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
