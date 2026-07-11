import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// 1. Implementation of React Lazy Loading
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Services = lazy(() => import("./pages/Services"));
import "./App.css"; // Global styles for the app

// 2. High-end, theme-matched loading component
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
      {/* 3. Wrap your routes in Suspense and pass the custom loader */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;