import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Add hamburger and close icons

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const navItems = [
    "home",
    "education",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = item;
          }
        }
      });
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#home"
          className="text-blue-400 text-lg font-semibold"
          aria-label="Scroll to Home"
        >
          Payas.
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex gap-6 text-sm text-white font-medium`}
        >
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-all duration-300 ${
                  active === item ? "text-blue-400" : "hover:text-blue-300"
                }`}
                aria-label={`Go to ${
                  item.charAt(0).toUpperCase() + item.slice(1)
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition-all duration-300 ${
                  active === item
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-left`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
