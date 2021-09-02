import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Component";
import About from "./components/About/Component";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-gray-100 backdrop-blur">
        <nav className="bg-gray-200 backdrop-blur">
          <div class="flex items-center justify-between px-3 text-black">
            <div className="hover:border-b-2 hover:border-black transition-all py-2">
              <Link to="/" className="">
                User generator
              </Link>
            </div>
            <div className="hover:border-b-2 hover:border-black transition-all py-2">
              <Link to="/about">About</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
