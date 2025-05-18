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
            ey! I'm Levi, a software engineer with a background in Computer Engineering from Avans University in Breda.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed text-xl">
            I like full-stack development and love working across a wide range of technologies — from <strong>React</strong> and <strong>Node.js</strong> to <strong>C++</strong>, <strong>C#</strong>, and <strong>Java</strong>. I’m especially drawn to projects involving embedded systems, 
            edge computing, IoT, and game development. If it pushes boundaries, I’m interested.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed text-xl">
            Most of my free time is spent exploring new side projects that stretch what code can do — whether it’s building interactive experiences or experimenting with system integrations. 
            When I’m not coding, you’ll probably find me riding motorcycles, lifting at the gym, traveling, or catching up with friends over a drink.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 leading-relaxed text-xl">
            I’m always open to exciting opportunities that blend creativity, challenge, and impact. If you’re working on something meaningful, let’s connect!
          </p>
        </Reveal>
      </div>

      {/* Right side: Skills */}
      <div className="md:w-1/2 space-y-8">
        <Reveal>
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg mb-3">
              <FaLaptopCode /> Use at work
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
              <FaCheckCircle /> Use for fun
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
