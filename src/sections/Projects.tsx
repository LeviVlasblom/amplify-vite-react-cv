import Reveal from "../components/Reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import smixImage from "../assets/images/smix.jpeg";
import heatnetImage from "../assets/images/heatnet.png";
import exoImage from "../assets/images/exo.png";
import battleshipsImage from "../assets/images/battleships.png";



const projects = [
  {
    title: "SMIX",
    tech: ["Raspberry Pi", "Python", "Tkinter", "NumPy", "3D Printing"],
    description:
      "Een touchscreen-aangedreven cocktailmixmachine met een Raspberry Pi 4, Python UI en 3D-geprinte peristaltische pompen voor nauwkeurig dranken serveren.",
    image: smixImage,
    github: "https://github.com/LeviVlasblom/SmartBartenderSMIX",
    demo: "#",
  },
  {
    title: "HeatNet",
    tech: ["Arduino", "Zigbee", "AWS IoT", "Vue", "TypeScript", "MQTT", "tailwind", "e2c", "lambda"],
    description:
      "Een IoT-thuissysteem met Zigbee-Arduino-sensoren om kamertemperaturen te monitoren en te optimaliseren via AWS en een Vue-dashboard.",
    image: heatnetImage,
    github: "https://github.com/LeviVlasblom/HeatNet",
    demo: "#",
  },
  {
    title: "Voice Assistant EXO",
    tech: ["C#", "Speech Recognition", "Windows API"],
    description:
      "Een spraakassistent voor developers die op Windows draait en systeemopdrachten, webzoekopdrachten en app-starts uitvoert via natuurlijke spraakinvoer.",
    image: exoImage,
    github: "https://github.com/LeviVlasblom/VoiceAssistantEXO",
    demo: "#",
  },
  {
    title: "BattleShips",
    tech: ["C#", "Networking", "3D Graphics", "vector math"],
    description:
      "Een multiplayer 3D Battleships-spel met een lobby, IP-gebaseerde matchmaking, in-game chat en een-op-een zeegevechten met vrienden.",
    image: battleshipsImage,
    github: "https://github.com/Kstrik/CSharp-Eindopdracht-Periode-5",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-10 py-20">
      <Reveal>
        <h2 className="text-7xl font-bold mb-2">
          Projects<span className="text-orange-600">.</span>
        </h2>
      </Reveal>

      <Reveal>
        <div className="mb-10">
          <a
            href="/projects/full"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:underline group transition"
          >
            Bekijk alle projecten{" "}
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </Reveal>

      {/* Grid of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj) => (
          <Reveal key={proj.title}>
            <div className="bg-[#1c1c1c] p-5 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
                <div className="flex flex-wrap gap-2 my-2">
                  {proj.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 px-2 py-1 rounded text-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-3">{proj.description}</p>
                <div className="flex gap-4 text-lg text-gray-400">
                  <a href={proj.github} target="_blank" className="hover:text-white">
                    <FaGithub />
                  </a>
                  <a href={proj.demo} target="_blank" className="hover:text-white">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
