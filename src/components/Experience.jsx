import { EXPERIENCES } from "../constants";
import { BiBadgeCheck } from "react-icons/bi";
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pt-24 pb-8">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl font-ntr font-bold">
            / experience
        </motion.h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 font-ntr flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1.5}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1.5}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-purple-100">{experience.company}</span>
                        </h6>
                        <div className="mb-4 text-neutral-400">
                            {experience.descriptions.map((description, index) => (
                                <div key={index} className="flex items-start mb-1">
                                    <BiBadgeCheck className="mr-2 text-green-bright w-3 h-5 flex-shrink-0" />
                                    <p>{description}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-bright">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Experience;
