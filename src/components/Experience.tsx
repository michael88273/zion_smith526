import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Lead Software Engineer',
    company: 'DockYard, Inc',
    image: '/cognizant.png',
    period: 'April 2023 - December 2025',
    location: 'Hyderabad, India · On-site',
    description:
      'Delivered scalable full-stack and AI-powered systems supporting large user bases with a strong focus on performance, reliability, and user experience. Improved system speed and responsiveness through backend optimization and search intelligence enhancements. Strengthened overall platform stability with efficient cloud infrastructure practices, while streamlining release processes through automation, reducing deployment time and improving software quality and consistency.',
    achievements: [
      'Built full-stack applications and scalable APIs, delivering smooth user experiences across frontend and backend systems.',
      'Improved system performance to sub-180ms latency and increased search relevance by 35% using advanced optimization and ranking techniques',
      'Achieved 99.95% uptime and reduced infrastructure costs by 22% through cloud optimization and containerized architecture improvements.',
      'Reduced release cycles from days to hours and lowered production defects by 30% through automation, testing, and improved deployment processes.',
    ],
    technologies: [
      'SQL',
      'Python',
      'Looker (PLX)',
      'BigQuery',
      'ETL Automation',
      'Google Apps Script',
      'Power BI',
      'GCP',
      'Data Quality & Monitoring',
      'GenAI-assisted Automation',
    ],
  },
  {
    title: 'Senior Full Stack Python Developer',
    company: 'TekRevol',
    image: '/atharvo.png',
    period: 'May 2020 – Nov 2022',
    location: 'Karnataka, India',
    description:
      'Led development of scalable SaaS platforms across distributed teams, delivering production-ready systems that automated workflows and supported thousands of users. Improved system scalability and performance through architectural optimization, significantly reducing latency and handling high traffic loads efficiently. Strengthened platform reliability and security through improved engineering practices and automation, while enhancing user experience with intelligent search and recommendation features that reduced task completion time.',
    achievements: [
    'Led multi-product SaaS development across distributed teams, delivering scalable production systems in a fast-paced environment.',
    'Built a cloud-native SaaS platform integrated with IoT telemetry, automating workflows and supporting thousands of users.',
    'Improved system scalability by 40% using distributed architecture, enabling high-traffic handling and better system performance.',
    'Reduced API latency by ~68% through backend, database, and caching optimizations across core services.',
    'Strengthened platform security and reliability by reducing vulnerabilities and improving deployment workflows.',
    'Enhanced user experience with intelligent search and recommendation features, reducing query resolution time significantly.'
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Jupyter',
      'Feature Engineering',
      'Model Evaluation',
    ],
  },
  {
    title: 'Full Stack Python Developer',
    company: 'Binti',
    image: '/hackerearth.png',
    period: 'May 2017 – October 2019',
    location: 'Bengaluru, Karnataka, India · Remote',
    description:
      'Delivered a scalable production platform serving thousands of users, improving overall system performance through backend optimization, API enhancements, and efficient caching strategies. Enhanced system responsiveness and stability by refactoring services and optimizing database queries across distributed systems. Improved frontend performance through rendering optimizations and reduced bundle size, resulting in faster and smoother user experiences. Built real-time analytics dashboards enabling low-latency insights and faster operational decision-making.',
    achievements: [
      'Delivered a production web platform serving thousands of users, improving overall system performance through backend optimization, API enhancements, and caching strategies.',
      'Improved backend efficiency through service refactoring, database query optimization, and better request handling across distributed systems.',
      'Increased frontend performance by optimizing rendering, reducing bundle size, and improving state management for a smoother user experience.',
      'Built and maintained real-time analytics dashboards, enabling low-latency KPI tracking and faster decision-making.'
    ],
    technologies: [
      'Algorithms',
      'Data Structures',
      'Problem Design',
      'Complexity Analysis',
      'Competitive Programming',
    ],
  },
    {
    title: 'Junior Developer',
    company: 'Sidebench',
    image: '/hackerearth.png',
    period: 'June 2015 - July 2016',
    location: 'Bengaluru, Karnataka, India · Remote',
    description:
      'Built reusable full-stack components and internal libraries, improving development efficiency across multiple projects. Streamlined development workflows by containerizing environments, significantly reducing setup time and improving consistency across teams. Collaborated closely with designers and engineers to deliver features efficiently, while supporting CI processes and code reviews to maintain high code quality and reliable releases.',
    achievements: [
      'Built reusable full-stack components and internal libraries, improving development efficiency across multiple projects.',
      'Streamlined development workflows by containerizing environments, significantly reducing setup time and improving consistency across systems.',
      'Collaborated with designers and engineers to deliver features effectively, while supporting CI processes and code reviews to ensure high code quality and reliable releases.'
    ],
    technologies: [
      'Algorithms',
      'Data Structures',
      'Problem Design',
      'Complexity Analysis',
      'Competitive Programming',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            From data analytics to automation and ML-driven insights, here’s my experience delivering business value with scalable solutions.
          </p> */}
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6 mb-6">
                        {/* Logo Container */}
                        <div className="shrink-0">
                          {/* <div className="w-20 h-16 md:w-24 md:h-18 rounded-xl bg-transparent flex items-center justify-center">
                            {exp.image ? (
                              <img
                                src={exp.image}
                                alt={exp.company}
                                className="w-full h-full object-contain p-0"
                              />
                            ) : null}
                          </div> */}
                        </div>

                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-2">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              📅 {exp.period}
                            </span>
                            {/* {exp.location && (
                              <span className="flex items-center gap-1.5">
                                🌍 {exp.location}
                              </span>
                            )} */}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            {/* Achievements */}
                            <div className="pt-6">
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">⚡</span> Key Achievements
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            {/* <div>
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">💻</span> Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div> */}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
