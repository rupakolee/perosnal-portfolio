import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Employee Attendance and Leave Management System",
      description: "A full-stack web app for Employee's Attendance, Leave and general Task Management and HR portal.",
      link: "https://github.com/rupakolee/EMS.git",
    },
    {
      title: "Pharmacy Inventory Management and Billing System",
      description: "A PHP built web app for Pharmacy's stock management and invoice generation with customer's medicine order interface.",
      link: "https://github.com/rupakolee/pharmacy.git",
    },
    {
      title: "Pentabyte Nepal",
      description: "An ecommerce website built from wordpress that focuses on tech products such as memory, graphics card, and other computer accessories.",
      link: "https://github.com/rupakolee/pentabyte-nepal.git",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="flex flex-col items-center justify-center h-screen text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-600">Rupak Olee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl max-w-xl"
        >
          A passionate Full Stack Developer who loves building modern web apps.
        </motion.p>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/rupakolee" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/rupak-olee-769709242/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="mailto:oleerupak11@gmail.com">
            <Mail className="w-6 h-6 hover:text-blue-600" />
          </a>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
          I'm a developer with expertise in React, Node.js, and MongoDB. I enjoy
          solving problems, designing clean UIs, and learning new technologies to
          improve my craft.
        </p>
      </section>

      <section className="p-8 md:p-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="rounded-2xl shadow-md hover:shadow-lg transition bg-white p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="flex-1 text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-center"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 md:p-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-lg mb-6 text-gray-700">
          Interested in working together? Feel free to reach out!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 rounded-lg bg-blue-600 !text-white hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
