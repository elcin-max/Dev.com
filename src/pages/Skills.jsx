import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Globe,
  Wrench,
  Zap,
  Star,
  TrendingUp,
  Award,
  Target,
  Layers,
  Server,
  Shield,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: Code,
      color: "from-orange-400 to-red-500",
      skills: [
        {
          name: "Rust",
          level: 95,
          experience: "5+ years",
          projects: 15,
          description: "Systems programming, blockchain, WebAssembly",
        },
        {
          name: "JavaScript",
          level: 88,
          experience: "6+ years",
          projects: 25,
          description: "Frontend, backend, Node.js ecosystem",
        },
        {
          name: "Python",
          level: 85,
          experience: "4+ years",
          projects: 12,
          description: "Data analysis, automation, backend services",
        },
        {
          name: "C++",
          level: 80,
          experience: "3+ years",
          projects: 8,
          description: "High-performance computing, embedded systems",
        },
        {
          name: "SQL",
          level: 90,
          experience: "7+ years",
          projects: 20,
          description: "Database design, optimization, analytics",
        },
        {
          name: "TypeScript",
          level: 85,
          experience: "3+ years",
          projects: 18,
          description: "Type-safe frontend and backend development",
        },
      ],
    },
    frontend: {
      title: "Frontend Technologies",
      icon: Globe,
      color: "from-cyan-400 to-blue-500",
      skills: [
        {
          name: "React",
          level: 92,
          experience: "5+ years",
          projects: 22,
          description: "Component architecture, hooks, state management",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          experience: "3+ years",
          projects: 20,
          description: "Utility-first styling, responsive design",
        },
        {
          name: "HTML5",
          level: 95,
          experience: "8+ years",
          projects: 30,
          description: "Semantic markup, accessibility, web standards",
        },
        {
          name: "CSS3",
          level: 88,
          experience: "8+ years",
          projects: 28,
          description: "Advanced layouts, animations, responsive design",
        },
        {
          name: "Next.js",
          level: 82,
          experience: "2+ years",
          projects: 10,
          description: "Server-side rendering, static generation",
        },
        {
          name: "WebAssembly",
          level: 78,
          experience: "2+ years",
          projects: 6,
          description: "High-performance web applications",
        },
      ],
    },
    backend: {
      title: "Backend & Systems",
      icon: Server,
      color: "from-green-400 to-teal-500",
      skills: [
        {
          name: "Node.js",
          level: 88,
          experience: "5+ years",
          projects: 18,
          description: "RESTful APIs, microservices, real-time apps",
        },
        {
          name: "Docker",
          level: 85,
          experience: "4+ years",
          projects: 15,
          description: "Containerization, orchestration, deployment",
        },
        {
          name: "Kubernetes",
          level: 75,
          experience: "2+ years",
          projects: 8,
          description: "Container orchestration, scaling, management",
        },
        {
          name: "Linux",
          level: 90,
          experience: "6+ years",
          projects: 25,
          description: "System administration, shell scripting",
        },
        {
          name: "Nginx",
          level: 80,
          experience: "3+ years",
          projects: 12,
          description: "Load balancing, reverse proxy, web server",
        },
        {
          name: "GraphQL",
          level: 78,
          experience: "2+ years",
          projects: 7,
          description: "API design, query optimization",
        },
      ],
    },
    blockchain: {
      title: "Blockchain & Web3",
      icon: Shield,
      color: "from-purple-400 to-pink-500",
      skills: [
        {
          name: "Substrate",
          level: 88,
          experience: "3+ years",
          projects: 8,
          description: "Custom blockchain development",
        },
        {
          name: "Smart Contracts",
          level: 85,
          experience: "3+ years",
          projects: 12,
          description: "DeFi protocols, tokenization",
        },
        {
          name: "Consensus Algorithms",
          level: 82,
          experience: "2+ years",
          projects: 6,
          description: "PoS, PoW, custom consensus",
        },
        {
          name: "Cryptography",
          level: 80,
          experience: "2+ years",
          projects: 10,
          description: "Hash functions, digital signatures",
        },
        {
          name: "Web3.js",
          level: 78,
          experience: "2+ years",
          projects: 9,
          description: "DApp development, wallet integration",
        },
        {
          name: "IPFS",
          level: 75,
          experience: "1+ years",
          projects: 5,
          description: "Decentralized storage solutions",
        },
      ],
    },
    databases: {
      title: "Databases & Storage",
      icon: Database,
      color: "from-blue-400 to-purple-500",
      skills: [
        {
          name: "MySQL",
          level: 90,
          experience: "6+ years",
          projects: 20,
          description: "Relational design, performance tuning",
        },
        {
          name: "PostgreSQL",
          level: 88,
          experience: "4+ years",
          projects: 15,
          description: "Advanced queries, extensions",
        },
        {
          name: "Redis",
          level: 85,
          experience: "3+ years",
          projects: 12,
          description: "Caching, session storage, pub/sub",
        },
        {
          name: "MongoDB",
          level: 80,
          experience: "3+ years",
          projects: 10,
          description: "Document-based NoSQL, aggregation",
        },
        {
          name: "InfluxDB",
          level: 75,
          experience: "2+ years",
          projects: 6,
          description: "Time-series data, monitoring",
        },
        {
          name: "Elasticsearch",
          level: 70,
          experience: "1+ years",
          projects: 4,
          description: "Search engine, log analysis",
        },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-yellow-400 to-orange-500",
      skills: [
        {
          name: "Git",
          level: 95,
          experience: "8+ years",
          projects: 35,
          description: "Version control, branching strategies",
        },
        {
          name: "Jenkins",
          level: 82,
          experience: "3+ years",
          projects: 10,
          description: "CI/CD pipelines, automation",
        },
        {
          name: "Prometheus",
          level: 78,
          experience: "2+ years",
          projects: 8,
          description: "Monitoring, alerting, metrics",
        },
        {
          name: "Grafana",
          level: 80,
          experience: "2+ years",
          projects: 8,
          description: "Data visualization, dashboards",
        },
        {
          name: "Terraform",
          level: 75,
          experience: "1+ years",
          projects: 5,
          description: "Infrastructure as code",
        },
        {
          name: "AWS",
          level: 78,
          experience: "3+ years",
          projects: 12,
          description: "Cloud services, serverless architecture",
        },
      ],
    },
  };

  const categories = Object.keys(skillCategories);

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-400 to-emerald-500";
    if (level >= 80) return "from-blue-400 to-cyan-500";
    if (level >= 70) return "from-yellow-400 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  const overallStats = {
    totalSkills: Object.values(skillCategories).reduce(
      (acc, cat) => acc + cat.skills.length,
      0
    ),
    totalProjects: Object.values(skillCategories).reduce(
      (acc, cat) =>
        acc +
        cat.skills.reduce((skillAcc, skill) => skillAcc + skill.projects, 0),
      0
    ),
    avgExperience: 4.2,
    certifications: 8,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div
        className={`relative z-10 px-6 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across
              full-stack development, blockchain, and systems programming
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {overallStats.totalSkills}
              </div>
              <div className="text-gray-400 text-sm">Technical Skills</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {overallStats.totalProjects}
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {overallStats.avgExperience}+
              </div>
              <div className="text-gray-400 text-sm">Years Avg Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {overallStats.certifications}
              </div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const categoryData = skillCategories[category];
                const Icon = categoryData.icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeCategory === category
                        ? `bg-gradient-to-r ${categoryData.color} text-white shadow-lg scale-105`
                        : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white hover:scale-105"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{categoryData.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            {categories.map(
              (category) =>
                activeCategory === category && (
                  <div key={category}>
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center space-x-3 mb-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${skillCategories[category].color} rounded-xl`}
                        >
                          {React.createElement(skillCategories[category].icon, {
                            className: "w-6 h-6 text-white",
                          })}
                        </div>
                        <h2 className="text-3xl font-bold">
                          {skillCategories[category].title}
                        </h2>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {skillCategories[category].skills.map((skill, index) => (
                        <div
                          key={index}
                          onMouseEnter={() =>
                            setHoveredSkill(`${category}-${index}`)
                          }
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">
                              {skill.name}
                            </h3>
                            <div className="flex items-center space-x-1">
                              {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(skill.level / 20)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-400">
                                Proficiency
                              </span>
                              <span className="text-sm font-medium text-cyan-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className={`h-2 bg-gradient-to-r ${getSkillColor(
                                  skill.level
                                )} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Experience</span>
                              <span className="text-green-400 font-medium">
                                {skill.experience}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Projects</span>
                              <span className="text-blue-400 font-medium">
                                {skill.projects}
                              </span>
                            </div>
                          </div>

                          <div
                            className={`mt-4 p-3 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 ${
                              hoveredSkill === `${category}-${index}`
                                ? "opacity-100 transform translate-y-0"
                                : "opacity-70"
                            }`}
                          >
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Skill Mastery Chart */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Skill Mastery Overview
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Proficiency Distribution */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-cyan-400">
                  Proficiency Distribution
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      range: "Expert (90-100%)",
                      count: 8,
                      color: "bg-green-500",
                      percentage: 22,
                    },
                    {
                      range: "Advanced (80-89%)",
                      count: 12,
                      color: "bg-blue-500",
                      percentage: 33,
                    },
                    {
                      range: "Intermediate (70-79%)",
                      count: 10,
                      color: "bg-yellow-500",
                      percentage: 28,
                    },
                    {
                      range: "Proficient (60-69%)",
                      count: 6,
                      color: "bg-orange-500",
                      percentage: 17,
                    },
                  ].map((level, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-24 text-sm text-gray-300">
                        {level.range}
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-full ${level.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${level.percentage}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-400">
                        {level.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-purple-400">
                  Experience Timeline
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      years: "5+ years",
                      skills: ["Rust", "React", "Node.js", "MySQL"],
                      color: "from-green-400 to-emerald-500",
                    },
                    {
                      years: "3-4 years",
                      skills: ["Docker", "Python", "TypeScript"],
                      color: "from-blue-400 to-cyan-500",
                    },
                    {
                      years: "2-3 years",
                      skills: ["Blockchain", "Kubernetes", "GraphQL"],
                      color: "from-purple-400 to-pink-500",
                    },
                    {
                      years: "1-2 years",
                      skills: ["WebAssembly", "Terraform", "IPFS"],
                      color: "from-yellow-400 to-orange-500",
                    },
                  ].map((group, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white">
                          {group.years}
                        </span>
                        <span className="text-sm text-gray-400">
                          {group.skills.length} skills
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 bg-gradient-to-r ${group.color} rounded text-xs text-white font-medium`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                With expertise across the full technology stack, I'm equipped to
                tackle complex challenges and deliver high-quality solutions.
                Let's discuss your next project!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl font-semibold hover:from-green-400 hover:to-blue-400 transition-all duration-300 hover:scale-105">
                  Start a Project
                </button>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
