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
import Propertylisting from "./components/Property/Propertylisting";
import Modal from 'react-modal';
import Review from "./components/Pages/Review";
import AnonymousReview from "./components/Pages/AnonymousReview";
import Reviewpage from "./components/Pages/Reviewpage";

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>}/>
          <Route path="/sell" element={<Sell />} />
          <Route path="/tenant" element={<Tenant />} />
          <Route path="/owner" element={<Lanlord />} />
          <Route path="/role" element={<RoleSelector/>} />
          <Route path ="/propertylisting" element={<Propertylisting/>}/>
          <Route path ="/reviews" element={<Review/>}/>
          <Route path ="/reviewpage" element={<Reviewpage/>}/>
          <Route path ="/anonymous" element={<AnonymousReview/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
