import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-32"
      id="hero"
    >
      {/* Floating decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 size-3 rounded-full bg-primary/20 floating-particle" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 right-20 size-2 rounded-full bg-primary/30 floating-particle" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/4 size-4 rounded-full bg-primary/10 floating-particle-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 size-2 rounded-full bg-primary/20 floating-particle" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-20 right-10 size-3 rounded-full bg-primary/15 floating-particle-slow" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 space-y-8 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Projects
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          >
            Hi, I am <span className="gradient-text">Han Zayar Soe</span>,
            Flutter Developer.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            Passionate Flutter Developer with a B.C.Sc degree and a proven record of building high-quality apps for Android and iOS. As an award-winning university developer, I specialize in writing clean, scalable Dart code using modern state management (BLoC, Riverpod). From REST API integrations to offline storage and mobile security, I love crafting beautiful and secure digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="btn-pulse flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-center font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/30 sm:w-auto sm:px-8"
            >
              View My Work{" "}
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf" 
              download="Han_Zayar_Soe_CV.pdf"
              className="inline-block w-full rounded-lg border border-primary px-6 py-4 text-center font-bold text-primary transition-all hover:bg-primary/5 sm:w-auto sm:px-8"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 relative flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative aspect-square w-full max-w-[15rem] sm:max-w-xs lg:max-w-sm">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src="/profile.png"
              alt="Portrait of Han Zayar Soe"
              className="relative z-10 w-full h-auto rounded-3xl object-cover bg-center shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
