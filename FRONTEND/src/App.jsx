import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import TrustSection from "./components/TrustSection";
// Lazy load the Services component
const Services = lazy(() => import("./components/Services"));

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services - Lazy Loaded */}
      <Suspense
        fallback={
          <div className="lazy-loader">
            Loading Services...
          </div>
        }
      >
        <Services />
      </Suspense>

      <TrustSection></TrustSection>
 {/* ✅ NEW: Tech Stack Section placed right after Services */}
      <TechStack />
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
