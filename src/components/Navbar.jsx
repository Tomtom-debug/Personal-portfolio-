import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="font-ntr fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#050a17', backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(80, 79, 139, 0.3), rgba(0, 0, 0, 0))' }}>
      <nav className="text-lightest-slate font-ntr font-bold py-6 flex items-center justify-between px-4 md:px-16">
        <div className="flex items-center space-x-4">
          <div className="text-xl">Samuel Tawiah</div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-green-bright">Home</a>
            <a href="#about" className="hover:text-green-bright">About</a>
            <a href="#experience" className="hover:text-green-bright">Experience</a>
            <a href="#projects" className="hover:text-green-bright">Projects</a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
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
