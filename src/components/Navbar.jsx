import { useState, useEffect } from "react";
import { FaDatabase, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-cyan-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-8 py-5">

        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <FaDatabase className="text-cyan-400 text-3xl" />
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-black">
            Bunty
            <span className="text-cyan-400">.</span>
          </h1>
        </motion.a>

        {/* Desktop */}

        <ul className="hidden lg:flex items-center gap-10">

          {links.map((link) => (
            <li key={link.name}>

              <motion.a
                whileHover={{ y: -2 }}
                href={link.href}
                className="relative text-white font-medium group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />

              </motion.a>

            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white text-3xl"
        >
          <FaBars />
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <>

            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 lg:hidden"
            />

            {/* Sidebar */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 w-72 h-screen bg-[#071321] border-l border-cyan-500/20 z-50 lg:hidden"
            >

              <div className="flex justify-between items-center px-6 py-6 border-b border-cyan-500/20">

                <h2 className="text-2xl font-bold">
                  Menu
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-white"
                >
                  <FaTimes />
                </button>

              </div>

              <ul className="flex flex-col mt-10">

                {links.map((link) => (

                  <li key={link.name}>

                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-8 py-5 text-lg text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                    >
                      {link.name}
                    </a>

                  </li>

                ))}

              </ul>

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;