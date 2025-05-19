import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-16 backdrop-blur-md bg-black/30 z-40 flex justify-end items-center px-6">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-4 py-2 rounded-md font-medium"
        >
          My resume
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 bg-black border border-orange-700 rounded shadow-lg w-52"
            >
              <a
                href="/CV.pdf"
                download
                className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition"
              >
                Short Resume
              </a>
              <a
                href="/CV_Uitgebreid.pdf"
                download
                className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition"
              >
                Full Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Topbar;
