import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Works from "./components/Works";
import { projectsData } from "./data/projects";
import "./styles.css";

const getProjectIdFromLocation = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(() =>
    getProjectIdFromLocation()
  );
  const lastOpenedProjectIdRef = useRef(null);
  const lastScrollYRef = useRef(0);

  const selectedProject =
    projectsData.find((project) => project.id === activeProjectId) ?? null;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveProjectId(getProjectIdFromLocation());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (activeProjectId) {
      window.history.replaceState({}, "", "/");
      setActiveProjectId(null);
      return;
    }

    if (!lastOpenedProjectIdRef.current && lastScrollYRef.current === 0) {
      return;
    }

    const restoreFocus = () => {
      window.scrollTo({ top: lastScrollYRef.current, behavior: "auto" });

      const card = document.querySelector(
        `[data-project-card="${lastOpenedProjectIdRef.current}"]`
      );

      if (!(card instanceof HTMLElement)) {
        return;
      }

      card.focus({ preventScroll: true });
    };

    const frameId = window.requestAnimationFrame(restoreFocus);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [activeProjectId, selectedProject]);

  const handleSelectProject = useCallback((project) => {
    lastOpenedProjectIdRef.current = project.id;
    lastScrollYRef.current = window.scrollY;
    window.history.pushState(
      { fromPortfolio: true, projectId: project.id },
      "",
      `/projects/${project.id}`
    );
    setActiveProjectId(project.id);
  }, []);

  const handleBack = useCallback(() => {
    if (window.history.state?.fromPortfolio) {
      window.history.back();
      return;
    }

    window.history.replaceState({}, "", "/");
    setActiveProjectId(null);
  }, []);

  // Contact section animation variants
  const contactContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary/30 flex flex-col">
      {selectedProject ? (
        <ProjectDetails
          key={selectedProject.id}
          project={selectedProject}
          onBack={handleBack}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      ) : (
        <>
          {/* Navigation Header */}
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="sticky top-0 z-50 w-full glass-card border-none bg-white/80 dark:bg-background-dark/80 px-4 py-4 sm:px-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="size-10 rounded-full bg-primary flex items-center justify-center text-white"
              >
                <span className="material-symbols-outlined">code</span>
              </motion.div>
              <span className="max-w-36 text-base font-bold tracking-tight sm:max-w-none sm:text-xl">
                Han Zayar Soe
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
              <a className="nav-link" href="#hero">
                Home
              </a>
              <a className="nav-link" href="#experience">
                Experience
              </a>
              <a className="nav-link" href="#works">
                Works
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-4">
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
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <span className="material-symbols-outlined">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </motion.header>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-x-0 top-[4.5rem] z-40 mx-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-background-dark md:hidden sm:mx-6"
                id="mobile-navigation"
              >
                <div className="flex flex-col gap-4 p-4">
                  {[
                    { href: "#hero", label: "Home" },
                    { href: "#experience", label: "Experience" },
                    { href: "#works", label: "Works" },
                    { href: "#contact", label: "Contact" },
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className="nav-link font-medium"
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <main className="grow pb-28 md:pb-0">
            <Hero />
            <Experience />
            <Works onSelectProject={handleSelectProject} />

            <footer
              className="border-t border-slate-200 bg-background-light px-4 pt-24 pb-12 dark:border-slate-800 dark:bg-background-dark section-glow sm:px-6"
              id="contact"
            >
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={contactContainerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid lg:grid-cols-2 gap-16 mb-20"
                >
                  <div className="space-y-8">
                    <motion.h3
                      variants={contactItemVariants}
                      className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                      Let's build something <br />
                      <span className="gradient-text">extraordinary</span> together.
                    </motion.h3>
                    <motion.p
                      variants={contactItemVariants}
                      className="text-slate-500 text-lg"
                    >
                      I'm always open to discussing new projects, creative ideas or
                      opportunities to be part of your visions.
                    </motion.p>
                    <motion.div
                      variants={contactContainerVariants}
                      className="space-y-4"
                    >
                      {[
                        { icon: "location_on", text: "Hlaing Township, Yangon" },
                        { icon: "call", text: "+95-9668464462" },
                        { icon: "mail", text: "hanzayarsoe404@gmail.com" },
                        { icon: "language", text: "www.hanzayarsoe.com" },
                      ].map((item) => (
                        <motion.div
                          key={item.icon}
                          variants={contactItemVariants}
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-4 text-slate-600 dark:text-slate-400 cursor-default"
                        >
                          <span className="material-symbols-outlined text-primary">
                            {item.icon}
                          </span>
                          <span className="break-all sm:break-normal">{item.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div
                    variants={contactItemVariants}
                    className="flex flex-col justify-end gap-8"
                  >
                    <motion.div
                      variants={contactContainerVariants}
                      className="flex flex-wrap gap-6 justify-start lg:justify-end"
                    >
                      {[
                        {
                          href: "https://www.facebook.com/hanzayarsoe.com.17/",
                          label: "Facebook",
                          svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                        },
                        {
                          href: "viber://chat?number=%2B959752778925",
                          label: "Viber",
                          svg: "M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z",
                        },
                        {
                          href: "https://t.me/godlietome",
                          label: "Telegram",
                          svg: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                        },
                      ].map((social) => (
                        <motion.a
                          key={social.label}
                          variants={socialIconVariants}
                          whileHover={{ scale: 1.15, y: -4 }}
                          whileTap={{ scale: 0.9 }}
                          className="icon-hover transition-all text-slate-400 dark:text-slate-600 flex flex-col items-center gap-2 group"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <div className="size-14 rounded-full border-2 border-current flex items-center justify-center">
                            <svg
                              className="size-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d={social.svg}></path>
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                            {social.label}
                          </span>
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-12 text-center text-sm text-slate-400 dark:border-slate-800 md:flex-row md:text-left"
                >
                  <p>© 2024 Han Zayar Soe. All rights reserved.</p>
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:justify-end">
                    <a className="hover:text-primary transition-colors" href="#">
                      Privacy Policy
                    </a>
                    <a className="hover:text-primary transition-colors" href="#">
                      Terms of Service
                    </a>
                  </div>
                </motion.div>
              </div>
            </footer>
          </main>

          <AnimatePresence>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-50 glass-card rounded-t-2xl border-x-0 border-b-0 md:hidden"
            >
              <div className="flex items-center justify-around px-2 py-4 [padding-bottom:calc(env(safe-area-inset-bottom)+1rem)]">
                <a
                  className="flex flex-col items-center gap-1 text-primary"
                  href="#hero"
                >
                  <span className="material-symbols-outlined">home</span>
                  <span className="text-[10px] font-bold uppercase">Home</span>
                </a>
                <a
                  className="flex flex-col items-center gap-1 text-slate-400"
                  href="#experience"
                >
                  <span className="material-symbols-outlined">work</span>
                  <span className="text-[10px] font-bold uppercase">Experience</span>
                </a>
                <a
                  className="flex flex-col items-center gap-1 text-slate-400"
                  href="#works"
                >
                  <span className="material-symbols-outlined">view_list</span>
                  <span className="text-[10px] font-bold uppercase">Works</span>
                </a>
                <a
                  className="flex flex-col items-center gap-1 text-slate-400"
                  href="#contact"
                >
                  <span className="material-symbols-outlined">alternate_email</span>
                  <span className="text-[10px] font-bold uppercase">Contact</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
