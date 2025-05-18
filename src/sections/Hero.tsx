import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-10" id="home">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hey, I'm <span className="text-orange-500">Levi Vlasblom</span>.
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a Software Engineer
      </motion.h2>
      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I’m a software engineer with 2 years of experience building full-stack applications and scalable cloud systems. My work spans front-end frameworks like React and Angular to cloud platforms such as AWS and Azure. 
        I’m also fluent in Python, C/C++, C#, and Java — with hands-on experience in game development. In my free time, I work on personal code projects and share motorcycle content on YouTube.
         Let's connect!
      </motion.p>
      <motion.button
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact me
      </motion.button>
    </section>
  );
};

export default Hero;