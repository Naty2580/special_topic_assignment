// --- FILENAME: src/components/AnimatedSection.jsx ---
import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, className = '', animationClass = 'animate-fade-in-up', threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`} // Initial opacity-0 for smoother transition
    >
      {children}
    </div>
  );
};

export default AnimatedSection;