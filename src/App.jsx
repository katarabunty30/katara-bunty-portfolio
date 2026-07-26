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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 Seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">

      <ScrollProgress />

      <Background />
      <CursorGlow />

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