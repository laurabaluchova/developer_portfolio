import { FaGithub } from 'react-icons/fa';


const Footer = () => {
    
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://github.com/laurabaluchova"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-white hover:text-gray-600 transition duration-300"
      >
        <FaGithub size={32} />        
      </a>
    </div>
  );
};

export default Footer;

