import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const categories = [
];

const projects = [
  {
    title: 'SquareSigns',
    description: 'Collaborated with team members to develop a full stack web application using React and Node.js, implementing modular components, REST APIs, database integration and scalable, maintainable backend architecture.',
    tags: ['Javascript', 'React', 'Node', 'MongoDB'],
    categories: ['📊 PowerBI'],
    github: 'https://github.com/dineshbarri/Olympic-Data-Analytics-Dashboard-1896-2016-Power-BI-Insights',
    live: 'https://www.squaresigns.com/',
    image: '/2.jpg',
  },
  {
    title: 'City Drinks',
    description: 'CityDrinks’ ecommerce platform features a React/Redux and Tailwind CSS frontend, Node.js/Express backend with MongoDB, integrated Stripe/PayPal payments, JWT authentication, REST APIs and CI/CD pipelines.',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Node', 'Express','MongoDB'],
    categories: ['📊 PowerBI', '🧠 ML & Data Science', '💾 SQL'],
    github: 'https://github.com/dineshbarri/ireland-hotel-pricing-ratings-analysis',
    live: 'https://citydrinks.com/',
    image: '/1.jpg',
  },

  {
    title: 'Andrews Acres Gourmet Mushrooms',
    description: 'For Andrews Acres, I contributed build a responsive ecommerce platform featuring a React frontend with Redux and Tailwind CSS, a Node.js/Express backend with MongoDB, integrated Stripe/PayPal payments, JWT authentication, REST APIs.',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Node', 'Express','MongoDB','AWS'],
    categories: ['🤖 AI & Automation'],
    github: 'https://github.com/dineshbarri/AI-Video-Factory-Veo3-Automation-Pipeline',
    image: '/121.jpg',
    live: 'https://andrewsacres.com/',
  },

  {
    title: 'Fultongrace',
    description: 'Worked with colleagues to build Fulton Grace site using React/Redux frontend, Tailwind CSS, Django/PostgreSQL backend, REST APIs, JWT auth, Elasticsearch search, responsive design and CI/CD pipelines.',
    tags: ['React', 'Django', 'Terraform', 'Tailwind CSS', 'PostgreSQL','AWS'],
    categories: ['📈 Tableau'],
    github: 'https://github.com/dineshbarri/Wizarding-Analytics-Harry-Potter-Through-Data-',
    live: 'https://fultongrace.com',
    image: '/12.jpg',
  },
  {
    title: 'Thoroughbredford',
    description: 'Developed and managed the Thoroughbred Ford platform with Svelte frontend and Node.js backend, integrating Stripe payments, Google Maps, REST APIs and delivering scalable, high performance solutions.',
    tags: ['Svelte', 'Node', 'MySQL', 'Google Maps',],
    categories: ['📈 Tableau'],
    github: 'https://github.com/dineshbarri/Titanic-Survivors-Analysis-Dashboard',
    live: 'https://www.thoroughbredford.com/',
    image: '/13.jpg',
  },
  {
    title: 'Roistat',
    description: 'Collaborated with a team to develop a dynamic full stack platform using React frontend and Django/Python backend, styled with Bootstrap & AnimateCSS, deployed on AWS for high performance and responsive user experience',
    tags: ['React', 'Python', 'Django', 'Bootstrap','AnimateCSS', 'AWS'],
    categories: ['💾 SQL'],
    github: 'https://github.com/dineshbarri/Netflix_Sql_Analysis',
    live: 'https://roistat.com/',
    image:'/4.jpg'
  },
    {
    title: '123affiches',
    description: 'Collaborated with cross-functional teams to build and maintain a high-traffic eCommerce platform, improving performance through backend optimization, workflows, and ensuring reliable delivery and user experience.',
    tags: ['React', 'Responsive UI Design','Python','Django','REST APIs', 'Git'],
    categories: ['📊 PowerBI', '🧠 ML & Data Science', '💾 SQL'],
    github: 'https://github.com/dineshbarri/ireland-hotel-pricing-ratings-analysis',
    live: 'https://123affiches.123imprim.com/',
    image: '/Screenshot_3.jpg',
  },

    {
    title: 'Fultongrace',
    description: 'Built reusable full-stack components and optimized workflows using containerization, improving development efficiency, consistency, and delivery speed while ensuring high code quality through CI and collaboration.',
    tags: ['React','Next.js','TypeScript','Python','FastAPI','REST APIs', 'Docker'],
    categories: ['📊 PowerBI', '🧠 ML & Data Science', '💾 SQL'],
    github: 'https://github.com/dineshbarri/ireland-hotel-pricing-ratings-analysis',
    live: 'https://fultongrace.com',
    image: '/Screenshot_4.jpg',
  },

      {
    title: 'Centennial Hyundai',
    description: 'Built and optimized a full-stack web platform using React and Python, improving backend performance with caching and query tuning, enhancing frontend efficiency, and delivering real-time analytics dashboards with low latency.',
    tags: ['React', 'Redux','Python','Flask','REST APIs', 'CI/CD','PostgreSQL'],
    categories: ['📊 PowerBI', '🧠 ML & Data Science', '💾 SQL'],
    github: 'https://github.com/dineshbarri/ireland-hotel-pricing-ratings-analysis',
    live: 'https://www.centennialhyundailasvegas.com/',
    image: '/Screenshot_5.jpg',
  },







  // {
  //   title: 'Retail Pulse Dashboard',
  //   description: 'Comprehensive analytics platform empowering business leaders to explore sales, profit, and order trends across categories, time, and regions. Built with Tableau for actionable insights.',
  //   tags: ['Tableau', 'Data Visualization', 'Business Intelligence', 'Analytics'],
  //   categories: ['📈 Tableau'],
  //   github: 'https://github.com/dineshbarri/Retail_Pulse-Dashboard',
  //   live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/RetailPulseDashboard/RetailAnalysisDashboarding',
  //   image: '/project-retail-pulse.png',
  // },
  // {
  //   title: 'Ireland Hotel Analytics Website',
  //   description: 'Interactive analytics dashboard analyzing Irish hospitality market with real-time data visualization. Features interactive maps, price vs quality analysis, advanced filtering, and mobile-responsive design showcasing modern web development excellence.',
  //   tags: ['JavaScript', 'HTML', 'CSS', 'ECharts', 'Leaflet', 'Data Visualization'],
  //   categories: ['🌐 Web Development'],
  //   github: 'https://github.com/dineshbarri/Ireland-Hotel-Analytics-Website',
  //   live: 'https://ireland-hotels-dineshbarri.netlify.app/',
  //   image: '/project-ireland-hotel-web.png',
  // },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in data analytics, machine learning, and AI automation
          </p> */}
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a> */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
