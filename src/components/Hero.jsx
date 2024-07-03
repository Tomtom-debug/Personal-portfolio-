import { HERO_CONTENT } from "../constants";
import bitEmoji from "../assets/SamuelBit.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-10 tracking-tight lg:mt-16 lg:text-5xl text-6xl font-bold font-ntr">hi, Samuel here.</h1>
            <span className="mb-4 text-4xl tracking-tight text-gray-600 font-ntr">
              Contributing and building stuff brings me joy.
            </span>
            <span className="bg-gradient-to-r bg-green-bright bg-clip-text text-4xl tracking-tight text-transparent font-ntr">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl text-2xl py-6 font-light tracking-tighter font-ntr">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="w-full lg:w-3/4 flex justify-center lg:ml-16 lg:-mt-10"> 
            <img src={bitEmoji} alt="Bit Emoji" className="w-3/4 max-w-full h-auto" /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
