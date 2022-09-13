import React from "react";

function Register() {
  return (
    <div className=" container-fluid">
      <div className="tab-content">
        <div id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="registerUsername"
                className="form-control"
              />
              <label className="form-label">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                className="form-control"
              />
              <label className="form-label">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label">Repeat password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label">
                I have read and agree to the terms
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
