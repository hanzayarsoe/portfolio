import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectDetails({
  project,
  onBack,
  darkMode,
  setDarkMode,
}) {
  useEffect(() => {
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100"
    >
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="sticky top-0 z-50 flex w-full items-center justify-between glass-card border-none bg-white/90 px-4 py-4 dark:bg-background-dark/90 sm:px-6"
      >
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          aria-label="Go back to portfolio"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
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
              className={`relative mx-auto mb-10 w-full max-w-[40rem] overflow-hidden rounded-[2rem] shadow-2xl aspect-square md:mb-16 md:rounded-4xl ${project.color}`}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 mix-blend-multiply"></div>
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={project.image}
                alt={project.title}
                loading="eager"
                decoding="async"
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="relative z-0 h-full w-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105 hover:opacity-100"
              />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                className="absolute bottom-8 left-8 right-8 z-20 hidden flex-col justify-between gap-6 text-white md:flex md:flex-row md:items-end"
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mb-10 space-y-5 md:hidden"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-4 py-1 text-sm font-bold uppercase tracking-wider text-white shadow-lg">
                  {project.year}
                </span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold tracking-wide text-white dark:bg-slate-100 dark:text-slate-900">
                  {project.tech}
                </span>
              </div>
              <h1
                className="text-3xl font-black tracking-tight sm:text-4xl"
                id={`project-title-${project.id}`}
              >
                {project.title}
              </h1>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Role
                </h3>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {project.details.role}
                </p>
              </div>
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
                  className="glass-card rounded-3xl p-6 sm:p-8"
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
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold transition-all cursor-default hover:border-primary hover:text-primary hover:shadow-md dark:border-slate-700 dark:bg-background-dark font-mono"
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
    </motion.div>
  );
}
