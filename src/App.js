import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Employee } from "./Employee";
import { Department } from "./Department";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3 className="d-flex justify-content-center m-3">React JS Frontend</h3>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/Home">
                Home
              </NavLink>
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/Department"
              >
                Department
              </NavLink>
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/Employee"
              >
                Employee
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Department" component={Department} />
          <Route path="/Employee" component={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
