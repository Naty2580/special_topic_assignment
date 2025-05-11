// --- FILENAME: src/components/Footer.jsx ---
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Naty2580', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary-dark border-t border-border-dark py-8 text-center">
      <div className="container-custom">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Natnael Tesfaye. All rights reserved.
        </p>
        <p className="text-xs text-text-secondary/70 mt-1">
          Crafted with <span className="text-accent-orange">❤</span> using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;