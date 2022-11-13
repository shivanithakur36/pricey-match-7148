import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
    console.log("ggggg");
    Navigate()
  };

  

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, login}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
