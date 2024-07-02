import logo from "../assets/samuelTawiahLogo.jpg";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="ml-16 flex items-center space-x-4"> 
            <div className="text-xl font-bold">Samuel Tawiah</div> 
            <div className="flex space-x-4">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/services" className="hover:text-gray-400">Services</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
            </div>
        </div>
        <div className= "m-8 flex items-center justify-center gap-4 text-2xl">
            <IoIosMail />
            <FaLinkedin />
            <FaGithub />
        </div>
    </nav>

  )
}

export default Navbar