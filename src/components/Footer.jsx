import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-cyan-500/20 py-12 px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Bunty<span className="text-cyan-400">.</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Excel • Google Sheets • AI Automation
          </p>
        </div>

        {/* Right */}
        <div className="flex gap-4">

          {/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=katarabunty30@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,.5)]"
>
  <FaEnvelope size={20} />
</a>

          {/* GitHub */}
          <a
            href="https://github.com/katarabunty30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,.5)]"
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bunty-katara-506ab7424"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,.5)]"
          >
            <FaLinkedin size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919316396738?text=Hello%20Bunty,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,.5)]"
          >
            <FaWhatsapp size={20} />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-cyan-500/10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Katara Bunty. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;