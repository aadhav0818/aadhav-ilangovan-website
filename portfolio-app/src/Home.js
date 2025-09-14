import './App.css';
import Starfield from "./Starfield.js";
import { motion } from "framer-motion";

export default function Home() {
    return (
<div className="relative text-white font-sans">
        <Starfield />

        <section id="aadhav" className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            Aadhav Ilangovan
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-400">
            Aerospace Engineering @ UT Austin
            </p>
            <a
            href="/projects"
            className="mt-8 px-6 py-3 bg-black hover:bg-white hover:text-black border-2 border-white text-lg text-white font-semibold transition duration-1000"
            >
            My Projects
            </a>
        </section>

        <section id="about" className="relative bg-black bg-opacity-70 z-10 py-20 px-6 mx-auto justify-center flex text-center">
            <div id="about-text" className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
                I’m an aerospace engineering student passionate about space
                simulations, orbital mechanics, spacecraft systems, and propulsion.
                I enjoy building tools that bridge engineering, programming, and physics.
            </p>
            </div> 
        </section>


        <section
            id="experience"
            className="relative z-10 py-24 text-white px-8 md:px-20 lg:px-40"
        >
            <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
            <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>

            <div className="space-y-16">
                {[
                {
                    title: "Thermal Engineer",
                    company: "Texas Spacecraft Laboratory",
                    date: "Mar 2025 → Present",
                    description:
                    "SCOPE-1 CubeSat TPS Subsystem",
                },
                {
                    title: "Propulsion Engineer",
                    company: "Longhorn Rocketry Association",
                    date: "Jan 2025 → Present",
                    description:
                    "Taurus II Engine Design Subsystem",
                },
                {
                    title: "Civil Engineering Intern",
                    company: "City of Frisco",
                    date: "Jan 2024 → May 2024",
                    description:
                    "Department of Engineering Services",
                },
                ].map((exp, idx) => (
                <motion.div
                    key={idx}
                    className={`relative w-full flex flex-col md:flex-row md:justify-between md:items-start`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white shadow-lg z-10"></div>

                    <div
                    className={`bg-black p-6 shadow-lg border-2 w-full md:w-5/12 hover:scale-105 transition-transform ${
                        idx % 2 === 0 ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"
                    }`}
                    >
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.date}</p>
                    <p className="text-gray-300">{exp.description}</p>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </section>


        <section
            id="skills"
            className="relative z-10 bg-black bg-opacity-70 py-24 px-8 md:px-20 lg:px-40 hover:border-white  text-center"
        >
            <h2 className="text-4xl font-bold mb-16 tracking-wide">Skills & Coursework</h2>

            <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-black shadow-lg p-8 border-2 border-white">
                <h3 className="text-2xl font-semibold mb-6">Programming</h3>
                <div className="grid grid-cols-2 gap-3">
                {[
                    "Python",
                    "C++",
                    "MATLAB",
                    "C",
                    "Matplotlib",
                    "NumPy",
                    "LabVIEW",
                    "SGP4",
                    "Qt/PyQt",
                    "OpenGL",
                ].map((skill) => (
                    <div
                    key={skill}
                    className="bg-black px-3 py-2 border border-white hover:border-white hover:scale-105 transition-transform"
                    >
                    {skill}
                    </div>
                ))}
                </div>
            </div>

            <div className="bg-black shadow-lg p-8 border-2 border-white  ">
                <h3 className="text-2xl font-semibold mb-6">Simulation & Design</h3>
                <div className="grid grid-cols-1 gap-3">
                {[
                    "C&R Thermal Desktop",
                    "SOLIDWORKS",
                    "Autodesk Inventor",
                    "Autodesk Fusion 360",
                ].map((skill) => (
                    <div
                    key={skill}
                    className="bg-black px-3 py-2 border border-white hover:border-white hover:scale-105 transition-transform"
                    >
                    {skill}
                    </div>
                ))}
                </div>
            </div>

            <div className="bg-black shadow-lg p-8 border-2 border-white   row-span-2">
                <h3 className="text-2xl font-semibold mb-6">Coursework</h3>
                <div className="grid grid-cols-1 gap-3">
                {[
                    "Solid Mechanics",
                    "Low-Speed Aerodynamics",
                    "Applied Thermodynamics",
                    "Engineering Computation",
                    "Engineering Statics",
                    "Engineering Dynamics",
                    "Differential Equations",
                    "Linear Algebra",
                    "Vector Calculus",
                    "Multivariable Calculus",
                    "Computer Programming",

                ].map((skill) => (
                    <div
                    key={skill}
                    className="bg-black px-3 py-2 border border-white hover:border-white hover:scale-105 transition-transform"
                    >
                    {skill}
                    </div>
                ))}
                </div>
            </div>

            <div className="bg-black shadow-lg p-8 border-2 border-white  ">
                <h3 className="text-2xl font-semibold mb-6">General</h3>
                <div className="grid grid-cols-1 gap-3">
                {[
                    "Numerical Methods",
                    "Simulations",
                    "Trajectory Visualization",
                    "Orbital Mechanics",
                    "Microcontrollers"
                ].map(
                    (lang) => (
                    <div
                        key={lang}
                        className="bg-black px-3 py-2 border border-white hover:scale-105 transition-transform"
                    >
                        {lang}
                    </div>
                    )
                )}
                </div>
            </div>
    

            <div className="bg-black shadow-lg p-8 border-2 border-white  ">
                <h3 className="text-2xl font-semibold mb-6">Languages</h3>
                <div className="grid grid-cols-1 gap-3">
                {["English (Native/Bilingual)", "Tamil (Native/Bilingual)"].map(
                    (lang) => (
                    <div
                        key={lang}
                        className="bg-black px-3 py-2 border border-white hover:scale-105 transition-transform"
                    >
                        {lang}
                    </div>
                    )
                )}
                </div>
            </div>
            </div>
        </section>

        <section id="contact" className="relative z-10 py-20 px-6 text-center bg-gray-990">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8">I'd love to connect. You can contact  me at: </p>
            <div className="flex justify-center gap-6">
            <button
                onClick={(e) => {
                navigator.clipboard.writeText("ilangovan.aadhav@gmail.com");

                const section = e.target.closest("section"); // find the section
                const popup = document.createElement("div");
                popup.className =
                    "absolute -top-16 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 shadow-lg border-2 border-blue-500 flex items-center gap-4";
                popup.innerHTML = `
                    <span>Email copied!</span>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm">OK</button>
                `;

                section.appendChild(popup);

                popup.querySelector("button").onclick = () => popup.remove();
                }}
                className="hover:text-blue-400 transition"
            >
                Email
            </button>
            <a href="https://linkedin.com/in/aadhav-ilangovan" target="_blank" className="hover:text-blue-400">
                LinkedIn
            </a>
            <a href="https://github.com/aadhav0818" target="_blank" className="hover:text-blue-400">
                GitHub
            </a>
            </div>
        </section>
        </div>
    );
}
    