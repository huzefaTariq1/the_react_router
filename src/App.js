import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';
import Auther from "./pages/Auther";

function App() {
  return (
    <div className="App">
         
         <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
         </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/article/:id" element={<Auther/>} />
        </Routes>
    </div>
  );
}

export default App;
