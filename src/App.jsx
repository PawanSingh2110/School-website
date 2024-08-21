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
import Registration from "./pages/Registration/Registration";
import FAQ from "./pages/FAQ/faq";
<<<<<<< HEAD
// import MediaGallery from './pages/About/MediaGallery';
// import VideoGallery from './pages/About/VideoGallery';
import Schooltime from "./pages/School-timing/Schooltime"
import Toppers from "./pages/Toppers/toppers";
import Cabinet from "./pages/Cabinet/cabinet";
=======
import Schooltime from "./pages/School-timing/Schooltime";
import StudentForm from './pages/Council-Guidlines/Student';
import ParentForm from './pages/Council-Guidlines/Parent';
import Achievements from "./pages/Achievements/Achievements"
import Cabinet from "./pages/Cabinet/cabinet";
import EventClander from "./pages/Event-Calender/EventClander"
import Sports from "./pages/Student-life/Sports";
import StudentHandbook from "./pages/Student-Handbook/Student-Handbook";
import Academics from "./pages/Academics/Academics";
import CoCurricularPage from "./pages/Student-life/Co-Curricular/CoCurricularPage";
import Socio from "./pages/Student-life/Socio-Cultural Dev/SocioPage";
>>>>>>> b1b7bb322c8b129f41a369ec7cb3c74780d580c7

function App() {
  return (
    <>
      <div>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Founder-desk" element={<Founderdesk />} />
          <Route path="/Principle-desk" element={<Pricipledesk />} />
          <Route path="/School-Management" element={<SchoolManagement />} />
          <Route path="/Policy" element={<PrinciplePoliecies />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
          <Route path="/Management-Committie" element={<Managementcommittie />} />
          <Route path="/Addmission-helpdesk" element={<Helpdesk />} />
          <Route path="/Addmission-Prodecure" element={<Prodecure />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/School-timing" element={<Schooltime />} />
<<<<<<< HEAD
          {/* About US */}
          {/* <Route path="/media-gallery" element={<MediaGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} /> */}
            <Route path = "/Toppers" element={<Toppers />} />
          <Route path = "/Cabinet" element ={<Cabinet/>}/>
=======
          <Route path="/school-form" element={<StudentForm />} />
          <Route path="/parent-form" element={<ParentForm />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Cabinet" element={<Cabinet />} />
          <Route path="/EventClander" element={<EventClander />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Student-Handbook" element={<StudentHandbook />} />
          <Route path='/Student-life' element={<CoCurricularPage />} />
          <Route path='/Student-life' element={<SocioPage />} />
          <Route path="/Academics" element={<Academics />} />
          
>>>>>>> b1b7bb322c8b129f41a369ec7cb3c74780d580c7
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
