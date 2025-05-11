// --- FILENAME: src/pages/HobbiesPage.jsx ---
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { FaHiking, FaBookOpen, FaMusic, FaCamera, FaGamepad, FaPaintBrush } from 'react-icons/fa';

const hobbiesData = [
  {
    icon: FaHiking,
    title: 'Hiking & Outdoors',
    description: "Exploring nature's trails rejuvenates my mind and offers fresh perspectives, much like debugging a complex piece of code.",
    bgColor: 'bg-green-600/20',
    borderColor: 'border-green-500'
  },
  {
    icon: FaBookOpen,
    title: 'Reading (Sci-Fi & Tech)',
    description: 'Diving into science fiction novels and tech blogs expands my imagination and keeps me updated with future possibilities.',
    bgColor: 'bg-blue-600/20',
    borderColor: 'border-blue-500'
  },
  {
    icon: FaMusic,
    title: 'Playing Guitar',
    description: 'Strumming melodies and learning new chords is a creative outlet that balances the logical precision of coding.',
    bgColor: 'bg-purple-600/20',
    borderColor: 'border-purple-500'
  },
  {
    icon: FaCamera,
    title: 'Photography',
    description: 'Capturing moments and framing scenes teaches me about composition and detail, valuable skills in UI design.',
    bgColor: 'bg-yellow-600/20',
    borderColor: 'border-yellow-500'
  },
  // Add more hobbies or customize these
  // {
  //   icon: FaGamepad,
  //   title: 'Strategy Games',
  //   description: 'Engaging in strategy games hones my problem-solving skills and long-term planning abilities.',
  //   bgColor: 'bg-red-600/20',
  //  borderColor: 'border-red-500'
  // },
  // {
  //   icon: FaPaintBrush,
  //   title: 'Digital Art',
  //   description: 'Creating digital art allows me to experiment with visuals and colors, enhancing my design intuition.',
  //   bgColor: 'bg-pink-600/20',
  //   borderColor: 'border-pink-500'
  // },
];

const HobbyCard = (props) => {
  const { icon: Icon , title, description, bgColor, borderColor } = props;
  return (
  <div className={`glassmorphism-card p-6 rounded-lg border-l-4 ${borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
      <Icon className={`text-2xl ${borderColor.replace('border-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-semibold text-text-heading mb-2">{title}</h3>
    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
  </div>
  )
};

const HobbiesPage = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-primary-dark">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle title="Beyond the Code" subtitle="What I Do to Recharge and Find Inspiration" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
             <AnimatedSection key={index} animationClass="animate-fade-in-up" className={`delay-${index * 100}`}>
                <HobbyCard {...hobby} />
             </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            These activities not only provide a much-needed break but also contribute to my problem-solving skills and creativity in development.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HobbiesPage;