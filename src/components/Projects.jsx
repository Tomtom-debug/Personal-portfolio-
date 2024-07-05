import React from 'react';
import { PROJECTS } from "../constants";
import { AiFillGithub } from 'react-icons/ai';
import { motion } from "framer-motion"


const iconVariants= (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});

const Projects = () => {
  return (
    <div className="pb-8">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl font-ntr font-bold">
        / projects
      </motion.h1>
      <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      className="mt-8 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-ntr">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate" 
            className="card shadow-md rounded-lg overflow-hidden border border-neutral-800">
            <img src={project.image} alt="project image" className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-lg text-green-bright">{project.title}</h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <AiFillGithub className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                  </a>
              </div>
              <p className="text-sm mb-2">{project.description}</p>
              <p className="text-sm">
                {project.technologies.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
