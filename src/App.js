import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import Home from "./components/Pages/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Sell from "./components/Pages/Sell";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/SignUp";
import RoleSelector from "./components/RoleSelector";
import Tenant from "./components/Pages/Tenant";
import Lanlord from "./components/Pages/Landlord";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/register" element={<Signup/>}/>
          <Route path="/sell" element={<Sell />} />
          <Route path="/tenant" element={<Tenant />} />
          <Route path="/owner" element={<Lanlord />} />
          <Route path="/role" element={<RoleSelector/>} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;