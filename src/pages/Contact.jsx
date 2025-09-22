import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, Github, Linkedin, Twitter, Globe, CheckCircle, AlertCircle, Loader, Copy, ExternalLink } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: 'consultation',
    budget: 'under-10k',
    timeline: 'flexible',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      value: 'ahimas.dev@gmail.com',
      description: 'Best for detailed project discussions',
      action: 'Copy Email',
      color: 'from-green-400 to-emerald-500',
      availability: 'Responds within 24 hours'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone/WhatsApp',
      value: '+91 98765 43210',
      description: 'Quick calls and urgent matters',
      action: 'Call Now',
      color: 'from-blue-400 to-cyan-500',
      availability: 'Available Mon-Fri 9AM-6PM IST'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      description: 'Available for local meetings',
      action: 'View Map',
      color: 'from-purple-400 to-pink-500',
      availability: 'UTC+5:30 (IST)'
    },
    {
      id: 'calendar',
      icon: Calendar,
      title: 'Schedule Meeting',
      value: 'Book a 30-min call',
      description: 'Free consultation call',
      action: 'Book Now',
      color: 'from-yellow-400 to-orange-500',
      availability: 'Available slots this week'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/ahimas',
      username: '@ahimas',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ahimas',
      username: '/in/ahimas',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/ahimas',
      username: '@ahimas_dev',
      color: 'hover:text-sky-400'
    },
    {
      icon: Globe,
      name: 'Website',
      url: 'https://ahimas.dev',
      username: 'ahimas.dev',
      color: 'hover:text-purple-400'
    }
  ];

  const projectTypes = [
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'blockchain', label: 'Blockchain Development' },
    { value: 'systems', label: 'Systems Programming' },
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'audit', label: 'Code Review & Audit' },
    { value: 'mentoring', label: 'Mentoring & Training' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Job)' },
    { value: '1-month', label: 'Within 1 Month' },
    { value: '3-months', label: '1-3 Months' },
    { value: '6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        project: 'consultation',
        budget: 'under-10k',
        timeline: 'flexible',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ahimas.dev@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      console.log('Could not copy email');
    }
  };

  const handleContactAction = (contact) => {
    if (contact.id === 'email') {
      copyEmail();
    } else if (contact.id === 'phone') {
      window.open('tel:+919876543210');
    } else if (contact.id === 'location') {
      window.open('https://maps.google.com/?q=Chennai,Tamil Nadu,India');
    } else if (contact.id === 'calendar') {
      // In a real app, this would open your calendar booking system
      window.open('#booking');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div> */}

      <div className={`relative z-10 px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and explore how we can work together
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((contact) => {
              const Icon = contact.icon;
              return (
                <div
                  key={contact.id}
                  onMouseEnter={() => setActiveContact(contact.id)}
                  onMouseLeave={() => setActiveContact(null)}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group cursor-pointer"
                  onClick={() => handleContactAction(contact)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {contact.id === 'email' && copiedEmail && (
                      <div className="flex items-center space-x-1 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Copied!</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{contact.value}</p>
                  <p className="text-gray-400 text-sm mb-3">{contact.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{contact.availability}</p>
                  
                  <button className={`w-full px-4 py-2 bg-gradient-to-r ${contact.color} rounded-lg font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center space-x-2`}>
                    {contact.id === 'email' && <Copy className="w-4 h-4" />}
                    {contact.id === 'phone' && <Phone className="w-4 h-4" />}
                    {contact.id === 'location' && <ExternalLink className="w-4 h-4" />}
                    {contact.id === 'calendar' && <Calendar className="w-4 h-4" />}
                    <span>{contact.action}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold">Send Me a Message</h2>
                </div>

                <div className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-slate-800">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value} className="bg-slate-800">
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      >
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-slate-800">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, goals, specific requirements, and any technical details you think would be helpful..."
                    />
                  </div>

                  {/* Form Status */}
                  {formStatus.message && (
                    <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/20 border border-green-400/50 text-green-300'
                        : 'bg-red-500/20 border border-red-400/50 text-red-300'
                    }`}>
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <p>{formStatus.message}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              
              {/* Quick Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-xl font-bold mb-6">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-sm text-gray-400">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-medium">Time Zone</div>
                      <div className="text-sm text-gray-400">IST (UTC+5:30)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-medium">Languages</div>
                      <div className="text-sm text-gray-400">English, Hindi, Tamil</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                        <div className="flex-1">
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-gray-400">{social.username}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-xl font-bold mb-6">Current Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available for new projects</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    I'm currently accepting new clients for Q4 2025 and beyond. 
                    Let's discuss your project timeline and requirements.
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-sm text-gray-400">
                      <strong>Preferred Project Types:</strong><br />
                      • Blockchain & Web3 Development<br />
                      • Systems Programming with Rust<br />
                      • Technical Architecture & Consulting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;