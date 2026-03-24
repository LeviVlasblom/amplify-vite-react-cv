import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects, FullProject, GalleryItem } from "@/data/FullProjects";

// ─── Lightbox ──────────────────────────────────────────────────────────────────

const Lightbox = ({
  items,
  startIndex,
  onClose,
}: {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setCurrent((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length, onClose]);

  const item = items[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl z-10"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      {items.length > 1 && (
        <>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-2xl z-10 bg-black/40 p-3 rounded-full"
            onClick={(e) => { e.stopPropagation(); setCurrent((i) => (i - 1 + items.length) % items.length); }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-2xl z-10 bg-black/40 p-3 rounded-full"
            onClick={(e) => { e.stopPropagation(); setCurrent((i) => (i + 1) % items.length); }}
          >
            <FaChevronRight />
          </button>
        </>
      )}

      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-w-5xl max-h-[85vh] w-full px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded-xl object-contain"
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            className="w-full max-h-[80vh] rounded-xl object-contain"
          />
        )}
        {item.caption && (
          <p className="text-center text-gray-400 text-sm mt-3">{item.caption}</p>
        )}
      </motion.div>

      {items.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-gray-600"}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// ─── Project Modal ─────────────────────────────────────────────────────────────

const ProjectModal = ({
  project,
  onClose,
}: {
  project: FullProject;
  onClose: () => void;
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && lightboxIndex === null) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fixed inset-x-4 inset-y-4 md:inset-x-10 md:inset-y-6 z-[70] bg-[#141414] rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-56 md:h-72 shrink-0 overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-gray-300 hover:text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors border border-white/10"
          >
            <FaTimes />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-5 left-6">
            <p className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-1">
              {project.tech.slice(0, 3).join(" · ")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{project.name}</h2>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-10">

          {/* Description + tech */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-mono">Over dit project</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-mono">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-mono">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setLightboxIndex(i)}
                    className="relative group rounded-xl overflow-hidden cursor-pointer aspect-video bg-gray-900"
                  >
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                        onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl" />
                    </div>

                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform">
                        <p className="text-white text-xs">{item.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Footer links */}
          <div className="flex gap-4 pb-2">
            <a
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              <FaGithub /> GitHub
            </a>
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                <FaExternalLinkAlt className="text-xs" /> Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && project.gallery && (
          <Lightbox
            items={project.gallery}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Sidebar ───────────────────────────────────────────────────────────────────

const Sidebar = ({
  active,
  onNavigate,
}: {
  active: string | null;
  onNavigate: (id: string) => void;
}) => (
  <aside className="fixed top-0 left-0 h-full w-44 bg-black/70 backdrop-blur-md border-r border-white/5 z-50 flex flex-col justify-between py-10 px-5">
    <div>
      <p className="text-orange-500 font-bold mb-10 tracking-widest uppercase text-xs">
        Projects
      </p>
      <nav className="space-y-6">
        {projects.map((proj, i) => (
          <button
            key={proj.id}
            onClick={() => onNavigate(proj.id)}
            className="flex items-center gap-3 w-full group text-left"
          >
            <motion.div
              animate={{
                width: active === proj.id ? 24 : 8,
                backgroundColor: active === proj.id ? "#f97316" : "#4b5563",
              }}
              transition={{ duration: 0.3 }}
              className="h-[2px] rounded-full shrink-0"
            />
            <span className={`text-sm transition-colors duration-200 ${active === proj.id ? "text-orange-400 font-semibold" : "text-gray-500 group-hover:text-gray-300"}`}>
              {String(i + 1).padStart(2, "0")} {proj.name}
            </span>
          </button>
        ))}
      </nav>
    </div>
    <a href="/#projects" className="flex items-center gap-2 text-gray-500 hover:text-orange-400 text-sm transition-colors">
      <FaArrowLeft className="text-xs" />
      Terug
    </a>
  </aside>
);

// ─── Project section ───────────────────────────────────────────────────────────

const ProjectSection = ({
  project,
  index,
  onVisible,
  onOpen,
}: {
  project: FullProject;
  index: number;
  onVisible: (id: string) => void;
  onOpen: (project: FullProject) => void;
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", once: false });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  useEffect(() => { if (isInView) onVisible(project.id); }, [isInView]);

  const cv = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1, x: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const isEven = index % 2 === 0;

  return (
    <section
      id={project.id}
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden border-b border-white/5"
    >
      <span className={`absolute inset-0 flex items-center text-[30vw] font-bold text-white/[0.02] select-none pointer-events-none leading-none z-0 ${isEven ? "justify-center left-80" : "justify-center right-80"}`}>
        {index + 1}
      </span>

      <div className={`relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Image panel — klikbaar */}
        <div
          className={`relative overflow-hidden cursor-pointer group ${isEven ? "order-1" : "order-1 lg:order-2"}`}
          onClick={() => onOpen(project)}
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
            <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <div className={`absolute inset-0 ${isEven ? "bg-gradient-to-r from-transparent via-transparent to-[#111111]" : "bg-gradient-to-l from-transparent via-transparent to-[#111111]"}`} />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-black/60 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
              Bekijk details
            </span>
          </div>

          <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1">
            <span className="text-orange-500 font-mono text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Content panel */}
        <div className={`flex flex-col justify-center px-10 lg:px-16 py-20 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
          <motion.p custom={0} variants={cv} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-4">
            Project {String(index + 1).padStart(2, "0")}
          </motion.p>

          <motion.h2 custom={1} variants={cv} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.name}
          </motion.h2>

          <motion.p custom={2} variants={cv} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="text-gray-400 leading-relaxed mb-8 max-w-md text-base line-clamp-4">
            {project.description}
          </motion.p>

          <motion.div custom={3} variants={cv} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((tag) => (
              <span key={tag} className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-mono">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div custom={4} variants={cv} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="flex gap-3 flex-wrap">
            <button
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              Bekijk project →
            </button>
            <a href={project.github} target="_blank"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all">
              <FaGithub /> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const FullProjectsList = () => {
  const [activeId, setActiveId] = useState<string | null>(projects[0]?.id ?? null);
  const [openProject, setOpenProject] = useState<FullProject | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#111111] min-h-screen text-white">
      <Sidebar active={activeId} onNavigate={scrollToSection} />

      <main className="ml-44">
        {projects.map((project, idx) => (
          <ProjectSection
            key={project.id}
            project={project}
            index={idx}
            onVisible={setActiveId}
            onOpen={setOpenProject}
          />
        ))}
      </main>

      <AnimatePresence>
        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullProjectsList;
