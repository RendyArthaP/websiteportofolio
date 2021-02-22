import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../pages/About';
import Blog from '../pages/Blog';
import Portofolio from '../pages/Portofolio';
const Navbar = () => {
  return (
    <Router>
      <div>
        <div>
          <h1>RENDYARTHA</h1>
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portofolio">Portofolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portofolio">
            <Portofolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
