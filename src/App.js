import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import { UserContext } from "./context/UserContext";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{ isLogin, setIsLogin }}>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portofolio" component={Portofolio}>
            <Portofolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
