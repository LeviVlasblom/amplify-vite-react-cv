import { motion } from "framer-motion";
import Scrollspy from "react-scrollspy";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "exp", label: "Exp" },
  { id: "contact", label: "Contact" },
];

const socialItems = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/levi-vlasblom-a41465195/" },
  { icon: <FaGithub />, href: "https://github.com/LeviVlasblom" },
  { icon: <FaX />, href: "https://x.com/EpsilonLevi" },
  { icon: <FaGlobe />, href: "#" },
];

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-full w-16 bg-black flex flex-col justify-between items-center py-6 z-50"
    >
      {/* Top: Logo + Socials */}
      <div className="flex flex-col items-center space-y-6">
        <div className="text-2xl font-bold text-orange-400">LV.</div>
        <div className="flex flex-col gap-4 text-gray-400">
          {socialItems.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition text-lg"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Middle: Rotated Nav Links */}
      <Scrollspy
        items={navItems.map((item) => item.id)}
        currentClassName="active-nav"
        offset={-10}
        componentTag="div"
        className="flex flex-col items-center gap-6"
      >
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="relative w-16 h-12 flex items-center justify-center group "
          >
            <div
              className=" "
            />
            <div
              className="relative transform -rotate-90 origin-center text-sm text-gray-400 group-hover:text-orange-400 transition tracking-wide z-10"
            >
              {label}
            </div>

            {/* Right border when active */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-orange-400 opacity-0 group-[.active-nav]:opacity-100 transition" />
          </a>
        ))}
      </Scrollspy>

      {/* Bottom Spacer (optional) */}
      <div />
    </motion.aside>
  );
};

export default Sidebar;
