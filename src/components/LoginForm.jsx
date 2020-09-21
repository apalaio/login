import React from "react";
import { loginUser } from "../firebase/auth-services";
import "./App.css";
import fire from "../firebase/config";
import * as types from "../reducer/types";

import { useDispatch, useSelector } from "react-redux";

const { FIELD, LOGIN, SUCCESS, ERROR } = types;

function LoginForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const { email, password, isLoading, error } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN });
    try {
      await loginUser(email, password);
      dispatch({ type: SUCCESS, email: fire.auth().currentUser?.email });
    } catch (error) {
      dispatch({ type: ERROR, error: "Incorrent email or password" });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <i>{error}</i>}
      <p> Sign in</p>
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
  );
}

export default LoginForm;
