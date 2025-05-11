// --- FILENAME: src/pages/ProjectsSkillsPage.jsx ---
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import AnimatedSection from '../components/AnimatedSection';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiGit } from 'react-icons/si';

const skillsData = {
  frontend: [
    { name: 'React', icon: FaReact, level: 'Advanced' },
    { name: 'JavaScript (ES6+)', icon: FaJsSquare, level: 'Advanced' },
    { name: 'TypeScript', icon: SiTypescript, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
    { name: 'HTML5', icon: FaHtml5, level: 'Expert' },
    { name: 'CSS3', icon: FaCss3Alt, level: 'Expert' },
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs, level: 'Intermediate' },
    { name: 'Express.js', icon: SiExpress, level: 'Intermediate' },
    { name: 'Python (Flask/Django)', icon: FaPython, level: 'Intermediate' },
    { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate' },
  ],
  toolsDevOps: [
    { name: 'Git & GitHub', icon: SiGit, level: 'Advanced' },
    { name: 'Docker', icon: FaDocker, level: 'Beginner' },
    { name: 'AWS (S3, EC2)', icon: FaAws, level: 'Beginner' },
    { name: 'VS Code', icon: FaTools, level: 'Expert' },
  ],
  // You can add more categories like 'Design', 'Soft Skills' etc.
};

const projectsData = [
  {
    title: 'E-commerce Platform ',
    description: 'A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin dashboard. Built with the MERN stack.',
    imageUrl: 'https://via.placeholder.com/600x400/101820/06B6D4?text=ShopSphere+Project',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux'],
    githubUrl: 'https://github.com/Naty2580',
    liveUrl: '#', // Replace with actual URL
  },
  {
    title: 'Task Management App ',
    description: 'A Kanban-style task management application for individuals and teams. Features drag-and-drop functionality and real-time updates.',
    imageUrl: 'https://via.placeholder.com/600x400/101820/3B82F6?text=TaskFlow+Project',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/Naty2580',
    liveUrl: '#',
  },
  {
    title: 'Personal Portfolio v2',
    description: 'This very portfolio website, designed to showcase my skills and projects with a modern, dark aesthetic. Focus on clean UI/UX and responsiveness.',
    imageUrl: 'https://via.placeholder.com/600x400/101820/F59E0B?text=Portfolio+Project',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    githubUrl: 'https://github.com/Naty2580',
    // liveUrl: '#', // It's this site!
  },
  // Add more projects as needed
];

const SkillCategory = ({ title, skills, icon: CategoryIcon }) => (
  <AnimatedSection className="mb-12">
    <h3 className="text-2xl font-semibold text-accent-blue mb-6 flex items-center gap-2">
      {CategoryIcon && <CategoryIcon className="text-2xl" />}
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} level={skill.level} />
      ))}
    </div>
  </AnimatedSection>
);


const ProjectsSkillsPage = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-primary-dark">
      {/* Skills Section */}
      <section className="container-custom mb-16 md:mb-24">
        <AnimatedSection>
          <SectionTitle title="My Arsenal" subtitle="The Technologies and Tools I Master" />
        </AnimatedSection>
        
        <SkillCategory title="Frontend Development" skills={skillsData.frontend} icon={FaReact} />
        <SkillCategory title="Backend Development" skills={skillsData.backend} icon={FaDatabase} />
        <SkillCategory title="Tools & DevOps" skills={skillsData.toolsDevOps} icon={FaTools} />
        {/* You can add a "Currently Learning" or "Soft Skills" section here */}
        <AnimatedSection className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-accent-orange mb-6 flex items-center justify-center gap-2">
                <FaBrain className="text-2xl" />
                Always Evolving
            </h3>
            <p className="text-text-secondary max-w-xl mx-auto">
                I'm a firm believer in lifelong learning. Currently, I'm diving deeper into [mention a technology you're learning, e.g., Serverless Architectures, WebAssembly, or a new framework].
            </p>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section className="bg-secondary-dark/30 py-16 md:py-24">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle title="Featured Projects" subtitle="A Selection of My Best Work" />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <AnimatedSection key={index} animationClass="animate-fade-in-up" className={`delay-${index * 100}`}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 text-center">
            <a href="https://github.com/Naty2580?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View More on GitHub
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSkillsPage;