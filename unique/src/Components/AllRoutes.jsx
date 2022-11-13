import { Route, Routes } from "react-router-dom";
// import About from "../Components/About";
// import Home from "../Components/Home";
// import AllUsersPage from "./AllUsersPage";
// import SingleUserPage from "./SingleUserPage";
// import PrivateRoute from "../Components/PrivateRoute";
// import Login from "../Components/Login";
// import LogOut from "../Components/Logout";
import Login from "../Components/App/Login";
import MiddlePage from "../Components/MiddlePage/MiddlePage";
import GetStartedPage from "../Components/Pages/GetStartedPage";
import Signup from "../Components/Pages/Signup";




export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/about" element={<MiddlePage />}></Route>
        <Route
          path="/users"
          element={
            
              <GetStartedPage />
            
          }
        ></Route>

        <Route path="/login" element={<Signup />}></Route>

        

      </Routes>
    </>
  );
}
