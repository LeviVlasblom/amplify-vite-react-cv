import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Dramatic scroll transforms
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background grid pattern (moves fast) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute w-[250vw] h-[250vh] text-gray-700 opacity-[0.05] rotate-45"
        style={{ top: "-50vh", left: "-50vw", y: yFast, rotate }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>

      {/* Orange blurred blob (moves slower) */}
      <motion.div
        className="absolute w-[70vw] h-[70vw] bg-orange-600 rounded-full blur-[100px] opacity-30"
        style={{ top: "30vh", left: "15vw", y: ySlow }}
        />

        <motion.div
        className="absolute w-[100vw] h-[100vw] bg-gray-900 rounded-full blur-[140px] opacity-10"
        style={{ top: "-10vh", left: "-20vw", y: yFast }}
        />
        {/* Background grid pattern (moves slow) */}   
        <motion.svg
            viewBox="0 0 200 200"
            className="absolute w-[250vw] h-[250vh] text-gray-700 opacity-[0.05] rotate-45"
            style={{ top: "-50vh", left: "-50vw", y: ySlow, rotate }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <defs>  
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>
    </div>
  );
};

export default AnimatedBackground;
