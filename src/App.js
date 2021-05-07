import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Component";
import About from "./components/About/Component";

function App() {
  return (
    <Router>
      <div className="container-is-fullhd">
        <nav className="navbar" role="navigation" aria-label="Main nav">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              User generator
            </Link>
          </div>
          <div id="navbarItems" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/about" className="navbar-item">
                About
              </Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
