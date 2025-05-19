import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans flex">
      <Sidebar />
      <div className="flex-1 ml-16">
        <Topbar />
      <main className="ml-16 flex-1 scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      </div>
    </div>
  );
};

export default App;