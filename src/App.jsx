import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
  setLoading(false);
}, 2800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
  <>
    {loading && <Loader />}

    <div
      className={`transition-opacity duration-700 ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">

        <ScrollProgress />

        <Background />

        {window.innerWidth > 768 && <CursorGlow />}

        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />

        <BackToTop />

      </div>
    </div>
  </>
);

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">

      <ScrollProgress />

      <Background />

      {/* Disable Cursor Glow on Mobile */}
      {window.innerWidth > 768 && <CursorGlow />}

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Skills />

      <Projects />

      <Stats />

      <Testimonials />

      <Contact />

      <Footer />

      <BackToTop />

    </div>
  );
}

export default App;