import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/login"}>Login </Link>
          </li>

          <li>
            <Link to={"/register"}>Register </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
