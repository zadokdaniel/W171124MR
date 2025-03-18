import { Link, NavLink } from "react-router";
import Logo from "./logo";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md navbar bg-light shadow-sm"
      aria-label="Fourth navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-in">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-up">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-up-biz">
                Sign Up Biz
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
