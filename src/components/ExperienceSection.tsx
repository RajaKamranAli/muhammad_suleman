import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

import expSQA from '@/assets/exp-texinity.png';
import expJunior from '@/assets/exp-techloyce.png';
import expEducation from '@/assets/exp-education.png';
import expCertification from '@/assets/exp-certification.png';

const experiences = [
  {
    type: 'work',
    title: 'SQA Engineer',
    company: 'Aussource Enterprises',
    period: 'July 2024 – Present',
    image: expSQA,
    description: [
      'Designed & executed test cases for iOS, Android, and web applications',
      'Logged & tracked defects in Azure DevOps with clear reproduction steps',
      'Performed functional, regression, exploratory, and cross-browser testing',
      'Tested APIs with Swagger & Postman, analyzed failed responses & crash logs',
      'Conducted DB testing using MySQL to verify data integrity',
      'Performed load/performance testing with JMeter',
    ],
  },
  {
    type: 'work',
    title: 'Junior SQA Manual/Automation',
    company: 'Aussource Enterprises',
    period: 'June 2023 – June 2024',
    image: expJunior,
    description: [
      'Contributed to test planning, scenario creation, and scripting',
      'Integrated test automation scripts using Cypress',
      'Utilized Cypress, JMeter, Postman, and Jira',
      'Collaborated with cross-functional teams for defect resolution',
      'Performed API Testing and Load Testing',
    ],
  },
  {
    type: 'education',
    title: 'BSCS',
    company: 'Arid University, Rawalpindi',
    period: '2018 – 2022',
    image: expEducation,
    description: ['Bachelor of Science in Computer Science'],
  },
  {
    type: 'certification',
    title: 'Certifications',
    company: 'PSEB & PASHA',
    period: '2023',
    image: expCertification,
    description: [
      'SQA (Automation) Certification',
      'Excellence Delivered - PSEB & PASHA',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey in software quality assurance
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-1/2"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`glass-card rounded-2xl p-6 glow-hover ml-8 md:ml-0 ${
                      isLeft ? 'md:mr-0' : 'md:ml-0'
                    }`}>
                      {/* Experience Image */}
                      <motion.div 
                        className="relative w-full h-40 rounded-xl overflow-hidden mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={exp.image} 
                          alt={exp.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-mono border border-primary/30">
                            {exp.period}
                          </span>
                        </div>
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {exp.company}
                      </p>
                      
                      <ul className={`space-y-2 text-sm text-muted-foreground ${
                        isLeft ? 'md:text-right' : 'text-left'
                      }`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 ${
                              isLeft ? 'md:order-last md:ml-2' : ''
                            }`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                    className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full glass-card border-2 border-primary flex items-center justify-center md:-translate-x-1/2 glow-border"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
