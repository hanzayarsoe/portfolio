import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalWorkSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalWorkSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary/30 flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full glass-card border-none bg-white/80 dark:bg-background-dark/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">code</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Han Zayar Soe</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
          <a className="nav-link" href="#hero">Home</a>
          <a className="nav-link" href="#works">Works</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-primary/10 text-primary"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span className="material-symbols-outlined">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-4 shadow-lg absolute w-full z-40">
          <a className="nav-link font-medium" href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a className="nav-link font-medium" href="#works" onClick={() => setMobileMenuOpen(false)}>Works</a>
          <a className="nav-link font-medium" href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a className="nav-link font-medium" href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 lg:py-32 max-w-7xl mx-auto" id="hero">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Projects
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Hi, I am <span className="text-primary">Han Zayar Soe</span>, Flutter Developer.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Dedicated and adaptable Flutter Developer with a Bachelor of Computer Science (B.C.Sc) and a proven track record of designing and deploying cross-platform applications for Android and iOS. Award-winning university developer with solid professional experience utilizing Dart, Clean Architecture, and advanced state management (BLoC, Riverpod, Provider). Highly skilled in integrating REST APIs, Firebase, offline storage, and implementing mobile security best practices.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#experience" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
                  View My Work <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all">
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="relative z-10 w-full h-full rounded-3xl bg-cover bg-center shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="px-6 py-24 bg-slate-50 dark:bg-slate-900/50" id="experience">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Career Journey</h2>
                <h3 className="text-4xl font-bold">Work Experience</h3>
              </div>
              <p className="text-slate-500 max-w-xs">Building scalable mobile solutions with clean architecture and modern tools.</p>
            </div>
            <div className="grid gap-8">
              {/* Exp Card 1 */}
              <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="size-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">flutter_dash</span>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h4 className="text-2xl font-bold">Flutter Developer</h4>
                    <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold uppercase">Feb 2025 – Present</span>
                  </div>
                  <p className="text-primary font-semibold text-lg">Digital Base Company</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Develop and maintain high-performance mobile applications for Android and iOS using Flutter and Dart. Architect applications using Clean Architecture principles and scalable state management solutions including BLoC, Riverpod, and Provider. Integrate complex REST APIs, backend connectivity, and secure user authentication systems.
                  </p>
                </div>
              </div>
              {/* Exp Card 2 */}
              <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="size-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">terminal</span>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h4 className="text-2xl font-bold">Software Engineering Intern</h4>
                    <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold uppercase">3 Months</span>
                  </div>
                  <p className="text-primary font-semibold text-lg">Meta Team Myanmar Co., Ltd.</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Contributed to backend and database development using C#, optimizing data retrieval and storage. Delivered high-quality code, leading to an official full-time employment offer upon completion of the 3-month internship.
                  </p>
                </div>
              </div>
              {/* Exp Card 3 */}
              <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="size-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">build</span>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h4 className="text-2xl font-bold">Tech Instructor &amp; Hardware Tech</h4>
                    <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold uppercase">2017 – 2019</span>
                  </div>
                  <p className="text-primary font-semibold text-lg">Freelance &amp; Local Businesses</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Worked proactively during university gap years as a computer software instructor, smartphone repair technician, and print shop assistant. Developed strong problem-solving, hardware troubleshooting, and technical communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section (Carousel) */}
        <section className="py-24 overflow-hidden" id="works">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-6 mb-16">
              <h3 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Work</h3>
            </div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="overflow-hidden rounded-2xl w-full">
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Work Item 1 */}
                <div className="min-w-full p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center border-none">
                  <div className="w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60" 
                      alt="Myeiksagar Web" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Myeiksagar_web</h4>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 text-xs font-bold rounded-full">2024</span>
                      <span className="text-slate-500 font-medium text-lg">Web / Python</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      A dynamic web application built using Python to showcase resources, culture, or services related to Myeik. It features a responsive layout and robust backend integration optimized for seamless content delivery.
                    </p>
                  </div>
                </div>

                {/* Work Item 2 */}
                <div className="min-w-full p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center border-none">
                  <div className="w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 shrink-0 bg-[#FFD6A5]">
                    <img 
                      src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&auto=format&fit=crop&q=60" 
                      alt="HR System" 
                      className="w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-normal"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100">hr</h4>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 text-xs font-bold rounded-full">2025</span>
                      <span className="text-slate-500 font-medium text-lg">C++ System</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      An efficient human resources management system engineered in C++. It focuses on high-performance data structures and secure handling of personnel records for internal business administration.
                    </p>
                  </div>
                </div>

                {/* Work Item 3 */}
                <div className="min-w-full p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center border-none">
                  <div className="w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 shrink-0 bg-[#2C2B29] flex items-center justify-center p-8">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60" 
                      alt="Point Plus" 
                      className="w-full h-full object-cover rounded shadow-lg"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100">point_plus</h4>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 text-xs font-bold rounded-full">2025</span>
                      <span className="text-slate-500 font-medium text-lg">C++ Utility</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      A high-speed utility application designed for point-of-sale calculations or reward systems. Utilizing C++ enables extremely low latency processing for real-time transactions.
                    </p>
                  </div>
                </div>

                {/* Work Item 4 */}
                <div className="min-w-full p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center border-none">
                  <div className="w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 shrink-0 bg-[#FF6B6B] flex items-center justify-center">
                     <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60" 
                      alt="Merchant System" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100">merchant</h4>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 text-xs font-bold rounded-full">2025</span>
                      <span className="text-slate-500 font-medium text-lg">C++ Application</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      A robust back-office application built for inventory and merchant management. Leveraging C++, it effectively handles massive datasets and intricate business logic optimizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`size-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary w-8' 
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <footer className="px-6 pt-24 pb-12 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold tracking-tight">Let's build something <br /><span className="text-primary">extraordinary</span> together.</h3>
                <p className="text-slate-500 text-lg">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span>Hlaing Township, Yangon</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <span>+95-9668464462</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <span>hanzayarsoe404@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-primary">language</span>
                    <span>www.reallygreatsite.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-8">
                <div className="flex flex-wrap gap-6 justify-start lg:justify-end">
                  <a className="icon-hover transition-all text-slate-400 dark:text-slate-600 flex flex-col items-center gap-2 group" href="#">
                    <div className="size-14 rounded-full border-2 border-current flex items-center justify-center">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
                  </a>
                  <a className="icon-hover transition-all text-slate-400 dark:text-slate-600 flex flex-col items-center gap-2 group" href="#">
                    <div className="size-14 rounded-full border-2 border-current flex items-center justify-center">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
                  </a>
                  <a className="icon-hover transition-all text-slate-400 dark:text-slate-600 flex flex-col items-center gap-2 group" href="#">
                    <div className="size-14 rounded-full border-2 border-current flex items-center justify-center">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
                  </a>
                  <a className="icon-hover transition-all text-slate-400 dark:text-slate-600 flex flex-col items-center gap-2 group" href="#">
                    <div className="size-14 rounded-full border-2 border-current flex items-center justify-center">
                      <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
              <p>© 2024 Han Zayar Soe. All rights reserved.</p>
              <div className="flex gap-8">
                <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card rounded-t-2xl border-x-0 border-b-0">
        <div className="flex items-center justify-around py-4">
          <a className="flex flex-col items-center gap-1 text-primary" href="#hero">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold uppercase">Home</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400" href="#works">
            <span className="material-symbols-outlined">view_list</span>
            <span className="text-[10px] font-bold uppercase">Works</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400" href="#experience">
            <span className="material-symbols-outlined">work</span>
            <span className="text-[10px] font-bold uppercase">Experience</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400" href="#contact">
            <span className="material-symbols-outlined">alternate_email</span>
            <span className="text-[10px] font-bold uppercase">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
