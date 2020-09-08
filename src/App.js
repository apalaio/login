import React, { useReducer } from "react";
import { login } from "./login";
import "./App.css";

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return { ...state, [action.field]: action.value };
    }
    case "login": {
      return { ...state, isLoading: true, error: "" };
    }
    case "success": {
      return { ...state, isLoggedIn: true, isLoading: false };
    }
    case "error": {
      return {
        ...state,
        isLoggedIn: false,
        error: "Incorrent username or password",
        username: "",
        password: "",
        isLoading: false,
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    }
    default: {
      break;
    }
  }
  return state;
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1> Hello {username}!</h1>
          <button onClick={() => dispatch({ type: "logout" })}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && <i>{error}</i>}
          <p> Please Login</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "username",
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
                type: "field",
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
    </div>
  );
}

export default App;
