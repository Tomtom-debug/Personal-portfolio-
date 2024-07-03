import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className=" text-lightest-slate font-ntr font-bold py-6 mb-20 flex items-center justify-between">
      <div className="ml-16 flex items-center space-x-4">
        <div className="text-xl">Samuel Tawiah</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-green-bright">Home</a>
          <a href="/about" className="hover:text-green-bright">About</a>
          <a href="/services" className="hover:text-green-bright">Services</a>
          <a href="/contact" className="hover:text-green-bright">Contact</a>
          <a href="/contact" className="hover:text-green-bright">Resume</a>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <IoIosMail className="hover:text-green-bright"/>
        <FaLinkedin className="hover:text-green-bright"/>
        <FaGithub className="hover:text-green-bright"/>
      </div>
    </nav>
  );
}

export default Navbar;
