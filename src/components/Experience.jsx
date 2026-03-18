import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="px-6 py-24 bg-slate-50 dark:bg-slate-900/50"
      id="experience"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={cardVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
              Career Journey
            </h2>
            <h3 className="text-4xl font-bold">Work Experience</h3>
          </div>
          <p className="text-slate-500 max-w-xs">
            Building scalable mobile solutions with clean architecture and
            modern tools.
          </p>
        </motion.div>
        <div className="grid gap-8">
          {/* Exp Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={cardVariants}
            className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="size-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                flutter_dash
              </span>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h4 className="text-2xl font-bold">Flutter Developer</h4>
                <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold uppercase">
                  Feb 2025 – Present
                </span>
              </div>
              <p className="text-primary font-semibold text-lg">
                Digital Base Company
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Develop and maintain high-performance mobile applications
                for Android and iOS using Flutter and Dart. Architect
                applications using Clean Architecture principles and
                scalable state management solutions including BLoC,
                Riverpod, and Provider. Integrate complex REST APIs, backend
                connectivity, and secure user authentication systems.
              </p>
            </div>
          </motion.div>
          {/* Exp Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={cardVariants}
            className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="size-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                terminal
              </span>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h4 className="text-2xl font-bold">
                  Software Engineering Intern
                </h4>
                <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold uppercase">
                  3 Months
                </span>
              </div>
              <p className="text-primary font-semibold text-lg">
                Meta Team Myanmar Co., Ltd.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Contributed to backend and database development using C#,
                optimizing data retrieval and storage. Delivered
                high-quality code, leading to an official full-time
                employment offer upon completion of the 3-month internship.
              </p>
            </div>
          </motion.div>
          {/* Exp Card 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={cardVariants}
            className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="size-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                build
              </span>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h4 className="text-2xl font-bold">
                  Tech Instructor &amp; Hardware Tech
                </h4>
                <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold uppercase">
                  2017 – 2019
                </span>
              </div>
              <p className="text-primary font-semibold text-lg">
                Freelance &amp; Local Businesses
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Worked proactively during university gap years as a computer
                software instructor, smartphone repair technician, and print
                shop assistant. Developed strong problem-solving, hardware
                troubleshooting, and technical communication skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
