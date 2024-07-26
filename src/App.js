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
import UserDashboard from "./components/Pages/UserDashboard";
import Track from "./components/Pages/Track";
import Drop from "./components/Pages/drop";
import Setting from "./components/Pages/setting/Setting"
import Collection from "./components/Pages/collections/Collection";
import RenterProfile from "./components/Pages/Renter/Renter-profile";
import PersonalDetail from "./components/Pages/Renter/PersonalDetail";
import Aboutme from "./components/Pages/Renter/Aboutme";
import AddressHistory from "./components/Pages/Renter/AddressHistory";
import Employment from "./components/Pages/Renter/Employment";

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
          <Route path ="/tenantdashboard" element={<UserDashboard/>}/>
          <Route path ="/track" element={<Track/>}/>
          <Route path ="/drop" element={<Drop/>}/>
          <Route path ="/Setting" element={<Setting/>}/>
          <Route path ="/Collection" element={<Collection/>}/>
          <Route path ="/RenterProfile" element={<RenterProfile/>}/>
          <Route path ="/PersonalDetail" element={<PersonalDetail/>}/>
          <Route path ="/Aboutme" element={<Aboutme/>}/>
          <Route path ="/AddressHistory" element={<AddressHistory/>}/>
          <Route path ="/EmploymentStatus" element={<Employment/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
