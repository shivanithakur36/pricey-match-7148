import {  LOGIN, ERROR, LOADING } from "./action";


export const appReducer = (state, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          auth: action.payload,
          loading: false,
          error: false,
        };
        case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
      case ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
  
      
      default:
        return state;
    }
  };