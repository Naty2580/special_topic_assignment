// --- FILENAME: src/pages/AboutPage.jsx ---
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import {
  FaUserAstronaut, // For "Who I Am"
  FaRocket,         // For "My Journey"
  FaSeedling,       // For a point in journey or "Growth"
  FaLightbulb,      // For "Initial Spark" or "Philosophy"
  FaCode,           // For "Coding Philosophy"
  FaUserCheck,      // For "User-Centric"
  FaInfinity,       // For "Continuous Learning"
  FaMountain,       // For "Challenges" or "Hiking hobby"
  FaBookReader,     // For "Reading hobby"
  FaGuitar,         // For "Music hobby"
  // You can import more icons as needed for your specific journey points/hobbies
} from 'react-icons/fa';
// import profileImage from '../assets/images/profile.jpg'; // Your actual profile image

const AboutPage = () => {
  // Keyframes for tilt animation for the profile image border (already in previous version, good to keep)
  const keyframesTilt = `
    @keyframes tilt {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(0.5deg); }
      75% { transform: rotate(-0.5deg); }
    }
  `;
  const animateTiltStyle = {
    animation: 'tilt 10s infinite linear'
  };

  const journeyMilestones = [
    {
      icon: FaLightbulb,
      title: "The Spark",
      description: "My coding journey ignited with a fascination for [e.g., how websites came alive / solving my first logical puzzle]. That curiosity became my compass.",
      color: "text-[#F59E0B]" // accent-orange
    },
    {
      icon: FaSeedling,
      title: "Growth & Discovery",
      description: "From basic scripts to complex applications, every project has been a learning ground, shaping my problem-solving approach and technical toolkit.",
      color: "text-[#06B6D4]" // accent-cyan
    },
    {
      icon: FaRocket,
      title: "The Present Drive",
      description: "Now, I focus on building impactful, user-centric digital experiences, constantly exploring new tech and pushing creative boundaries.",
      color: "text-[#3B82F6]" // accent-blue
    },
  ];

  const coreValues = [
    {
      icon: FaCode,
      text: "Crafting Clean & Scalable Code",
      color: "text-[#06B6D4]"
    },
    {
      icon: FaUserCheck,
      text: "Prioritizing User-Centric Design",
      color: "text-[#3B82F6]"
    },
    {
      icon: FaInfinity,
      text: "Embracing Continuous Learning & Innovation",
      color: "text-[#F59E0B]"
    },
  ];

  const hobbiesHighlights = [
    { icon: FaMountain, name: "Exploring Trails", description: "Recharges my mind, finds new perspectives." },
    { icon: FaBookReader, name: "Sci-Fi & Tech Reads", description: "Expands imagination, stays current." },
    { icon: FaGuitar, name: "Strumming Melodies", description: "Balances logic with creativity." },
  ];

  return (
    <section className="bg-[#0A0F14] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"> {/* bg-primary-dark, section paddings */}
      <style>{keyframesTilt}</style> {/* Inject keyframes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* container-custom */}
        
        <AnimatedSection>
          <SectionTitle title="Decoding Me" subtitle="More Than Just Lines of Code" />
        </AnimatedSection>

        {/* --- Top Section: Profile Image & Intro Statement --- */}
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          <AnimatedSection slideDirection="left" className="md:col-span-5 lg:col-span-4">
            <div className="relative group mx-auto md:mx-0 max-w-sm">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] rounded-xl blur-md opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300" /* from-accent-cyan to-accent-blue */
                style={animateTiltStyle} // Apply tilt animation
              ></div>
              <img
                // src={profileImage} // Replace with your actual image
                src="https://via.placeholder.com/400x500/101820/E6EDF3?text=Your+Awesome+Photo" // Placeholder
                alt="Natnael Tesfaye - Developer"
                className="relative w-full rounded-xl shadow-2xl object-cover aspect-[4/5]"
              />
               <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 bg-[#3B82F6]/10 rounded-full filter blur-xl opacity-70 -z-10"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection slideDirection="right" className="md:col-span-7 lg:col-span-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F6] mb-4"> {/* text-text-heading */}
              Hi, I'm <span className="text-[#06B6D4]">Natnael Tesfaye</span>.
            </h1>
            <p className="text-xl lg:text-2xl text-[#9CA3AF] mb-6 font-light leading-relaxed"> {/* text-text-secondary */}
              A <strong className="font-semibold text-[#E5E7EB]">digital craftsman</strong> and <strong className="font-semibold text-[#E5E7EB]">problem solver</strong>, I transform complex ideas into elegant and efficient <strong className="text-[#06B6D4] font-semibold">web solutions</strong>. My passion lies at the intersection of logic, creativity, and cutting-edge technology.
            </p>
            <p className="text-lg text-[#9CA3AF]"> {/* text-text-secondary */}
                Driven by curiosity, I'm on a constant quest to learn, innovate, and build software that makes a difference.
            </p>
          </AnimatedSection>
        </div>

        {/* --- My Journey Section --- */}
        <AnimatedSection className="mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] text-center mb-10 md:mb-12 relative inline-block left-1/2 -translate-x-1/2">
            My Coding Odyssey
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] rounded-full"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {journeyMilestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 150} slideDirection="up">
                <div className="bg-[#101820]/70 backdrop-blur-sm border border-[#1E293B] p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.3)] hover:border-[#06B6D4]/50 transition-all duration-300 h-full flex flex-col text-center">
                  <milestone.icon className={`text-4xl ${milestone.color} mx-auto mb-4`} />
                  <h3 className={`text-xl font-semibold ${milestone.color} mb-2`}>{milestone.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed flex-grow">{milestone.description}</p> {/* text-text-secondary */}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
        
        {/* --- Core Values / Coding Ethos Section --- */}
        <AnimatedSection className="mb-16 md:mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] text-center mb-10 md:mb-12 relative inline-block left-1/2 -translate-x-1/2">
            My Coding Ethos
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#F59E0B] to-[#06B6D4] rounded-full"></span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {coreValues.map((value, index) => (
                 <AnimatedSection key={index} delay={index * 100} slideDirection="left">
                    <div className="flex items-center p-4 bg-[#101820]/50 border border-[#1E293B] rounded-lg shadow-md hover:bg-[#101820]/80 transition-colors duration-300">
                        <value.icon className={`text-3xl ${value.color} mr-4`} />
                        <p className="text-lg text-[#E5E7EB]">{value.text}</p> {/* text-text-primary */}
                    </div>
                 </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* --- Beyond The Screen Section --- */}
         <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] text-center mb-10 md:mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Beyond The Keyboard
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] rounded-full"></span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbiesHighlights.map((hobby, index) => (
              <AnimatedSection key={index} delay={index * 100} slideDirection="up">
                <div className="bg-[#101820]/40 backdrop-blur-xs border border-[#1E293B]/70 p-5 rounded-lg text-center group hover:scale-105 transition-transform duration-300">
                  <hobby.icon className="text-3xl text-[#9CA3AF] group-hover:text-[#06B6D4] transition-colors duration-300 mx-auto mb-3" />
                  <h4 className="text-md font-semibold text-[#E5E7EB] mb-1">{hobby.name}</h4> {/* text-text-primary */}
                  <p className="text-xs text-[#9CA3AF]">{hobby.description}</p> {/* text-text-secondary */}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-[#9CA3AF] mt-8 max-w-xl mx-auto text-sm"> {/* text-text-secondary */}
            These pursuits fuel my creativity and provide fresh perspectives essential for innovative development.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default AboutPage;