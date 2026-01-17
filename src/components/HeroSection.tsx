import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const roles = ['SQA Engineer', 'Automation Specialist', 'Quality Advocate'];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left z-10"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Available for Projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text glow-text">Muhammad Suleman</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="h-12 mb-6"
          >
            <span className="text-2xl sm:text-3xl font-mono text-primary typing-cursor">
              {displayedRole}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8"
          >
            2+ years of experience ensuring high-quality software delivery. Expert in 
            <span className="text-primary"> manual & automation testing</span>, API testing, and 
            <span className="text-primary"> performance optimization</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(166 100% 50% / 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 flex items-center gap-2"
            >
              View Experience
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-lg border border-border hover:border-primary/50 text-foreground font-semibold transition-all duration-300 glow-hover"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
          >
            <a href="mailto:msuleman6556@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">msuleman6556@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/muhammad-suleman-41774a236/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Islamabad, Pakistan</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end z-10"
        >
          {/* Decorative Ring */}
          <motion.div
            className="absolute w-80 h-80 sm:w-96 sm:h-96 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-72 h-72 sm:w-80 sm:h-80 border border-primary/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Profile Image Container */}
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glass-card glow-border p-2">
              <img
                src={profileImage}
                alt="Muhammad Suleman"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -right-4 top-8 glass-card px-4 py-3 rounded-xl glow-border"
            >
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-xs text-muted-foreground">Years Exp.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute -left-4 bottom-8 glass-card px-4 py-3 rounded-xl glow-border"
            >
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-xs text-muted-foreground">Tools Mastered</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
