import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
// import Home from './Pages/Home/Home';
// import Shop from './Pages/Shop/Shop';
import Invest from './Pages/Invest/Invest';
import List   from './Pages/List/List';
import About from './Pages/About-Us/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import '../src/styles/tailwind.css'
import './App.css';

function App() {
  return (
    <div className="">
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element= { <Home/>} /> */}
        {/* <Route path="/shop" element= { <Shop/>} /> */}
        <Route path="/invest" element= { <Invest/>} />
        <Route path="/list" element= { <List/>} />
        <Route path="/about" element= { <About/>} />
        <Route path="/contact" element= { <Contact/>} />
        <Route path="/login" element= { <Login/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
