// --- FILENAME: src/components/ProjectCard.jsx ---
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl, techStack, githubUrl, liveUrl }) => {
  return (
    <div className="glassmorphism-card overflow-hidden group transform hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col h-full">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl lg:text-2xl font-semibold text-accent-cyan mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow">{description}</p>
        <div className="mb-4">
          <h4 className="text-xs text-text-secondary uppercase font-semibold mb-1">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="bg-primary-dark/50 text-accent-blue text-xs px-2 py-1 rounded-full border border-accent-blue/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-border-dark/50">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 flex items-center gap-1"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub size={20} /> GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 flex items-center gap-1"
              aria-label={`Live demo of ${title}`}
            >
              <FaExternalLinkAlt size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;