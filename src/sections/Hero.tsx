import Reveal from "../components/Reveal";

const Hero = () => {
  return (
    <section
      className="h-screen flex justify-center items-center px-4 md:px-10"
      id="home"
    >
      <div className="max-w-3xl w-full text-left">
        <Reveal>
          <h1 className="text-5xl md:text-8xl font-bold mb-4">
            Hey, I'm <span className="text-orange-500">Levi Vlasblom</span>.
          </h1>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">
            I'm a Software Engineer
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-xl text-gray-400 mb-8">
            I’m a software engineer with 2 years of experience building full-stack
            applications and scalable cloud systems. My work spans front-end frameworks like React and Angular
            to cloud platforms such as AWS and Azure.
            I’m also fluent in Python, C/C++, C#, and Java — with hands-on experience in game development.
            In my free time, I work on personal code projects and share motorcycle content on YouTube.
            Let's connect!
          </p>
        </Reveal>

        <Reveal>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium"
          >
            Contact me
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
