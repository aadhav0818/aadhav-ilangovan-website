
export default function Navbar() {
  const sections = ["about", "experience", "skills", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-16">
        <a href="/" className="text-white text-xl">Aadhav Ilangovan</a>
        <div className="flex gap-6">
            <a
              href={`/projects`}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
                Projects
            </a>
          {sections.map((section) => (
            <a
              key={section}
              href={`/#${section}`}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
