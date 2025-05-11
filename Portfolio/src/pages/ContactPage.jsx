// --- FILENAME: src/pages/ContactPage.jsx ---
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Naty2580', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourusername', color: 'hover:text-sky-400' },
];

const ContactPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., API call to backend or Formspree)
    alert("Form submission is not implemented in this demo. You would integrate a backend service here.");
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-primary-dark">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle title="Let's Connect" subtitle="Have a project in mind or just want to say hi? Feel free to reach out." />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <AnimatedSection animationClass="animate-slide-in-left" className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent-cyan">Get In Touch</h3>
            <p className="text-text-secondary leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. If you have any questions or just want to chat, don't hesitate to contact me.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:youremail@example.com" className="flex items-center gap-3 text-text-secondary hover:text-accent-cyan transition-colors">
                <FaEnvelope className="text-accent-blue text-xl" />
                <span>natyyo2580@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <FaMapMarkerAlt className="text-accent-blue text-xl" />
                <span>Addis Ababa, Ethiopia </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border-dark">
              <h4 className="text-lg font-semibold text-text-heading mb-3">Find me on:</h4>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`text-text-secondary text-2xl ${social.color} transition-colors duration-300`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationClass="animate-slide-in-right">
            <div className="glassmorphism-card p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-accent-orange mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-primary-dark/50 border border-border-dark text-text-primary p-3 rounded-md focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
                  <input type="email" name="email" id="email" required className="w-full bg-primary-dark/50 border border-border-dark text-text-primary p-3 rounded-md focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">Subject</label>
                  <input type="text" name="subject" id="subject" className="w-full bg-primary-dark/50 border border-border-dark text-text-primary p-3 rounded-md focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Message</label>
                  <textarea name="message" id="message" rows="5" required className="w-full bg-primary-dark/50 border border-border-dark text-text-primary p-3 rounded-md focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;