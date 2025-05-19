import Reveal from "../components/Reveal";

const experiences = [
  {
    company: "Waterschap Brabantse Delta",
    title: "Software Engineer",
    location: "Breda",
    period: "2024",
    description:
      "Developing a CI/CD solution for system updates in water authority infrastructure. Designing sustainable solutions and creating flow algorithms to efficiently manage sewage systems with a focus on energy optimization.",
    tech: ["NodeJS", "JSON", "Jenkins", "Gitlab", "Python", "Node-RED", "Docker", "industrial Pi"],
  },
  {
    company: "IHomer",
    title: "Software Engineer",
    location: "Etten-Leur",
    period: "2022 – 2023",
    description:
      "Working student contributing to an operator platform for charging station providers. Helping to develop a clear and functional platform where charging station operators can monitor all their available stations and transactions. Integrating OCPP (Open Charge Point Protocol) functionalities for clients.",
    tech: ["Vue", "Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "OCPP", "Git", "tailwind"],
  },
];

const Experience = () => {
  return (
    <section id="exp" className="min-h-screen px-10 py-20">
      <Reveal>
        <h2 className="text-7xl font-bold mb-16">
          Experience<span className="text-orange-600">.</span>
        </h2>
      </Reveal>

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <Reveal key={idx}>
            <div className="relative pb-10">
              <div className="flex justify-between flex-wrap gap-4 mb-1">
                <h3 className="text-white text-2xl font-semibold">{exp.company}</h3>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>

              <div className="flex justify-between flex-wrap gap-4 mb-3">
                <h4 className="text-orange-500 font-semibold">{exp.title}</h4>
                <span className="text-gray-500 text-sm">{exp.location}</span>
              </div>

              <p className="text-gray-300 mb-3 max-w-4xl">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Frosted divider line */}
              {idx < experiences.length - 1 && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 backdrop-blur-sm" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
