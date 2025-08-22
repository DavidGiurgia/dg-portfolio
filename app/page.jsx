"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Database,
  Globe,
  ChevronDown,
  Calendar,
  Award,
  Zap,
} from "lucide-react";

import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandFlutter,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandTailwind,
  IconBrandSupabase,
  IconSql,
  IconApi,
  IconBrandJavascript,
  IconBrandCSharp,
  IconBrandGit,
  IconBrandGithub,
  IconBrandFigma,
  IconPlug,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "Next.js",
      icon: <IconBrandNextjs size={32} />,
      category: "Frontend",
      docs: "https://nextjs.org/docs",
    },
    {
      name: "React",
      icon: <IconBrandReact size={32} />,
      category: "Frontend",
      docs: "https://react.dev",
    },
    {
      name: "Flutter",
      icon: <IconBrandFlutter size={32} />,
      category: "Mobile",
      docs: "https://flutter.dev",
    },
    {
      name: "TypeScript",
      icon: <IconBrandTypescript size={32} />,
      category: "Language",
      docs: "https://www.typescriptlang.org",
    },
    {
      name: "Node.js",
      icon: <IconBrandNodejs size={32} />,
      category: "Backend",
      docs: "https://nodejs.org",
    },
    {
      name: "MongoDB",
      icon: <IconBrandMongodb size={32} />,
      category: "Database",
      docs: "https://mongodb.com",
    },
    {
      name: "TailwindCSS",
      icon: <IconBrandTailwind size={32} />,
      category: "Styling",
      docs: "https://tailwindcss.com",
    },
    {
      name: "Supabase",
      icon: <IconBrandSupabase size={32} />,
      category: "Backend",
      docs: "https://supabase.com",
    },
    {
      name: "SQL",
      icon: <IconSql size={32} />,
      category: "Database",
      docs: "#",
    },
    {
      name: "REST API",
      icon: <IconApi size={32} />,
      category: "Backend",
      docs: "#",
    },
    {
      name: "JavaScript",
      icon: <IconBrandJavascript size={32} />,
      category: "Language",
      docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "C#",
      icon: <IconBrandCSharp size={32} />,
      category: "Language",
      docs: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },
    {
      name: "Git",
      icon: <IconBrandGit size={32} />,
      category: "Tool",
      docs: "https://git-scm.com",
    },
    {
      name: "GitHub",
      icon: <IconBrandGithub size={32} />,
      category: "Tool",
      docs: "https://github.com",
    },
    {
      name: "Figma",
      icon: <IconBrandFigma size={32} />,
      category: "Design",
      docs: "https://figma.com",
    },
    {
      name: "Socket.io",
      icon: <IconPlug size={32} />,
      category: "Realtime",
      docs: "https://socket.io",
    },
  ];

  const projects = [
    {
      title: "Social Media Platform",
      description:
        "Cross-platform social media application with real-time features",
      image: "/troop-ss.png",
      features: [
        "Cross-platform (Web & Mobile)",
        "Real-time chat with WebSockets",
        "Live feed updates",
        "User authentication",
      ],
      tech: ["Flutter", "Nest.js", "MongoDB", "WebSockets"],
      sourceUrl: "https://github.com/DavidGiurgia/Troop-flutter",
      websiteUrl: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Cold Outreach Tool",
      description:
        "Micro-SaaS platform for automated personalized outreach messages",
      image: "/colddm-ss.png",
      features: [
        "AI-powered message generation",
        "User dashboard",
        "Personalization engine",
        "Analytics tracking",
      ],
      tech: ["Next.js", "TailwindCSS", "Node.js", "OpenAI API"],
      sourceUrl: "https://github.com/DavidGiurgia/colddm-app",
      websiteUrl: "https://colddm-eight.vercel.app/",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const downloadCV = () => {
    // Creează un link temporar pentru descărcare
    const link = document.createElement("a");
    link.href = "/cv-giurgia-david.pdf"; // Calea către fișierul tău PDF
    link.download = "CV-Giurgia-David.pdf"; // Numele fișierului pentru download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 z-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_40%)]" />
      </motion.div>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Giurgia David
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 mt-12"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <div className="relative w-44 h-44 mx-auto mb-6">
                <Avatar className="w-40 h-40 mx-auto border-4 border-blue-500/40 shadow-lg absolute inset-0 m-auto">
                  <AvatarImage
                    src="/profile.jpg"
                    alt="Giurgia David"
                    className="object-cover w-full h-full rounded-full"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-full h-full flex items-center justify-center">
                    GD
                  </AvatarFallback>
                </Avatar>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 w-44 h-44"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            Giurgia David
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium mb-8 text-blue-300"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Passionate full-stack developer specializing in modern web technologies like 
          <span className="text-blue-400"> Next.js, React, and Node.js</span>. 
          I enjoy creating seamless, user-centric applications from concept to deployment.
        </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center"
            >
              View My Work
              <ChevronDown className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="px-8 py-3.5 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-lg">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <h4 className="text-xl font-semibold text-blue-300 mb-2">
                  Bachelor's Degree in Computer Science
                </h4>
                <p className="text-gray-300 mb-2">
                  National University of Science and Technology Politehnica
                  București – Pitești University Center
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  2022 – 2025
                </div>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Comprehensive program including databases, algorithms,
                  object-oriented programming, web development, neural networks,
                  artificial intelligence, and software engineering.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold">Frontend & Mobile</h4>
                </div>
                <p className="text-gray-300">
                  Next.js, React, Flutter, TailwindCSS, shadcn/ui
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-green-400 mr-3" />
                  <h4 className="text-lg font-semibold">Backend & Database</h4>
                </div>
                <p className="text-gray-300">
                  Node.js, Nest.js, MongoDB, Supabase
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <h4 className="text-lg font-semibold">Tools & Languages</h4>
                </div>
                <p className="text-gray-300">
                  JavaScript, TypeScript, Dart, C#, Git, Vercel, Postman
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="skills" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>
    
        {/* Infinite scrolling container */}
        <div className="relative">
          {/* First row - scroll left */}
          <div className="flex mb-6 overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...skills.slice(0, Math.ceil(skills.length / 2)), ...skills.slice(0, Math.ceil(skills.length / 2))].map((skill, index) => (
                <motion.a
                  key={`first-${index}`}
                  target="_blank"
                  href={skill.docs}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="cursor-pointer bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center shadow-lg mx-2 w-28 h-28 flex-shrink-0"
                >
                  <div className="text-blue-400 mb-3 text-xl">{skill.icon}</div>
                  <h3 className="font-semibold text-white mb-1 text-sm">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400">{skill.category}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
    
          {/* Second row - scroll right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...skills.slice(Math.ceil(skills.length / 2)), ...skills.slice(Math.ceil(skills.length / 2))].map((skill, index) => (
                <motion.a
                  key={`second-${index}`}
                  target="_blank"
                  href={skill.docs}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="cursor-pointer bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center shadow-lg mx-2 w-28 h-28 flex-shrink-0"
                >
                  <div className="text-purple-400 mb-3 text-xl">{skill.icon}</div>
                  <h3 className="font-semibold text-white mb-1 text-sm">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400">{skill.category}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
                  <div className="h-72 relative overflow-hidden">
                    <Image
                      src={project.image} // Înlocuiește cu calea reală către imagine
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-blue-300">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-white/10 rounded-md text-xs font-medium text-blue-300 border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <motion.a
                        target="blank"
                        href={project.sourceUrl}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors text-sm"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </motion.a>
                      {index != 0 && (
                        <motion.a
                          target="blank"
                          href={project.websiteUrl}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition-colors text-sm"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Are you available for employment?",
                a: "Yes, I'm open to full-time opportunities as a Junior/Full-Stack Developer.",
              },
              {
                q: "How can I contact you?",
                a: (
                  <>
                    Feel free to reach out to me via email at{" "}
                    <a
                      href="mailto:giurgiad@gmail.com"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      giurgiad@gmail.com
                    </a>{" "}
                    or connect with me on{" "}
                    <a
                      href="https://www.linkedin.com/in/giurgia-david-60339726a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      LinkedIn
                    </a>
                    .
                  </>
                ),
              },
              {
                q: "What makes you different?",
                a: "I build real end-to-end projects (web + mobile), not just demo applications. I enjoy transforming ideas into functional products.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-300">
                  {faq.q}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Looking for a dedicated developer to join your team? Let's connect
              and discuss how I can contribute to your projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/giurgia-david-60339726a/",
                  color: "from-blue-600 to-blue-500",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/DavidGiurgia",
                  color: "from-gray-700 to-gray-600",
                },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:giurgiad@gmail.com",
                  color: "from-red-600 to-red-500",
                },
                {
                  icon: Download,
                  label: "CV Download",
                  href: "#contact",
                  color: "from-green-600 to-green-500",
                  onClick: downloadCV,
                },
              ].map((contact, index) => (
                <motion.a
                  //target="blank"
                  key={contact.label}
                  href={contact.href}
                  onClick={contact.onClick || (() => {})}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center px-6 py-3 bg-gradient-to-r ${contact.color} rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group`}
                >
                  <contact.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {contact.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Giurgia David. Built with Next.js, Tailwind CSS, and Framer
            Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
