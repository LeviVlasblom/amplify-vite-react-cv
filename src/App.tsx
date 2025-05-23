import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <>
      {/* Blurred animated background (behind everything) */}
      {/* <AnimatedBackground /> */}

      {/* Main layout container */}
      <div className="relative z-10 text-white min-h-screen font-sans flex overflow-hidden">
        {/* Fixed left sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 ml-16">
          {/* Topbar with resume button */}
          <Topbar />

          {/* Content sections */}
          <main className="ml-16 flex-1 scroll-smooth relative z-10">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
