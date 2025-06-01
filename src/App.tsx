import { Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import FullProjectsList from "./Projects/FullProjectList";

const MainLayout = () => (
  <div className="relative z-10 text-white min-h-screen font-sans flex overflow-hidden">
    <Sidebar />
    <div className="flex-1 ml-16">
      <Topbar />
      <main className="ml-16 flex-1 scroll-smooth relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/full" element={<FullProjectsList />} />
      </Routes>
    </>
  );
};

export default App;
