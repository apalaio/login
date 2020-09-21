import * as types from "./types";

const { FIELD, LOGIN, SUCCESS, ERROR, LOGOUT } = types;

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FIELD: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case LOGIN: {
      return { ...state, isLoading: true, error: "" };
    }
    case SUCCESS: {
      console.log("action.type.SUCCESS - action.email:", action.email);
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        email: action.email,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoggedIn: false,
        email: "",
        password: "",
        error: action.error,
        isLoading: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        email: "",
        password: "",
      };
    }

    default: {
      break;
    }
  }
  return state;
}
