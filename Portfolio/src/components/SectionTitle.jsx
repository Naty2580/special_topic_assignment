// --- FILENAME: src/components/SectionTitle.jsx ---
const SectionTitle = ({ title, subtitle }) => {
    return (
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-3 relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-accent-cyan rounded-full"></span>
        </h2>
        {subtitle && <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-4">{subtitle}</p>}
      </div>
    );
  };
  
  export default SectionTitle;