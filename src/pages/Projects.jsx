import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Calendar,
  Users,
  Code,
  Zap,
  Award,
  TrendingUp,
  Eye,
  Heart,
  Filter,
  Search,
  Server,
  Globe,
} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotate featured projects
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIndex(
        (prev) => (prev + 1) % projects.filter((p) => p.featured).length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Rice E-commerce Platform",
      description:
        "Full-stack e-commerce website for selling rice with filtering, search, cart and payment flow.",
      longDescription:
        "A modern e-commerce platform built with React (Vite + Tailwind) and Node.js backend with MySQL. Includes product filtering, search, add-to-cart with toast notifications, dark mode, animations and secure online payment flow.",
      image:
        "https://images.unsplash.com/photo-1606788075761-3b0cf43f511f?w=600&h=400&fit=crop",
      category: "ecommerce",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "MySQL",
        "JWT",
      ],
      status: "Production",
      featured: true,
      stats: { users: "5K+", orders: "1K+/month", uptime: "99.9%" },
      duration: "6 months",
      team: 3,
      links: {
        github: "https://github.com/yourusername/rice-ecommerce",
        live: "https://your-rice-store.com",
        demo: "",
      },
      achievements: [
        "Secure worldwide payment integration",
        "Dark mode & animations",
        "Fast loading times",
      ],
    },
    {
      id: 2,
      title: "School Management System",
      description:
        "Comprehensive school management app with student tracking and fee management.",
      longDescription:
        "A complete school management system handling student enrollment, attendance tracking, grade management, fee collection, and parent-teacher communication. Deployed across multiple schools.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      category: "fullstack",
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "Express.js",
        "Tailwind CSS",
      ],
      status: "Production",
      featured: true,
      stats: { schools: "50+", students: "25K+", teachers: "2K+" },
      duration: "8 months",
      team: 5,
      links: {
        github: "https://github.com/yourusername/school-management",
        live: "https://schoolapp.yourdomain.com",
        demo: "",
      },
      achievements: [
        "50+ schools deployed",
        "25K+ students managed",
        "95% user satisfaction",
      ],
    },
    {
      id: 3,
      title: "Hotel Table Booking App",
      description:
        "Hotel table booking with worldwide payment support and admin chat.",
      longDescription:
        "An online hotel table booking system where users can book tables without logging in, pay online securely, and receive real-time replies from admins.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      category: "nodejs",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "JWT"],
      status: "Active",
      featured: false,
      stats: { hotels: "10+", bookings: "500+/month" },
      duration: "5 months",
      team: 2,
      links: {
        github: "https://github.com/yourusername/hotel-booking",
        live: "",
        demo: "",
      },
      achievements: [
        "Integrated global payment gateways",
        "Implemented admin–user chat",
        "No login required booking flow",
      ],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects.",
      longDescription:
        "My personal portfolio built with React.js, Vite and Tailwind CSS to highlight my work experience, projects and skills.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      category: "frontend",
      technologies: ["React.js", "Vite", "Tailwind CSS"],
      status: "Production",
      featured: false,
      stats: { visitors: "1K+/month" },
      duration: "2 months",
      team: 1,
      links: {
        github: "https://github.com/yourusername/portfolio",
        live: "https://yourportfolio.com",
      },
      achievements: [
        "Fully responsive & animated",
        "Dark/light mode toggle",
        "Integrated contact form",
      ],
    },
    {
      id: 5,
      title: "Matrimony Application",
      description:
        "User-friendly matrimonial platform to connect individuals based on preferences.",
      longDescription:
        "Developed a server-rendered Matrimony platform using Node.js and EJS templating with MongoDB. Implemented secure authentication, profile management, advanced search filters and personalized matchmaking results.",
      image:
        "https://images.unsplash.com/photo-1535469420020-33302f80d4d0?w=600&h=400&fit=crop",
      category: "nodejs",
      technologies: ["Node.js", "EJS", "MongoDB", "Express.js"],
      status: "Active",
      featured: false,
      stats: { users: "1K+", matches: "200+" },
      duration: "4 months",
      team: 1,
      links: {
        github: "https://github.com/yourusername/matrimony-app",
        live: "https://matrimony.yourdomain.com",
        demo: "",
      },
      achievements: [
        "Implemented user authentication & secure data storage",
        "Server-side rendered dynamic templates with EJS",
        "Advanced search filters for personalized matchmaking",
      ],
    },
    {
      id: 6,
      title: "Timesheet Management System",
      description:
        "Comprehensive timesheet app for admins and staff to manage daily work and permissions.",
      longDescription:
        "Developed a full-featured Timesheet Management System with two roles: Admin and Staff. Admins can enter daily work, assign jobs, manage user permissions (activate/deactivate users), and generate reports. Built with Laravel backend and MySQL database for robust data handling.",
      image:
        "https://images.unsplash.com/photo-1590608897129-79da98d15996?w=600&h=400&fit=crop",
      category: "laravel",
      technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      status: "Production",
      featured: false,
      stats: { users: "500+", reports: "10K+/year" },
      duration: "6 months",
      team: 2,
      links: {
        github: "https://github.com/yourusername/timesheet-system",
        live: "https://timesheet.yourdomain.com",
        demo: "",
      },
      achievements: [
        "Role-based access control (Admin/Staff)",
        "Daily work entry & job assignment",
        "User activation/deactivation & reporting",
      ],
    },
    {
      id: 7,
      title: "Domain Expiry Reminder Tool",
      description: "Automated tool to track and remind about domain expirations.",
      longDescription:
        "Built a Laravel-based application to monitor registered domains and send automated email/SMS reminders before expiry. The system helps teams keep track of multiple domains and avoid service interruptions.",
      image:
        "https://images.unsplash.com/photo-1591696331119-39d53a8c9e48?w=600&h=400&fit=crop",
      category: "laravel",
      technologies: ["Laravel", "MySQL", "Cron Jobs", "Mail/SMS API"],
      status: "Active",
      featured: false,
      stats: { domains: "200+ tracked", reminders: "5K+/year" },
      duration: "3 months",
      team: 1,
      links: {
        github: "https://github.com/yourusername/domain-expiry-reminder",
        live: "https://domains.yourdomain.com",
        demo: "",
      },
      achievements: [
        "Automated reminders before domain expiry",
        "Integrated email and SMS notifications",
        "Simple dashboard to manage multiple domains",
      ],
    },
    {
  id: 8,
  title: "Gun Shooting Academy Slot Booking",
  description: "Online slot booking system for a gun shooting academy with real-time availability.",
  longDescription:
    "Developed a web-based application for a shooting academy to let customers view available training slots, book their preferred times, and pay securely online. Admins can manage slots, instructors and send notifications. Built with React for the front-end and Node.js backend with MySQL for real-time data updates.",
  image: "https://images.unsplash.com/photo-1558591710-4b4d24e8f3f8?w=600&h=400&fit=crop",
  category: "fullstack",
  technologies: ["React.js", "Node.js", "MySQL", "Express.js", "JWT"],
  status: "Active",
  featured: false,
  stats: { slots: "100+/week", bookings: "500+/month" },
  duration: "4 months",
  team: 1,
  links: {
    github: "https://github.com/yourusername/gun-shooting-booking",
    live: "https://shootingacademy.yourdomain.com",
    demo: ""
  },
  achievements: [
    "Real-time slot availability & booking",
    "Integrated secure online payments",
    "Admin panel for managing slots & instructors"
  ]
}

  ];

  // Fixed categories to match project categories
  const categories = [
    {
      id: "all",
      name: "All Projects",
      icon: Code,
      color: "from-gray-400 to-gray-600",
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: Server,
      color: "from-green-400 to-teal-500",
    },
    {
      id: "laravel",
      name: "Laravel",
      icon: Zap,
      color: "from-red-400 to-orange-500",
    },
    {
      id: "fullstack",
      name: "Full Stack",
      icon: TrendingUp,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: Award,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: Globe,
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  const projectStats = {
    total: projects.length,
    inProduction: projects.filter((p) => p.status === "Production").length,
    technologies: [...new Set(projects.flatMap((p) => p.technologies))].length,
    totalUsers: "32K+",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div
        className={`relative z-10 px-6 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of innovative solutions spanning e-commerce platforms, management systems, and full-stack applications
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
              <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {projectStats.total + 4}
              </div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {projectStats.inProduction}
              </div>
              <div className="text-gray-400 text-sm">In Production</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {projectStats.technologies}
              </div>
              <div className="text-gray-400 text-sm">Technologies Used</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {projectStats.totalUsers}
              </div>
              <div className="text-gray-400 text-sm">Total Users Served</div>
            </div>
          </div>

          {/* Featured Projects Carousel */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="overflow-hidden">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`transition-all duration-500 ${
                      featuredIndex === index
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-full absolute top-0 left-0 w-full"
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium">
                            Featured
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === "Production"
                                ? "bg-green-500/20 text-green-400 border border-green-400/50"
                                : project.status === "Active"
                                ? "bg-blue-500/20 text-blue-400 border border-blue-400/50"
                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/50"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.stats).map(
                            ([key, value], i) => (
                              <div key={i} className="text-center">
                                <div className="text-lg font-bold text-cyan-400">
                                  {value}
                                </div>
                                <div className="text-xs text-gray-400 capitalize">
                                  {key.replace(/([A-Z])/g, " $1")}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex space-x-3">
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="relative w-full h-64 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFeaturedIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      featuredIndex === index
                        ? "bg-cyan-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Filter and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                        isActive
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white hover:scale-105"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === "Production"
                          ? "bg-green-500/80 text-white"
                          : project.status === "Active"
                          ? "bg-blue-500/80 text-white"
                          : "bg-yellow-500/80 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-purple-500/80 text-white rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs border border-white/20">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg text-cyan-400 font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300 font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-1"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-purple-500/20 border border-purple-400/50 rounded-lg text-purple-400 font-medium hover:bg-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-1"
                      >
                        <Play className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Collaborating?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                These projects represent just a portion of my work. I'm always
                excited to take on new challenges and build innovative solutions
                that make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 hover:scale-105">
                  Start a Project
                </button>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  View More Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;