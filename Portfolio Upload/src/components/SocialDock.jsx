import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function SocialDock() {
  const links = [
    {
      icon: <FaEnvelope />,
      url: "mailto:katarabunty30@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/",
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/919316396738",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-50 hidden lg:flex items-center gap-5">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className={`
            w-14 h-14
            rounded-2xl
            bg-slate-900/80
            backdrop-blur-xl
            border border-cyan-500/20
            flex items-center justify-center
            text-cyan-300 text-2xl
            transition-all duration-300
            hover:-translate-y-2
            hover:scale-110
            hover:rotate-6
            hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
            ${item.color}
          `}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialDock;