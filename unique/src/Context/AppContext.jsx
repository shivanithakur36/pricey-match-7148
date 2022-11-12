import { createContext, useReducer } from "react";
import {  LOGIN,LOADING ,ERROR} from "./action";
import { appReducer } from "./appReducer";

export const AppContext = createContext();

const initState = {
  auth: null,
  
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const loginUser = async (userData, navigate) => {
    dispatch({
      type: LOADING,
    });
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      });

      let data = await res.json();
      dispatch({
        type: LOGIN,
        payload: data.token,
      });
      navigate("/");

      //   console.log(data);
    } catch (e) {
      dispatch({
        type: ERROR,
      });
      console.log(e);
    }
  };

  

  

  //IF you are using JSON server to manage Cart

  /**
   * ADD TO CART
   * 1 Post Req with the product POST
   * 2 getDataOfCart, make get req to JSON server GET
   * 3 CART Component => getDataOfCart() in useEffect() and render that
   * 4 Make one function to manage Total price of cart
   * 5 Button from where user can checkout
   */

  return (
    <AppContext.Provider value={{ loginUser, state }}>
      {children}
    </AppContext.Provider>
  );
};