import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Services = lazy(() => import("./pages/Services"));
const E2Business = lazy(() => import("./pages/E2Business"));
const L1Business = lazy(() => import("./pages/L1Business"));
import "./App.css";

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="premium-spinner"></div>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/e2-business" element={<E2Business />} />
          <Route path="/l1-business" element={<L1Business />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
