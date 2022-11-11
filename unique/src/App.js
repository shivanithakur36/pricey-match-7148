// import logo from './logo.svg';
import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
// import GetStartedPage from "./Components/MiddlePage/MiddlePage";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Pages/Signup";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Login/>
      <Footer/>
      <Signup/>
      {/* <GetStartedPage/> */}
      {/* <MiddlePage/> */}
      
        
    </div>
  );
}

export default App;
