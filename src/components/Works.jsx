import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

export default function Works({ onSelectProject }) {
  const handleCardKeyDown = (event, project) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectProject(project);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative px-4 py-24 sm:px-6" id="works">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 skew-y-3 -z-10 origin-top-left transform scale-110"></div>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Featured Works
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg">
            Explore hand-picked projects that demonstrate robust architecture and cutting-edge technology.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectsData.map((project) => (
            <motion.div 
              variants={itemVariants}
              key={project.id} 
              className={`group relative glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/50 hover:shadow-primary/20 flex flex-col h-full ring-1 ring-slate-900/5 dark:ring-white/5 bg-white dark:bg-slate-900`}
              onClick={() => onSelectProject(project)}
              onKeyDown={(event) => handleCardKeyDown(event, project)}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
              data-project-card={project.id}
            >
              <div className={`relative flex aspect-[1/0.82] w-full items-center justify-center overflow-hidden p-3 ${project.color}`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 44vw, 92vw"
                  className="relative z-20 h-full w-full rounded-xl object-cover shadow-xl transition-transform duration-700 transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-30 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full size-12 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </div>
              <div className="flex grow flex-col p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.year}
                  </span>
                  <span className="text-slate-500 font-medium text-sm">
                    {project.tech}
                  </span>
                </div>
                <h4 className="mb-2 text-lg font-bold leading-snug transition-colors group-hover:text-primary sm:text-xl">
                  {project.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[6rem] flex-1 rounded-lg bg-primary px-3 py-2 text-center text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/30 sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[6rem] flex-1 rounded-lg border-2 border-slate-200 px-3 py-2 text-center text-xs font-bold text-slate-700 transition-all hover:border-primary hover:text-primary dark:border-slate-800 dark:text-slate-300 sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[6rem] flex-1 rounded-lg bg-[#01875F] px-3 py-2 text-center text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-[#01875F]/30 sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Play Store
                    </a>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[6rem] flex-1 rounded-lg border-2 border-slate-900 bg-slate-900 px-3 py-2 text-center text-xs font-bold text-white transition-all hover:shadow-lg dark:bg-white dark:text-slate-900 sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      App Store
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
