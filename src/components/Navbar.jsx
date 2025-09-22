import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Heart,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Me", path: "/me", icon: Heart },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active index when path changes
  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) => item.path === currentPath
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [currentPath]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="group flex items-center space-x-3 cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  Daniel Portfolio
                </h1>
                <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                  Javascript Developer
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-2 group ${
                      isActive
                        ? "text-white bg-white/10 backdrop-blur-sm border border-cyan-400/50"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <Icon
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-400 group-hover:text-cyan-400"
                      }`}
                    />
                    <span>{item.name}</span>

                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    )}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isActive ? "hidden" : ""
                      }`}
                    ></div>
                  </Link>
                );
              })}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-green-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <button onClick={() => navigate("/contact")} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact Me
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/50"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-cyan-400" : "text-gray-400"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}

              {/* Mobile Social Links */}
              <div className="pt-6 mt-6 border-t border-gray-700">
                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-cyan-400 hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-green-400 hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <button onClick={() => navigate("/contact")} className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </nav>

      {/* Floating Indicator */}
      <div className="fixed top-20 right-6 z-40 hidden xl:block">
        <div className="bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
          {navItems.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full my-2 transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
