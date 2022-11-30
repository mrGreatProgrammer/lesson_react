import React from "react";

const SignIn = () => {
  function handlerSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <p>
            <input type="email" name="email" id="email" />
          <label htmlFor="email">
            E-mail
          </label>
        </p>
        <p>
            <input type="password" name="password" id="password" />
          <label htmlFor="password">
            Password
          </label>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
