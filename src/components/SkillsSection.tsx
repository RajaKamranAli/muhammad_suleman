import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Testing Types',
    skills: [
      { name: 'Manual Testing', level: 95 },
      { name: 'Regression Testing', level: 90 },
      { name: 'System Testing', level: 88 },
      { name: 'Black Box Testing', level: 92 },
      { name: 'Usability Testing', level: 85 },
    ],
  },
  {
    title: 'Automation & Tools',
    skills: [
      { name: 'Cypress', level: 85 },
      { name: 'Postman', level: 92 },
      { name: 'JMeter', level: 80 },
      { name: 'Swagger', level: 88 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    title: 'Project Management',
    skills: [
      { name: 'Jira', level: 90 },
      { name: 'Azure DevOps', level: 88 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'SDLC & STLC', level: 92 },
    ],
  },
];

const techBadges = [
  'Manual Testing', 'Cypress', 'Postman', 'JMeter', 'Swagger', 
  'MySQL', 'Jira', 'Azure DevOps', 'API Testing', 'Load Testing',
  'iOS Testing', 'Android Testing', 'Web Testing', 'Agile', 'Scrum'
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for delivering top-notch software quality
          </p>
        </motion.div>

        {/* Animated Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techBadges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 py-2 rounded-full glass-card border border-primary/20 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 glow-hover"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
