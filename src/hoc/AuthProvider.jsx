import React from "react";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  function signin(newUser, cb) {
    setUser(newUser);
    cb();
  }

  function logout(cb) {
    setUser(null);
    cb();
  }

  const value = {user, signin, logout}

  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
};
