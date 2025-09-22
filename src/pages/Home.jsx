import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Globe,
  ExternalLink,
  Code,
  Briefcase,
  Star,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
  Coffee,
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const animateCounter = (target, key) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setStats((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 50);
    };

    setTimeout(() => {
      animateCounter(10, "projects");
      animateCounter(3, "experience");
      animateCounter(10, "clients");
    }, 1000);
  }, []);

  // Rotate featured projects
  useEffect(() => {
    const projectTimer = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);
    return () => clearInterval(projectTimer);
  }, []);

  const featuredProjects = [
    {
      title: "Donor Management Application",
      description:
        "Streamlines entering and verifying donor details for hospitals, built with Next.js, Node.js, MySQL.",
      tech: ["Next.js", "Node.js", "MySQL", "CSS"],
      status: "Production",
      impact: "Live in hospitals",
    },
    {
      title: "Timesheet Management System",
      description:
        "Admin/Staff roles, job assignment and user permission management. Backend Laravel, MySQL.",
      tech: ["Laravel", "MySQL"],
      status: "Completed",
      impact: "Used internally",
    },
    {
      title: "Job Portal Application",
      description:
        "JWT auth, three user roles, built with React.js, Node.js, MySQL.",
      tech: ["React.js", "Node.js", "MySQL"],
      status: "Active",
      impact: "Growing users",
    },
  ];

  const skills = [
    {
      name: "HTML / CSS / JavaScript",
      level: 95,
      color: "from-orange-400 to-red-500",
    },
    { name: "React.js", level: 90, color: "from-blue-400 to-purple-500" },
    { name: "Node.js", level: 88, color: "from-green-400 to-teal-500" },
    { name: "PHP / Laravel", level: 80, color: "from-purple-400 to-pink-500" },
    { name: "MySQL", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Git & GitHub", level: 80, color: "from-yellow-400 to-orange-500" },
  ];

  const recentActivity = [
    {
      action: "Deployed",
      project: "Job Portal Application",
      time: "2 days ago",
      icon: Github,
    },
    {
      action: "Updated",
      project: "Point of Sale (POS) System",
      time: "5 days ago",
      icon: Code,
    },
    {
      action: "Completed",
      project: "Table Booking System",
      time: "1 week ago",
      icon: TrendingUp,
    },
    {
      action: "Started",
      project: "Matrimony Application",
      time: "2 weeks ago",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div
        className={`relative z-10 px-6 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for new projects</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Daniel
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              <span className="text-cyan-400 font-semibold">
                Full-Stack Developer
              </span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Dynamic and detail-oriented Full Stack Developer with over 4
              years’ experience designing and implementing web apps. Currently
              at Jorim Technology Solutions delivering high-quality software
              solutions with React, Node.js, PHP and MySQL.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                View My Work
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf"; // public folder la irukura file
                  link.download = "Daniel_Max_Resume.pdf"; // file name
                  link.click();
                }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-500">
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {stats.projects}+
              </div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-purple-400/50 transition-all duration-500">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {stats.experience}
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-green-400/50 transition-all duration-500">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {stats.clients}+
              </div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-yellow-400/50 transition-all duration-500">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-400">System Uptime</div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          {/* Left Column - Profile & Quick Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Profile Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  className="relative w-full h-64 object-cover rounded-xl"
                  alt="Daniel - Javascript Developer"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">Chennai, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Coffee className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Available for consulting</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Full-stack Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dynamic and detail-oriented Full-stack Developer with over 4+
                years of experience designing, developing and implementing web
                applications. Currently working at Jorim Technology Solutions
                Pvt Ltd, leveraging React.js, Node.js, Laravel and MySQL to
                deliver high-quality software solutions while mentoring junior
                developers and collaborating directly with clients.
              </p>

              <div className="flex space-x-3 mb-6">
                <a
                  href="#"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400/50 border border-white/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:text-cyan-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-m-07b1b92a1/"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-blue-500/20 hover:border-blue-400/50 border border-white/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
                </a>
                <a
                  href="main:dani17elc@gmail.com"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-green-500/20 hover:border-green-400/50 border border-white/10 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:text-green-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-purple-500/20 hover:border-purple-400/50 border border-white/10 transition-all duration-300 group"
                >
                  <Globe className="w-5 h-5 group-hover:text-purple-400" />
                </a>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105">
                Let's Connect
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Recent Activity</span>
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm">
                          <span className="text-gray-300">
                            {activity.action}
                          </span>{" "}
                          <span className="text-white font-medium">
                            {activity.project}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center Column - Featured Project */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Featured Project</h3>
                <div className="flex space-x-1">
                  {featuredProjects.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentProjectIndex === index
                          ? "bg-cyan-400 w-6"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      currentProjectIndex === index
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-full absolute top-0 left-0 w-full"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">
                          {project.title}
                        </h4>
                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-400">
                            {project.status}
                          </span>
                        </div>
                        <div className="text-sm text-cyan-400 font-semibold">
                          {project.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-lg font-bold">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-lg font-bold">1M+</div>
                  <div className="text-xs text-gray-400">Transactions</div>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="lg:col-span-3 space-y-8">
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span>Core Skills</span>
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Role */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-400/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">
                    Full-stack Developer
                  </h4>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <p className="text-cyan-400 text-sm mb-2">
                  Jorim Technology Solutions Pvt Ltd
                </p>
                <p className="text-xs text-gray-400 mb-3">2021 – 2025</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Designing and developing full-stack web applications using
                  React.js, Node.js, Laravel and MySQL. Leading 6+ successful
                  projects, mentoring junior developers and collaborating
                  directly with clients to meet objectives.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Next milestone</span>
                  <span className="text-sm text-cyan-400">
                    New project launch
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                  <div
                    className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
