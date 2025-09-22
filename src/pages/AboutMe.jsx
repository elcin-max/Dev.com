import { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Rocket, Github, Linkedin, Mail, ExternalLink, ChevronRight, Star, Award } from 'lucide-react';

const AboutMe = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const fullText = "Hi, I'm Daniel";
  const skills = ['Javascript', 'React JS', 'Node JS', 'Laravel', 'MySQL','RESTful APIs','Responsive Design', 'HTML', 'CSS', 'Bootstrap 5', 'Tailwind'];

  // Typing animation effect
  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typeTimer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  // Skill rotation effect
  useEffect(() => {
    const skillTimer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(skillTimer);
  }, []);

  const experienceData = [
  { year: '2021 - Present', company: 'Jorim Technology Solutions Pvt Ltd', role: 'Full-Stack Developer', highlight: true },
  { year: '2015 - 2018', company: 'Sri Ramana Polytechnic College', role: 'Diploma in Mechanical Engineering (Student)', highlight: false }
];


  const projects = [
  {
    title: 'Matrimony Application',
    description: 'User-friendly matrimonial platform built with Node.js, EJS and MongoDB.',
    tech: ['Node.js','EJS','MongoDB'],
    status: 'Active'
  },
  {
    title: 'Timesheet Management System',
    description: 'Comprehensive timesheet management for admins & staff using Laravel and MySQL.',
    tech: ['Laravel','MySQL'],
    status: 'Production'
  },
  {
    title: 'Domain Expiry Reminder Tool',
    description: 'Laravel-based tool to track domains and send expiry reminders.',
    tech: ['Laravel','MySQL','Mail/SMS API'],
    status: 'Active'
  },
  {
    title: 'Gun Shooting Slot Booking',
    description: 'React/Node.js app for online slot booking with real-time availability.',
    tech: ['React.js','Node.js','MySQL'],
    status: 'Active'
  }
];


  const achievements = [
  { icon: Award, label: '3+ Years Experience', value: 'Full-Stack Development' },
  { icon: Star, label: '10+ Projects', value: 'Successfully Delivered' },
  { icon: Code, label: 'HTML/CSS/JS', value: 'Front-end Expertise' },
  { icon: Rocket, label: 'Node.js & Laravel', value: 'Back-end Expertise' }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className={`relative z-10 px-6 py-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-80 h-80 bg-slate-800 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Ahimas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Section */}
          <div className="lg:col-span-2">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-2xl"></div>
              
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {typedText}<span className="animate-pulse">|</span>
              </h1>
              
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-gray-300">Specialized in</span>
                <span className="text-2xl font-semibold text-cyan-400 transition-all duration-500">
                  {skills[currentSkillIndex]}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Experienced Rust developer with <span className="text-cyan-400 font-semibold">8 years</span> of building high-performance,
                safe and concurrent systems. Skilled in systems programming, network
                services, and low-level application development using Rust's ownership
                model and async ecosystem.
              </p>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Briefcase className="w-4 h-4" />
                  <span>RUST Lead at NPCI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <Icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Work Experience */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            
            <div className="space-y-4">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:transform hover:translate-x-2 ${
                    exp.highlight 
                      ? 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border-cyan-400/50' 
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-400">{exp.year}</span>
                    {exp.highlight && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                  </div>
                  <h3 className="font-semibold text-white">{exp.company}</h3>
                  <p className="text-gray-300 text-sm">{exp.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Projects */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="flex items-center space-x-3 mb-6">
              <Rocket className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold">Projects</h2>
            </div>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`p-4 rounded-xl transition-all duration-300 ${
                    activeCard === index ? 'bg-purple-500/20 border-purple-400/50' : 'bg-white/5 border-white/10'
                  } border hover:transform hover:scale-105`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-cyan-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-400">{project.status}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">2021 - 2024</div>
                  <h3 className="font-semibold text-white">B.A. English Literature</h3>
                  <p className="text-gray-300 text-sm">Alagappa University (Distance Education)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">2015 - 2018</div>
                  <h3 className="font-semibold text-white">Diploma in Mechanical Engineering</h3>
                  <p className="text-gray-300 text-sm">Sri Ramana Polytechnic College</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-semibold">Core Skills</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center transition-all duration-300 ${
                      currentSkillIndex === index 
                        ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/50 scale-105' 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    } border`}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let's build something <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">extraordinary</span> together
            </h2>
            <p className="text-gray-300 mb-6">Ready to discuss your next project? Let's connect and make it happen.</p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                Get In Touch
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;