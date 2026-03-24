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
            Hé, I'm <span className="text-orange-500">Levi Vlasblom</span>.
          </h1>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">
            I'm a Software Engineer
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-xl text-gray-400 mb-8">
            Met meerdere ervaring in het bouwen van full-stack
            applicaties en schaalbare cloudsystemen. Mijn werk loopt van front-end frameworks zoals React en Angular
            tot cloudplatformen als AWS en Azure.
            Ik ben ook thuis in Python, C/C++, C# en Java — met praktische ervaring in game development.
            In mijn vrije tijd werk ik aan persoonlijke projecten en deel ik motorinhoud op YouTube.
            Laten we connecten!
          </p>
        </Reveal>

        <Reveal>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium"
          >
            Neem contact op
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
