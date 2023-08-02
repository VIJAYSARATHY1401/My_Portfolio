import "./App.css";
import "./bs/css/bootstrap.min.css";
import TopContainer from "./components/TopContainer";
import OverviewSection from "./components/OverviewSection";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dummy from "./components/Dummy";
import Listgroup from "./components/Listgroup";
import Courses from "./components/Courses";
import AcademicMiniProjects from "./components/AcademicMiniProjects";
import Awards from "./components/Awards";
import FutureWork from "./components/FutureWork";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import InternshipExperience from "./components/InternshipExperience";
import FloatingIcons from "./components/FloatingIcons";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-img">
        <TopContainer />
      </div>
      <OverviewSection />
      <Listgroup />
      <InternshipExperience />
      <Dummy />
      <Courses />
      <Awards />
      <FutureWork />
      <ContactForm />
      <Footer />
      <FloatingIcons />
    </div>
  );
}

export default App;
