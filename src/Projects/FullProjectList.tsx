import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/FullProjects";

// Sidebar component
const ProjectSidebar = ({
  currentSection,
  onNavigate,
}: {
  currentSection: string | null;
  onNavigate: (id: string) => void;
}) => (
  <aside className="fixed top-0 left-0 h-full w-40 bg-black/60 backdrop-blur-md border-r border-gray-800 z-40 flex flex-col justify-between">
    <div className="p-4">
      <div className="mb-8 text-orange-500 font-bold text-xl">Projects</div>
      <nav className="space-y-4">
        {projects.map((proj) => (
          <button
            key={proj.id}
            onClick={() => onNavigate(proj.id)}
            className={`block text-left w-full px-3 py-1 rounded transition-all ${
              currentSection === proj.id
                ? "bg-orange-500 text-white"
                : "text-gray-400 hover:text-orange-400"
            }`}
          >
            {proj.name}
          </button>
        ))}
      </nav>
    </div>
    <div className="p-4">
      <a
        href="/#projects"
        className="text-gray-500 hover:text-orange-400 text-sm underline"
      >
        ← Back to main
      </a>
    </div>
  </aside>
);

const FullProjectsList = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Handle scrolling to a section
  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Observe which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setCurrentSection(id);
            }
          }
        }
      },
      { threshold: 0.4 }
    );

    projects.forEach((project) => {
      const section = sectionRefs.current[project.id];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex">
      <ProjectSidebar
        currentSection={currentSection}
        onNavigate={scrollToSection}
      />

      <main className="ml-40 flex-1 space-y-32 py-10 px-6">
        {projects.map((project) => (
          <section
            key={project.id}
            id={project.id}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[project.id] = el;
            }}
            className="min-h-screen border-b border-gray-700 pb-16 cursor-pointer"
            onClick={() => setExpandedId((prev) => (prev === project.id ? null : project.id))}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {project.name}
            </motion.h2>
            <div className="text-center text-gray-400">
              <p>Click to expand project details...</p>
            </div>

            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  className="mt-8 relative bg-[#1c1c1c] rounded-lg p-6 text-white shadow-xl overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.media && (
                    <div className="absolute inset-0 opacity-10 z-0">
                      {project.media.type === "video" ? (
                        <video
                          src={project.media.src}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={project.media.src}
                          alt="project media"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}

                  <div className="relative z-10">
                    <p className="mb-4 text-gray-300">{project.description}</p>

                    {project.gallery && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {project.gallery.map((imgSrc, idx) => (
                          <img
                            key={idx}
                            src={imgSrc}
                            alt={`project-media-${idx}`}
                            className="rounded-md shadow-md object-cover w-full h-48"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </main>
    </div>
  );
};

export default FullProjectsList;
