import { useState, useEffect } from "react";
import {
  Heart,
  Coffee,
  Code,
  Mountain,
  Camera,
  Book,
  Music,
  Gamepad2,
  Award,
  Target,
  Lightbulb,
  Users,
  Clock,
  MapPin,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotate inspirational quotes
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  const inspirationalQuotes = [
  {
    quote: "Clean, maintainable code builds reliable products.",
    author: "Personal Philosophy"
  },
  {
    quote: "Front-end + Back-end = Full-stack solutions for real problems.",
    author: "Development Motto"
  },
  {
    quote: "Learning never stops — every project is a chance to grow.",
    author: "Career Vision"
  }
];


  const personalValues = [
    {
      icon: Target,
      title: "Quality",
      description:
        "I write clean, maintainable code and aim for pixel-perfect interfaces with robust back-ends.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "I’m always exploring new technologies like React, Node.js, and Laravel to improve my solutions.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "I collaborate closely with clients and mentor junior developers to achieve project goals together.",
    },
    {
      icon: Award,
      title: "Results",
      description:
        "Committed to delivering software that adds real business value and delights users.",
    },
  ];

  const hobbies = [
    {
      icon: Code,
      name: "Web Apps",
      description: "Building full-stack apps with React.js & Node.js",
    },
    {
      icon: Book,
      name: "Reading",
      description: "Technology & English Literature",
    },
    {
      icon: Mountain,
      name: "Nature",
      description: "Enjoying trips and fresh air",
    },
    {
      icon: Camera,
      name: "Photography",
      description: "Capturing everyday moments",
    },
    { icon: Music, name: "Music", description: "Listening & relaxing" },
    { icon: Coffee, name: "Coffee", description: "Perfect brewing ☕" },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full-stack Developer",
      description:
        "Delivering high-quality React.js, Node.js and Laravel applications at Jorim Technology Solutions Pvt Ltd.",
    },
    {
      year: "2021",
      title: "Joined Jorim Technology",
      description:
        "Started as Full-stack Developer focusing on React.js, Node.js, PHP, MySQL.",
    },
    {
      year: "2021–2024",
      title: "BA English Literature",
      description:
        "Completed Bachelor of Arts (Distance Education) at Alagappa University.",
    },
    {
      year: "2018",
      title: "Diploma in Mechanical Engineering",
      description:
        "Sri Ramana Polytechnic College — built foundation in problem-solving and teamwork.",
    },
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: Heart },
    { id: "values", label: "Values", icon: Target },
    { id: "journey", label: "Journey", icon: Clock },
    { id: "personal", label: "Personal", icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div> */}

      <div
        className={`relative z-10 px-6 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-stack Developer passionate about building scalable web
              applications using React.js, Node.js, Laravel and MySQL. Over 3
              years of experience delivering real-world solutions and mentoring
              junior developers.
            </p>
          </div>

          {/* Inspirational Quote Carousel */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center max-w-4xl mx-auto">
              <div className="relative overflow-hidden h-20">
                {inspirationalQuotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      currentQuoteIndex === index
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-full"
                    }`}
                  >
                    <p className="text-lg lg:text-xl italic text-gray-300 mb-2">
                      "{quote.quote}"
                    </p>
                    <p className="text-sm text-cyan-400">— {quote.author}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                {inspirationalQuotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentQuoteIndex === index
                        ? "bg-cyan-400 w-6"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/50"
                        : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* My Story Tab */}
            {activeTab === "story" && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <Heart className="w-6 h-6 text-pink-400" />
                    <span>The Journey Begins</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Hi there! 👋 I'm{" "}
                    <span className="text-cyan-400 font-semibold">Daniel</span>,
                    a Full-stack Developer with 3+ years of experience building
                    responsive web applications using React.js, Node.js, Laravel
                    and MySQL. My journey began with a Diploma in Mechanical
                    Engineering and has grown into a passion for creating
                    dynamic, user-friendly digital experiences.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    What started as curiosity about how computers really work
                    evolved into a deep passion for building secure, scalable
                    systems. I fell in love with Rust's philosophy of "fast,
                    safe, concurrent" - it perfectly aligned with my belief that
                    we shouldn't have to choose between performance and safety.
                  </p>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span>Based in Chennai, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                      Current Focus
                    </h4>
                    <p className="text-gray-300">
                      Currently working at{" "}
                      <span className="text-white font-semibold">
                        Jorim Technology Solutions Pvt Ltd
                      </span>
                      , delivering and maintaining full-stack web applications,
                      integrating APIs, and mentoring junior developers.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">
                      What Drives Me
                    </h4>
                    <p className="text-gray-300">
                      I believe technology should solve real problems and
                      improve user experience. From designing intuitive
                      front-ends to optimizing back-ends, I enjoy making a
                      meaningful impact.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-500">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">
                      Beyond Code
                    </h4>
                    <p className="text-gray-300">
                      Outside of coding, I enjoy reading, exploring nature, and
                      photography — these activities give me fresh ideas and
                      perspectives for my projects.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Values Tab */}
            {activeTab === "values" && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Core Values</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    These principles guide my approach to development,
                    leadership, and life
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {personalValues.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group"
                      >
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors">
                            <Icon className="w-8 h-8 text-cyan-400" />
                          </div>
                          <h4 className="text-xl font-bold">{value.title}</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Journey Tab */}
            {activeTab === "journey" && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">My Journey</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Key milestones that shaped my career and perspective
                  </p>
                </div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 h-full rounded-full"></div>

                  <div className="space-y-12">
                    {timeline.map((event, index) => (
                      <div
                        key={index}
                        className={`flex items-center ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`w-5/12 ${
                            index % 2 === 0
                              ? "text-right pr-8"
                              : "text-left pl-8"
                          }`}
                        >
                          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
                            <div className="text-2xl font-bold text-cyan-400 mb-2">
                              {event.year}
                            </div>
                            <h4 className="text-lg font-semibold mb-3">
                              {event.title}
                            </h4>
                            <p className="text-gray-300">{event.description}</p>
                          </div>
                        </div>

                        {/* Timeline dot */}
                        <div className="w-2/12 flex justify-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                        </div>

                        <div className="w-5/12"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Personal Tab */}
            {activeTab === "personal" && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Beyond the Code</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    What I enjoy when I'm not building systems and solving
                    problems
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {hobbies.map((hobby, index) => {
                    const Icon = hobby.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center group"
                      >
                        <div className="inline-flex p-4 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl border border-cyan-400/20 mb-4 group-hover:border-cyan-400/40 transition-colors">
                          <Icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {hobby.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {hobby.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                    <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                      <Coffee className="w-6 h-6 text-orange-400" />
                      <span>Fun Facts</span>
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Can brew the perfect cup of coffee ☕</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Enjoys hiking and nature photography 📸</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Loves reading about distributed systems 📚</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Plays classical guitar in free time 🎸</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                    <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                      <Book className="w-6 h-6 text-blue-400" />
                      <span>Currently</span>
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div>
                          <div className="font-semibold text-white">
                            Reading
                          </div>
                          <div className="text-sm text-gray-400">
                            "Clean Code" by Robert C. Martin"
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <div>
                          <div className="font-semibold text-white">
                            Learning
                          </div>
                          <div className="text-sm text-gray-400">
                            Advanced Node.js architecture & system design
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        <div>
                          <div className="font-semibold text-white">
                            Building
                          </div>
                          <div className="text-sm text-gray-400">
                            A Job Portal app with JWT authentication
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you want to discuss technology, share ideas, or explore
                potential collaborations, I'm always excited to connect with
                fellow developers and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105">
                  Get In Touch
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

export default About;
