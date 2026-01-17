import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Bug, TestTube2, Zap } from 'lucide-react';

const highlights = [
  {
    icon: TestTube2,
    title: 'Quality First',
    description: 'Comprehensive test planning and execution for flawless releases',
  },
  {
    icon: Bug,
    title: 'Bug Hunter',
    description: 'Expert at identifying edge cases and critical defects',
  },
  {
    icon: Code2,
    title: 'Automation',
    description: 'Building robust test automation with Cypress & modern tools',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Load testing and optimization using JMeter',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Passionate About{' '}
            <span className="gradient-text">Quality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ensuring every software product meets the highest standards of quality, 
            reliability, and user satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Block Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 glow-hover"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">profile.ts</span>
            </div>
            <pre className="code-block text-sm overflow-x-auto">
              <code>
                <span className="text-primary">const</span>{' '}
                <span className="text-foreground">suleman</span>{' '}
                <span className="text-muted-foreground">=</span> {'{'}
                {'\n'}  <span className="text-primary">name</span>:{' '}
                <span className="text-green-400">"Muhammad Suleman"</span>,
                {'\n'}  <span className="text-primary">role</span>:{' '}
                <span className="text-green-400">"SQA Engineer"</span>,
                {'\n'}  <span className="text-primary">experience</span>:{' '}
                <span className="text-yellow-400">"2+ years"</span>,
                {'\n'}  <span className="text-primary">education</span>:{' '}
                <span className="text-green-400">"BSCS - Arid University"</span>,
                {'\n'}  <span className="text-primary">location</span>:{' '}
                <span className="text-green-400">"Islamabad, Pakistan"</span>,
                {'\n'}  <span className="text-primary">passion</span>:{' '}
                <span className="text-green-400">"Delivering Bug-Free Software"</span>,
                {'\n'}  <span className="text-primary">certifications</span>: [
                {'\n'}    <span className="text-green-400">"SQA Automation - PSEB"</span>,
                {'\n'}    <span className="text-green-400">"Excellence Delivered - PASHA"</span>
                {'\n'}  ],
                {'\n'}{'}'}
              </code>
            </pre>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-6 glow-hover group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
