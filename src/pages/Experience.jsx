import { useState, useEffect } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  Code,
  Star,
  ChevronRight,
  Building,
  Zap,
} from "lucide-react";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedAchievement, setExpandedAchievement] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // replace your current const experiences = [ ... ] with this:
  const experiences = [
    {
      id: 0,
      year: "2021 – Present",
      role: "Full-Stack Developer",
      company: "Jorim Technology Solutions Pvt Ltd",
      location: "Chennai, India",
      type: "Full-time",
      current: true,
      logo: "💻",
      description:
        "Building and maintaining scalable full-stack web applications using React.js, Node.js, Laravel and MySQL. Collaborating with designers and stakeholders to deliver business-ready solutions.",
      responsibilities: [
        "Develop and maintain dynamic, responsive front-end interfaces in React.js (with Vite & Tailwind)",
        "Implement secure REST APIs and server-side logic using Node.js / Express and Laravel",
        "Integrate payment gateways, JWT authentication and real-time chat modules",
        "Optimize database queries and handle migrations with MySQL",
        "Lead code reviews and mentor junior developers",
        "Deploy and maintain applications on Linux servers",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Laravel",
        "MySQL",
        "Vite",
        "Tailwind CSS",
        "JWT",
        "REST APIs",
      ],
      achievements: [
        { metric: "15+", description: "Projects delivered" },
        { metric: "40%", description: "Load time reduced on key apps" },
        { metric: "3", description: "Junior devs mentored" },
        { metric: "100%", description: "On-time client delivery" },
      ],
      impact:
        "Delivered high-quality full-stack applications for multiple clients, improving user experience and business efficiency.",
    },
    {
      id: 1,
      year: "2019 – 2021",
      role: "PHP & Frontend Developer",
      company: "Freelance / Various Clients",
      location: "Remote",
      type: "Contract",
      current: false,
      logo: "🌐",
      description:
        "Developed and deployed custom websites and small business apps using PHP, JavaScript and MySQL.",
      responsibilities: [
        "Designed responsive UI using HTML, CSS, JavaScript and Bootstrap",
        "Developed backend logic with PHP and integrated MySQL databases",
        "Customized WordPress and Wix alternatives for SMEs",
        "Implemented SEO best practices and analytics integration",
        "Provided client training and support post-deployment",
      ],
      technologies: [
        "PHP",
        "JavaScript",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "WordPress",
      ],
      achievements: [
        { metric: "20+", description: "Websites built" },
        { metric: "30%", description: "Increase in client conversions" },
        { metric: "100%", description: "Client satisfaction" },
        { metric: "∞", description: "Learning new stacks" },
      ],
      impact:
        "Helped small and medium businesses go online and improve their digital presence.",
    },
    {
      id: 2,
      year: "2018 – 2019",
      role: "Technical Support Intern",
      company: "Impact Infotech",
      location: "Chennai, India",
      type: "Internship",
      current: false,
      logo: "🔧",
      description:
        "Provided technical support and gained early exposure to software development and databases.",
      responsibilities: [
        "Assisted customers with software installation and troubleshooting",
        "Created basic scripts to automate routine support tasks",
        "Documented procedures and wrote user guides",
        "Collaborated with developers to escalate and resolve bugs",
      ],
      technologies: ["Windows", "Linux", "SQL", "HTML/CSS", "JavaScript"],
      achievements: [
        { metric: "95%", description: "Customer satisfaction rating" },
        { metric: "50%", description: "Issue resolution time reduced" },
        { metric: "100+", description: "Tickets handled per month" },
        { metric: "1st", description: "Step into IT career" },
      ],
      impact:
        "Laid the foundation for my full-stack development career by learning real-world support and debugging.",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Laravel",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    { category: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    {
      category: "Tools",
      items: ["Git & GitHub", "Linux Server Deployment", "Postman", "Figma"],
    },
    {
      category: "Other",
      items: [
        "Payment Integration",
        "Real-time Chat",
        "SEO",
        "Mentoring Junior Devs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div> */}

      <div
        className={`relative z-10 px-6 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              8+ years of building high-performance systems, leading teams, and
              driving technical innovation
            </p>
          </div>

          {/* Experience Timeline & Details */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Timeline - Left Side */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span>Career Journey</span>
                </h3>

                <div className="space-y-3">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      onClick={() => setSelectedJob(index)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 group ${
                        selectedJob === index
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/50 scale-105"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
                      } border`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-2xl">{exp.logo}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-white truncate">
                              {exp.role}
                            </h4>
                            {exp.current && (
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{exp.company}</p>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 text-gray-400 transition-transform ${
                            selectedJob === index ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{exp.year}</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Details - Right Side */}
            <div className="lg:col-span-8">
              {experiences.map(
                (exp, index) =>
                  selectedJob === index && (
                    <div key={exp.id} className="space-y-8">
                      {/* Job Header */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h2 className="text-3xl font-bold">{exp.role}</h2>
                              {exp.current && (
                                <span className="px-3 py-1 bg-green-500/20 border border-green-400/50 rounded-full text-green-400 text-xs font-medium">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                              <div className="flex items-center space-x-2">
                                <Building className="w-4 h-4 text-cyan-400" />
                                <span className="font-semibold">
                                  {exp.company}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4 text-blue-400" />
                                <span>{exp.year}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-green-400" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-4xl">{exp.logo}</div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Impact Statement */}
                        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
                          <div className="flex items-center space-x-2 mb-3">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="font-semibold text-yellow-400">
                              Key Impact
                            </span>
                          </div>
                          <p className="text-gray-200 italic">{exp.impact}</p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <span>Key Achievements</span>
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                          {exp.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                            >
                              <div className="text-2xl font-bold text-cyan-400 mb-2">
                                {achievement.metric}
                              </div>
                              <div className="text-sm text-gray-300">
                                {achievement.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                          <Users className="w-5 h-5 text-purple-400" />
                          <span>Key Responsibilities</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((responsibility, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">
                                {responsibility}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                          <Code className="w-5 h-5 text-green-400" />
                          <span>Technologies Used</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-lg text-green-300 font-medium hover:border-green-400/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Skills and technologies I've mastered throughout my career
                journey
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Progression Visualization */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Career Progression</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                My journey from support technician to blockchain architect
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="relative">
                {/* Progress line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-cyan-400 rounded-full"></div>

                {/* Career milestones */}
                <div className="flex justify-between items-center relative">
                  {experiences.reverse().map((exp, index) => (
                    <div
                      key={exp.id}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-4 border-slate-900 shadow-lg mb-4 transition-transform group-hover:scale-125 ${
                          index === 0
                            ? "bg-red-400"
                            : index === 1
                            ? "bg-yellow-400"
                            : index === 2
                            ? "bg-green-400"
                            : index === 3
                            ? "bg-blue-400"
                            : "bg-cyan-400"
                        }`}
                      ></div>
                      <div className="text-center max-w-32">
                        <div className="font-semibold text-sm text-white mb-1">
                          {exp.role.split(" ")[0]} {exp.role.split(" ")[1]}
                        </div>
                        <div className="text-xs text-gray-400">
                          {exp.year.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations,
                or simply sharing knowledge about systems programming and
                blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Let's Connect</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
