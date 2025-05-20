// components/AnimatedDNA.tsx
import { Player } from "@lottiefiles/react-lottie-player";

const AnimatedDNA = () => {
  return (
    <div className="fixed inset-0 -z-10 flex justify-center items-center pointer-events-none opacity-30">
      <Player
        autoplay
        loop
        src="/dna-animation.json" // place your Lottie JSON here
        style={{ height: "80vh", width: "80vw" }}
        speed={0.5}
      />
    </div>
  );
};

export default AnimatedDNA;
