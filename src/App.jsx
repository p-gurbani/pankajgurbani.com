import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import MyStory from "./pages/MyStory";
import ContactMe from "./pages/ContactMe";
import KeyboardShortcuts from "./components/KeyboardShortcuts";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MeenacGarden from "./pages/caseStudies/MeenacGarden";

function App() {
  return (
    <Router>
      <div className="text-body bg-body-bg dark:bg-night-body-bg dark:text-night-body app">
        <NavigationBar />
        <KeyboardShortcuts />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-study/meenac-garden" element={<MeenacGarden />} />
          <Route path="about" element={<MyStory />} />
          <Route path="contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
