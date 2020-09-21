import React from "react";
import LoginForm from "./LoginForm";
import LoginOther from "./LoginOther";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../firebase/auth-services";
import { LOGOUT } from "../reducer/types";
import { Link } from "@reach/router";

const App = () => {
  const state = useSelector((state) => {
    return state;
  });

  const { email, isLoggedIn } = state;

  const dispatch = useDispatch();

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1> Hello {email}!</h1>
          <button
            onClick={() => {
              logoutUser();
              dispatch({ type: LOGOUT });
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <LoginForm />
      )}
      <Link to="register">Dont have an account yet? Sign up here </Link>
      <br /> <br />
      <LoginOther />
    </div>
  );
};

export default App;
