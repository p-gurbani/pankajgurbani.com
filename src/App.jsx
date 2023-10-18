import { Suspense, lazy } from "react";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KeyboardShortcuts from "./components/KeyboardShortcuts";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner";
import { LazyMotion } from "framer-motion";

const loadFramerMotionFeatures = () =>
  import("./libs/FramerMotionLazy.js").then((res) => res.default);
const MyStory = lazy(() => import("./pages/MyStory"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const MeenacGarden = lazy(() => import("./pages/caseStudies/MeenacGarden"));

function App() {
  return (
    <Router>
      <LazyMotion features={loadFramerMotionFeatures}>
        <div className="text-body bg-body-bg dark:bg-night-body-bg dark:text-night-body app">
          <NavigationBar />
          <KeyboardShortcuts />
          <ScrollToTop />
          <Suspense
            fallback={
              <div className="w-full flex flex-col items-center justify-center h-screen">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route
                path="case-study/meenac-garden"
                element={<MeenacGarden />}
              />
              <Route path="about" element={<MyStory />} />
              <Route path="contact" element={<ContactMe />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </LazyMotion>
    </Router>
  );
}

export default App;
