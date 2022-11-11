// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
// import GetStartedPage from "./Components/MiddlePage/MiddlePage";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Footer/>
      {/* <GetStartedPage/> */}
      {/* <MiddlePage/> */}
      
        
    </div>
  );
}

export default App;
