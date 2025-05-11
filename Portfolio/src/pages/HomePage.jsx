// --- FILENAME: src/pages/HomePage.jsx ---
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';


const HomePage = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-hero-gradient">
  
      
      <div className="relative z-10 container-custom text-center py-20 md:py-32">
        <AnimatedSection animationClass="animate-fade-in-down" className="mb-6">
          <FaCode className="text-5xl md:text-7xl text-accent-cyan mx-auto animate-subtle-beat" />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-heading mb-6">
            Hi, I'm <span className="text-accent-cyan">Natnael Tesfaye</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate-fade-in-up" className="delay-200">
          <div className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-10 h-20 md:h-16"> {/* Fixed height to prevent layout shift */}
            <TypeAnimation
              sequence={[
                'A Passionate Full-Stack Developer.',
                2000,
                'I Build Modern Web Applications.',
                2000,
                'Transforming Ideas into Reality.',
                2000,
                'Always Learning, Always Coding.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
              className="font-mono"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-up" className="delay-400">
          <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
             <Link to="/projects-skills" className="btn btn-primary inline-flex items-center gap-2">
              View My Work <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-primary-dark to-transparent opacity-50"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent-blue/10 rounded-full filter blur-2xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-accent-cyan/10 rounded-full filter blur-2xl animate-pulse opacity-30 animation-delay-2000"></div>

    </div>
  );
};

export default HomePage;