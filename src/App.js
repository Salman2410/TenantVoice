import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sell from "./components/Sell";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Login/>} />
          
          <Route path="/sell" element={<Sell />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
