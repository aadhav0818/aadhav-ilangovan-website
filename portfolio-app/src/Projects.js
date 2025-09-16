import { useState } from "react";
import satMp4500 from "./assets/Active_Sat_Demo_500.mp4"
import satOgv500 from "./assets/Active_Sat_Demo_500.ogv"
import satWebm500 from "./assets/Active_Sat_Demo_500.webm"
import lunarsimMp4 from "./assets/Lunar-sim.mp4"
import lunarsimOgv from "./assets/Lunar-sim.ogv"
import lunarsimWebm from "./assets/Lunar-sim.webm"

export default function Projects() {
  const projects = [
    {
      name: "3D Real-Time Orbital Satellite Tracker",
      description: "Real-time 3D visualization of Earth's satellite and debris field. Propagates satellite orbits using SGP4 and cached TLEs from CelesTrack which refresh every 12 hours. Satellite orbits are estimated during TLE downtime using Verlet Integration to preserve orbits with high accuracy.",
      link: "https://github.com/aadhav0818/3d-orbital-satellite-tracker",
      media: [satMp4500, satOgv500, satWebm500],
      skills: ["Python", "PyQt", "Numerical Methods", "NumPy", "SGP4", "C++", "OpenGL", "Linear Algebra", "Orbital Mechanics"],
      explanation: `What you're seeing above is Earth's LEO and MEO satellite field (Low & Medium Earth Orbit) restricted to a total count of 500. Further filtering can be done to show satellite types such as: Space Stations, Starlink Terminals, GPS Satellites, etc.
                   
                    Let's first discuss how the Earth is modeled in 3D space on a 2D screen. Using OpenGL, a sphere was built inside of a far larger sphere (the starmap) and was set as the center of the PyQt window. To rotate the entire earth-space fixture in 3D space, the mouse position at the click and release are recorded in (x,y,z) format. 2 vectors are formed from the origin and the angle & axis of rotation are calculated. Using Rodrigues' rotation formula, we are able to give OpenGL a rotation matrix to rotate the entire system in a way that corresponds to the mouse movement. 
                    
                    The satellite data is pulled from CelesTrak.org, website that publishes TLE's (Two-Line Elements) provided by the USSF & NORAD. A TLE is a compact data format that stores all of the orbital elements of a satellite (Inclination, Eccentricity, RAAN, ECI Ref. Frame, etc.). This file can be parsed using the SGP4 (Simplified General Perturbations) model, a model initially developed by the US Air Force. Using the Cysgp4 wrapper that wraps the C++ implementation of SGP4 (used for higher performance), all of the requested satellite TLE's were parsed and turned into objects storing velocity & position vectors.
                    
                    Each position vector is scaled down to suit the radius of the Earth in the simulation. This coordinate is plotted as a satellite in the simulation, and is a part of the rotation system described above. To prevent any excess requests to CelesTrak, TLEs are requested only every 12 hours. During the downtime, a numerical model is used to estimate the orbit of each satellite to show the live movement. In this case, I used Verlet Integration which is a numerical method that is really good at conserving energy, which keeps the satellites orbit from drifting. Using a Euler approximation for instance would have led to a build-up of positional inaccuracies over time.  
                    
                    Keep in mind, this simulation is made such that the coordinate system is fixed to Earth-Centered Inertial (ECI) coordinates. In simple terms, the coordinate system does not rotate with the earth (inertial), and the axes are fixed in space with the origin at the center of mass. This is typically the system you would want to use for spacecraft, as it simplifies the orbital mechanics by a great amount. 
                    
                    This live tracker can simulate tens of thousands of satellites at once, albeit with a reduced frame rate under high computational stress. I plan on fully migrating the visual engine to C++ instead of a Cython (C++/Python) implementation to increase performance.`
    },
    {
      name: "MATLAB Lunar Simulation",
      description: "Information will be published soon",
      media: [lunarsimMp4, lunarsimOgv, lunarsimWebm],
      link: "https://github.com/aadhav0818/lunar-simulation",
      skills: ["MATLAB", "Numerical Methods", "Vectorization", "Time-series Plotting", "Orbital Mechanics", "Descent/Launch Dynamics"],
      explanation: `Coming Soon`
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen px-8 md:px-20 lg:px-40">
      <h1 className="text-4xl font-bold text-center pt-20">Projects</h1>

      <div className="flex border-b border-gray-600 mb-8">
        {projects.map((project, idx) => (
          <button
            key={project.name}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeIndex === idx
                ? "text-white border-b-4 border-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            {project.name}
          </button>
        ))}
      </div>

      <div className="bg-black border border-white p-10 shadow-lg transition-all">
        <h2 className="text-2xl font-bold mb-4">{projects[activeIndex].name}</h2>
        <p className="text-gray-300 mb-4">{projects[activeIndex].description}</p>

         <div className="flex flex-wrap pb-3 gap-2 mb-4">
          {projects[activeIndex].skills.map((skill) => (
            <span
              key={skill}
              className="bg-black text-gray-200 px-3 py-1 text-sm border border-white hover:bg-white hover:text-black transition duration-750"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={projects[activeIndex].link}
          target="_blank"
          className="text-white-400 font-bold hover:underline"
        >
          View source on GitHub →
        </a>
      </div>

      <video
        key={activeIndex}
        id="my-player"
        class="video-js"
        preload="auto"
        className="w-full  pt-10 "
        autoPlay
        loop
        muted
        playsInline
        

        data-setup='{}'>
        <source src={projects[activeIndex].media[0]} type="video/mp4"></source>
        <source src={projects[activeIndex].media[1]} type="video/ogv"></source>
        <source src={projects[activeIndex].media[2]} type="video/webm"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>

      {/* Explanation Section */}
      <div className="mt-12 p-8 bg-black border border-white shadow-lg">
        <h3 className="text-xl font-bold mb-4">How It Works</h3>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {projects[activeIndex].explanation}
        </p>
      </div>

          <section id="contact" className="relative z-10 py-20 px-6 text-center bg-gray-990">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8">I'd love to connect. You can contact me at: </p>
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
