import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || "/";


  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inp = form.username.value;

    signin(inp, ()=>navigate(fromPage, {replace: true }))
  }

  return (
    <div>
      LoginPage
      {fromPage}
      <form onSubmit={handleSubmit}>
        <label>
            <input type="text" name="username" />
            </label>
            <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
