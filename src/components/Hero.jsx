import { HERO_CONTENT } from "../constants";
import bitEmoji from "../assets/SamuelBit.png";
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

const container = (delay) =>({
  hidden: { x: -100, opacity: 0 },
  visible:{
    x: 0,
    opacity: 1,
    transition:{duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              id="home"
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="pb-10 tracking-tight lg:mt-16 lg:text-5xl text-6xl font-bold font-ntr">
              hi, Samuel here.
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="mb-4 text-2xl tracking-tight text-gray-600 font-ntr">
              learning and creating new stuff brings me joy.
            </motion.span>
            <motion.span 
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="bg-gradient-to-r bg-green-bright bg-clip-text text-xl tracking-tight text-transparent font-ntr">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000, // Delay
                  'Software Engineer',
                  2000, // Delay
                  'ML Enthusiast',
                  2000, // Delay
                  'Follower of Jesus',
                  2000, // Delay
                  'Soccer Fan',
                  2000, // Delay
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p 
              variants={container(1.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="my-2 max-w-xl text-2xl py-6 font-light tracking-tighter font-ntr">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="w-full lg:w-3/4 flex justify-center lg:ml-16 lg:-mt-10"> 
            <motion.img 
              initial={{x: 100, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              viewport={{ once: false, amount: 0.5 }}
              src={bitEmoji} 
              alt="Bit Emoji" 
              className="w-3/4 max-w-full h-auto" 
            /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
