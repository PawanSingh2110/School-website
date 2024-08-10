import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Founderdesk from "./pages/founder-desk/Founder-desk";
import Pricipledesk from "./pages/principle-desk/Pricipledesk";
import Infrastructure from "./pages/infrastuture/Infrastructure";
import Managementcommittie from "./pages/management-committie/Managementcommittie";
import SchoolManagement from "./pages/school-management/SchoolManagement";
import PrinciplePoliecies from "./pages/priciple-polices/PrinciplePoliecies";
import Helpdesk from "./pages/Addmission-helpdsk/Helpdesk";
import Prodecure from "./pages/Addmission-Prodecure/Prodecure";
import Feesstructure from "./pages/Fees-Structure/Feesstructure";
import Registration from "./pages/Registration/Registration";
import FAQ from "./pages/FAQ/faq";
import MediaGallery from './pages/About/MediaGallery';
import VideoGallery from './pages/About/VideoGallery';


function App() {
  return (
    <>
      <div>
        <Hero/>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/About" element={<About />} />
          <Route path="/Founder-desk" element={<Founderdesk/>} />
          <Route path="/Principle-desk" element={<Pricipledesk />} />
          <Route path="/School-Management" element={<SchoolManagement />} />
          <Route path="/Policy" element={<PrinciplePoliecies />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
          <Route path="/Management-Committie" element={<Managementcommittie />} />
          {/* //Addmissions */}
          <Route path="/Addmission-helpdesk" element={<Helpdesk />} />
          <Route path="/Addmission-Prodecure" element={<Prodecure />} />
          <Route path="/Fees-structure" element={<Feesstructure />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path = "/FAQ" element={<FAQ />}/>
          {/* About US */}
          <Route path="/media-gallery" element={<MediaGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
        </Routes>
        
        <Footer/>

      </div>
    </>
   
  );
}

export default App;