import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserAuth from "./Pages/UserAuth";
function Rutas() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Prueba Tecnica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse  navbar-collapse  justify-content-end "
            id="navbarID"
          >
            <div className="navbar-nav nav gap-2 ">
              <Link
                className="btn btn-success active "
                aria-current="page"
                to="/user/login"
              >
                Login
              </Link>

              <Link
                className="btn btn-success active  bg-danger"
                aria-current="page"
                to="/user/register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/*" element={<UserAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
