import { useState } from "react";
import { createContext } from "react";
import {  useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const Login = () => {
    const navigate = useNavigate();

    setIsAuth(true);
    console.log("ggggg");
    navigate("/middlepart")
  };

  

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, Login}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
