import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10"> 
      <nav className="text-lightest-slate font-ntr font-bold py-6 mb-20 flex items-center justify-between">
        <div className="ml-16 flex items-center space-x-4">
          <div className="text-xl">Samuel Tawiah</div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-green-bright">Home</a>
            <a href="#about" className="hover:text-green-bright">About</a>
            <a href="#experience" className="hover:text-green-bright">Experience</a>
            <a href="#projects" className="hover:text-green-bright">Projects</a>
          </div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="mailto:samueltawiah2003@gmail.com" className="hover:text-green-bright">
            <IoIosMail />
          </a>
          <a href="https://www.linkedin.com/in/samuel-tawiah/" target="_blank" rel="noopener noreferrer" className="hover:text-green-bright">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Tomtom-debug" target="_blank" rel="noopener noreferrer" className="hover:text-green-bright">
            <FaGithub />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
