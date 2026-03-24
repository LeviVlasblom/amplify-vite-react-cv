import Reveal from "../components/Reveal";
import { FaCheckCircle, FaLaptopCode } from "react-icons/fa";

const workSkills = [
  "JavaScript", "TypeScript", "HTML", "CSS", "React", "Redux",
  "NodeJS", "Express", "Postgres", "MongoDB", "GitHub", "Jira", "AWS", 
  "Docker", "Kubernetes", "C++", "C#", "Java", "Spring Boot", "Azure",
];

const funSkills = [
  "Rust", "Tailwind", "Java", "Spring", "Figma", "Whimsical",
  "GraphQL", "Python", "FastAPI", "Flask", "Unity", "Unreal Engine", "GameMaker Studio",
  "Arduino", "Raspberry Pi", "ESP32", "MQTT", "WebRTC", "WebSockets",
  "WebGL", "OpenGL", "DirectX", "Game Development", "Embedded Systems",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-between items-start gap-10 px-10 py-20"
    >
      {/* Left side: Introduction */}
      <div className="md:w-1/2 space-y-6">
        <Reveal>
          <h2 className="text-7xl font-bold mb-4">
            About<span className="text-orange-600">.</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-300 leading-relaxed text-2xl">
            <span className="inline-block font-bold text-black bg-white px-2 py-1 mr-2 text-xl rounded">H</span>
            é! Ik ben Levi, een software engineer met een achtergrond in Computer Engineering van Avans Hogeschool in Breda.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed text-xl">
            Ik houd van full-stack development en werk graag met een brede set aan technologieën — van <strong>React</strong> en <strong>Node.js</strong> tot <strong>C++</strong>, <strong>C#</strong> en <strong>Java</strong>. Ik word vooral aangetrokken door projecten rondom embedded systems,
            edge computing, IoT en game development. Als het grenzen verlegt, ben ik geïnteresseerd.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed text-xl">
            Het grootste deel van mijn vrije tijd besteed ik aan nieuwe zijprojecten die de grenzen van code verleggen — of het nu gaat om interactieve ervaringen bouwen of experimenteren met systeemintegraties.
            Als ik niet aan het programmeren ben, vind je mij waarschijnlijk op de motor, in de sportschool, op reis, of bij vrienden met een drankje.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed text-xl">
            Ik sta altijd open voor interessante kansen die creativiteit, uitdaging en impact combineren. Als jij aan iets betekenisvols werkt, laten we dan connecten!
          </p>
        </Reveal>
      </div>

      {/* Right side: Skills */}
      <div className="md:w-1/2 space-y-8">
        <Reveal>
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg mb-3">
              <FaLaptopCode /> Gebruik op het werk
            </div>
            <div className="flex flex-wrap gap-2">
              {workSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg mb-3">
              <FaCheckCircle /> Gebruik voor plezier
            </div>
            <div className="flex flex-wrap gap-2">
              {funSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
