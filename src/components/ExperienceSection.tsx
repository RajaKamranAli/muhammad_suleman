import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

import expSQA from '@/assets/exp-texinity.png';
import expJunior from '@/assets/exp-techloyce.png';
import expEducation from '@/assets/exp-education.png';
import expCertification from '@/assets/exp-certification.png';

const workExperiences = [
  {
    type: 'work',
    title: 'SQA Engineer',
    company: 'Aussource Enterprises',
    period: 'July 2024 – Present',
    image: expSQA,
    productLink: 'https://formpanda.com.au/',
    projectDetails: 'Form Panda is an online platform used in Australia for managing solar energy installation jobs, documentation, and compliance workflows — primarily for solar retailers, installers, and trade specialists. The site supports job creation, scheduling, requirements tracking, and submission workflows related to solar panel installation projects. It appears to be associated with STC (Small-scale Technology Certificates) reporting and compliance — which is a real requirement for solar installations under Australian renewable energy incentive schemes.',
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
    company: '3cix',
    period: 'June 2023 – June 2024',
    image: expJunior,
    productLink: 'https://3cix.com/',
    projectDetails: 'This project was an AI-based recruitment portal designed to simplify the hiring process. Employers could post job openings, and applicants could apply directly through the platform. The system used artificial intelligence to analyze job requirements and match them with candidate resumes, generating a compatibility score. This scoring mechanism helped recruiters quickly identify and select the most suitable candidates, making the recruitment process faster and more efficient.',
    description: [
      'Contributed to test planning, scenario creation, and scripting',
      'Integrated test automation scripts using Cypress',
      'Utilized Cypress, JMeter, Postman, and Jira',
      'Collaborated with cross-functional teams for defect resolution',
      'Performed API Testing and Load Testing',
    ],
  },
];

const educationItems = [
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

  const renderExperienceCard = (exp: any, index: number, isLeft: boolean, showProjectDetails: boolean = false) => {
    const Icon = getIcon(exp.type);
    
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
            <p className="text-primary font-medium mb-2">
              {exp.company}
            </p>
            
            {exp.productLink && (
              <motion.a
                href={exp.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-mono mb-4 hover:bg-primary/20 transition-colors border border-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Product Link
              </motion.a>
            )}
            
            <ul className="space-y-2 text-sm text-muted-foreground text-left">
              {exp.description.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Details on opposite side */}
        {showProjectDetails && exp.projectDetails && (
          <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12'} mt-4 md:mt-0`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              className="glass-card rounded-2xl p-6 ml-8 md:ml-0 border border-primary/10"
            >
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Project Overview
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.projectDetails}
              </p>
            </motion.div>
          </div>
        )}

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
  };

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Experience Section Header */}
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey in software quality assurance
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-1/2"
          />

          {/* Work Experience Items */}
          <div className="space-y-12">
            {workExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return renderExperienceCard(exp, index, isLeft, true);
            })}
          </div>
        </div>

        {/* Education Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-1/2"
          />

          {/* Education Items */}
          <div className="space-y-12">
            {educationItems.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return renderExperienceCard(exp, index + 2, isLeft, false);
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
