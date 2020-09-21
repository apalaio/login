import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../firebase/auth-services";
import fire from "../firebase/config";
import { Link } from "@reach/router";
import * as types from "../reducer/types";

const { FIELD, LOGIN, SUCCESS, ERROR, LOGOUT } = types;

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN });
    try {
      const userRegistered = await registerUser(email, password);
      if (typeof userRegistered === "string") {
        dispatch({ type: ERROR, error: userRegistered });
      } else {
        dispatch({ type: SUCCESS, email: fire.auth().currentUser?.email });
      }
    } catch (error) {
      dispatch({ type: ERROR, error: "Oops! Something went wrong" });
    }
  };

  const state = useSelector((state) => {
    return state;
  });

  console.log("state.email", state.email || 0);
  const { password, isLoading, error, email, isLoggedIn } = state;

  const dispatch = useDispatch();

  return (
    <div className="App">
      {isLoggedIn && !error ? (
        <>
          <h1> Hello {email}!</h1>
          <button onClick={() => dispatch({ type: LOGOUT })}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {console.log("error:", error)}
          {error && <i>{error}</i>}
          <p>Sign up</p>

          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) =>
              dispatch({
                type: FIELD,
                field: "email",
                value: e.currentTarget.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: FIELD,
                field: "password",
                value: e.currentTarget.value,
              })
            }
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
      )}
      <Link to="/">Back to Sign in </Link>
    </div>
  );
};

export default RegisterPage;
