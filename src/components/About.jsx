import aboutImg from "../assets/profilePic.jpg"
import { ABOUT_TEXT } from "../constants"
import { SlControlPlay } from "react-icons/sl";

const About = () => {
  return (
    <div className= "border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl font-ntr font-bold">
            / about
            <span className="text-green-bright font-ntr" > me</span>
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className= "rounded-2xl w-1/2 lg:w-1/2" src={aboutImg} alt="My Image" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 font-ntr text-2xl ">{ABOUT_TEXT}</p>
                </div>
                <div className="flex justify-center lg:justify-start items-center mt-4 ml-6">
                    <SlControlPlay className="mr-2 text-green-bright text-xs w-3 h-10" />
                    <a
                    href="../../public/resume.pdf"
                    download
                    className="px-1 py-3 text-green-bright font-ntr text-2xl"
                    >
                    Download Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About