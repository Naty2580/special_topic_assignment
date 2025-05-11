// --- FILENAME: src/components/SkillBadge.jsx ---
const SkillBadge = ({ skill, icon: IconComponent }) => {
    // Level can be used for styling if desired, e.g. progress bar or color coding
    return (
      <div className="flex items-center gap-3 p-3 bg-secondary-dark border border-border-dark rounded-lg shadow-sm hover:shadow-glow-blue/20 hover:border-accent-blue/70 transition-all duration-300">
        {IconComponent && <IconComponent className="text-accent-cyan text-2xl" />}
        <span className="text-text-primary text-sm sm:text-base">{skill}</span>
        {/* Optional: Add a level indicator
        {level && <span className="text-xs text-accent-orange ml-auto">{level}</span>}
        */}
      </div>
    );
  };
  
  export default SkillBadge;