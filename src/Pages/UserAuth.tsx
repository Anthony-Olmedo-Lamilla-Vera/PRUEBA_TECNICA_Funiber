import React from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function UserAuth() {
  const { pathname } = useLocation();
  return (
    <div className="container my-2 w-25">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link  ${
              pathname === "/user/login" ? "active" : ""
            }`}
            id="tab-login"
            data-mdb-toggle="pill"
            to="login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className={`nav-link  ${
              pathname === "/user/register" ? "active" : ""
            }`}
            id="tab-register"
            data-mdb-toggle="pill"
            to="register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Register
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default UserAuth;
