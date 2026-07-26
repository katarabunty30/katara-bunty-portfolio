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
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/75 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            <FaDatabase className="text-cyan-400 text-3xl" />
          </motion.div>

          <h1 className="text-2xl font-black tracking-wide">
            Bunty
            <span className="text-cyan-400">.</span>
          </h1>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">

          {links.map((link) => (

            <li key={link.name}>

              <motion.a
                whileHover={{ y: -3 }}
                href={link.href}
                className="relative text-white font-medium group transition"
              >
                {link.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                  "
                />

              </motion.a>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-t border-cyan-500/20"
          >

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-5 text-white hover:bg-cyan-500/10 hover:text-cyan-300 transition"
              >
                {link.name}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;