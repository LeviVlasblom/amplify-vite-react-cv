import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans flex">
      <Sidebar />
      <main className="ml-16 flex-1 scroll-smooth">
        <Hero />
        <section id="about" className="h-screen">About</section>
        <section id="projects" className="h-screen">Projects</section>
        <section id="exp" className="h-screen">Experience</section>
        <section id="contact" className="h-screen">Contact</section>
      </main>
    </div>
  );
};

export default App;