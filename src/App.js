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
      <UserContext.Provider value={{ isLogin, setIsLogin }}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/blog" component={Blog} />
          <Route component={PageNotFound}/>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
