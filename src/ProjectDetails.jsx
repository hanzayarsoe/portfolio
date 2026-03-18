import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectDetails({
  project,
  onBack,
  darkMode,
  setDarkMode,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onBack();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onBack]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
        onClick={onBack}
      />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 z-70 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        aria-describedby={`project-overview-${project.id}`}
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
          {/* Modal header */}
          <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="sticky top-0 z-80 flex w-full items-center justify-between glass-card border-none bg-white/90 px-4 py-4 dark:bg-background-dark/90 sm:px-6"
          >
            <motion.button
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              <span className="material-symbols-outlined">close</span>
              Close
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full hover:bg-primary/10 text-primary"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={darkMode}
            >
              <span className="material-symbols-outlined">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </motion.button>
          </motion.header>

          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
            {/* Banner Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className={`relative mb-10 w-full overflow-hidden rounded-[2rem] shadow-2xl aspect-video md:mb-16 md:aspect-21/9 md:rounded-4xl ${project.color}`}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 mix-blend-multiply"></div>
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover relative z-0 opacity-90 transition-transform duration-1000 hover:scale-105 hover:opacity-100"
              />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                className="absolute bottom-4 left-4 right-4 z-20 flex flex-col justify-between gap-4 text-white sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 md:flex-row md:items-end md:gap-6"
              >
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <span className="px-4 py-1 bg-primary/90 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {project.year}
                    </span>
                    <span className="bg-black/30 px-3 py-1 text-sm font-bold tracking-wide text-white/90 backdrop-blur-sm rounded-full sm:text-lg">
                      {project.tech}
                    </span>
                  </div>
                  <h1
                    className="text-3xl font-black tracking-tight drop-shadow-lg sm:text-4xl md:text-6xl lg:text-7xl"
                    id={`project-title-${project.id}`}
                  >
                    {project.title}
                  </h1>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:min-w-70 md:p-6"
                >
                  <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-2">
                    Role
                  </h3>
                  <p className="font-bold text-xl drop-shadow-md">
                    {project.details.role}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid lg:grid-cols-2 gap-12 lg:gap-20"
            >
              <div className="space-y-8">
                <motion.div variants={fadeUp}>
                  <h2 className="mb-6 text-3xl font-black tracking-tight">
                    Overview
                  </h2>
                  <p
                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl"
                    id={`project-overview-${project.id}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pulse flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/30 md:flex-none md:px-8"
                      >
                        <span className="material-symbols-outlined">
                          open_in_new
                        </span>
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-slate-200 px-6 py-3 font-bold text-slate-700 transition-all hover:border-primary hover:text-primary dark:border-slate-800 dark:text-slate-300 md:flex-none md:px-8"
                      >
                        <span className="material-symbols-outlined">code</span>
                        GitHub
                      </motion.a>
                    )}
                    {project.playStoreUrl && (
                      <motion.a
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#01875F] px-6 py-3 font-bold text-white transition-all hover:shadow-lg hover:shadow-[#01875F]/30 md:flex-none md:px-8"
                      >
                        <span className="material-symbols-outlined">
                          android
                        </span>
                        Play Store
                      </motion.a>
                    )}
                    {project.appStoreUrl && (
                      <motion.a
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-slate-900 bg-slate-900 px-6 py-3 font-bold text-white transition-all hover:shadow-lg dark:border-white dark:bg-white dark:text-slate-900 md:flex-none md:px-8"
                      >
                        <span className="material-symbols-outlined">
                          phone_iphone
                        </span>
                        App Store
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ scale: 1.01 }}
                  className="glass-card group relative overflow-hidden rounded-3xl p-6 sm:p-8"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl">
                      lightbulb
                    </span>
                    Business Logic
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 relative z-10">
                    {project.details.businessLogic}
                  </p>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  variants={fadeUp}
                  whileHover={{ scale: 1.01 }}
                  className="glass-card rounded-3xl bg-slate-50 p-6 dark:bg-slate-900/40 sm:p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="material-symbols-outlined text-primary">
                      architecture
                    </span>
                    Architecture
                  </h3>
                  <p className="text-xl font-bold text-primary">
                    {project.details.architecture}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="glass-card p-8 rounded-3xl"
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl">
                      extension
                    </span>
                    Core Packages
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.details.packages.map((pkg, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.5 + i * 0.08,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-5 py-3 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-xl font-mono text-sm font-bold shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all cursor-default flex items-center gap-2"
                      >
                        <span className="size-2 rounded-full bg-primary/50"></span>
                        {pkg}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </main>
        </div>
      </motion.div>
    </>
  );
}
