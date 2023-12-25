// ******** Imports ******** //
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // ******** Handle Login Funtion ******** //
  const handleLogin = () => {
    const user = users.find((ele) => ele.email === emailRef.current.value);
    console.log(user);
    if (user && user.password === passwordRef.current.value) {
      localStorage.setItem("user:email", user.email);
      navigate("/");
    }
  };

  return (
    <div className="login h-75  d-flex flex-column align-items-center rounded px-3 py-5">
      <h1 className="">Login</h1>
      <form className="w-75 d-flex flex-column 'align-items-center">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="password"
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="btn btn-primary btn-lg mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// ******** Exports ******** //
export default Login;
