import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  colorClass?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  colorClass = "bg-orange-600",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width }}
      className="overflow-hidden"
    >
      {/* Content pop-in */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Colored slide overlay */}
      <motion.div
        variants={{
          hidden: { x: 0 },
          visible: { x: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className={`${colorClass} absolute top-0 left-0 w-full h-full z-20`}
      />
    </div>
  );
};

export default Reveal;
