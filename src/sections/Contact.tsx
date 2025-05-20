import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Reveal from "../components/Reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-10 py-20 flex flex-col justify-center items-center"
    >
      {/* Centered inner content */}
      <div className="w-full max-w-xl flex flex-col items-center text-center space-y-8">
        <Reveal>
          <h2 className="text-7xl font-bold ">
            Contact<span className="text-orange-600">. </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 text-lg leading-relaxed">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <a
              href="https://linkedin.com/in/levivlasblom"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://x.com/EpsilonLevi"
              target="_blank"
              className="text-orange-500 hover:underline"
            >
              Twitter
            </a>{" "}
            if that’s more your speed.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:levivlasblom@hotmail.com"
              className="inline-flex items-center gap-3 bg-[#3c2f30] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition text-base"
            >
              <FaEnvelope className="text-lg" />
              levivlasblom@hotmail.com
            </a>

            <div className="flex gap-6 text-2xl text-gray-400">
              <a href="https://github.com/LeviVlasblom" target="_blank" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/levi-vlasblom-a41465195/" target="_blank" className="hover:text-white">
                <FaLinkedin />
              </a>
              <a href="https://x.com/EpsilonLevi" target="_blank" className="hover:text-white">
                <FaX />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
