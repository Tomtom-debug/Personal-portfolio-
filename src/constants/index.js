import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a Computer Science student at Cornell University, where I fuel my passion for software engineering, programming languages, and machine learning. With every line of code, I strive to push the boundaries of technology, crafting innovative solutions and exploring the endless possibilities of the digital world.`;

export const ABOUT_TEXT = `I am currently an Undergraduate Research Assistant under the Nexus Scholarship Programme at Lai's Lab, working with Assistant Professor William Lai in the Department of Molecular Biology and Genetics at Cornell University. Beyond my technical pursuits, I find joy in life's simpler pleasures. I'm an avid follower of Jesus, and in my free time, I love playing video games with friends, catching the latest soccer matches, reading captivating books, and staying updated with the news from Ghana. Balancing my professional ambitions with personal interests, I continually seek to grow both as a developer and as an individual.`;
export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Undergraduate Research Assistant",
    company: "Lai’s Lab",
    descriptions: ["Contributing to the Computational team in Lai's Lab, focusing on developing predictive models to explore the relationship between motif sequences and protein domain families using high-resolution chromatin binding profiles.", "Building and training a machine learning model to predict motif-domain associations.", "Preprocessed data, Visualized data trends and model performance, effectively communicating results to the research team.",],
    technologies: ["Torch", "Numpy", "Matplotlib", "Scikit-learn", "Pandas"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
