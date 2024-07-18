import project1 from "../assets/projects/project-1.mp4";
import project2 from "../assets/projects/project-2.mp4";
import project3 from "../assets/projects/project-3.mp4";
import project4 from "../assets/projects/project-4.mp4";
import project5 from "../assets/projects/project-5.mp4";

export const HERO_CONTENT = `I'm a Computer Science student at Cornell University, where I fuel my passion for software engineering, programming languages, and machine learning. With every line of code, I strive to push the boundaries of technology, crafting innovative solutions and exploring the endless possibilities of the digital world.`;

export const ABOUT_TEXT = `I am currently an Undergraduate Research Assistant under the Nexus Scholarship Programme at Lai's Lab, working with Assistant Professor William Lai in the Department of Molecular Biology and Genetics at Cornell University. Beyond my technical pursuits, I find joy in life's simpler pleasures. I'm an avid follower of Jesus, and in my free time, I love playing video games with friends, catching the latest soccer matches, reading captivating books, and staying updated with news from Ghana. Balancing my professional ambitions with personal interests, I continually seek to grow both as a developer and as an individual.`;
export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Undergraduate Research Assistant",
    company: "Lai’s Lab",
    descriptions: ["Contributing to the Computational team in Lai's Lab, focusing on developing predictive models to explore the relationship between motif sequences and protein domain families using high-resolution chromatin binding profiles.", "Building and training a machine learning model to predict motif-domain associations.", "Visualized and analyzed data trends and model performance using Matplotlib",],
    technologies: ["Torch", "Numpy", "Matplotlib", "Scikit-learn", "Pandas"],
  },
];

export const PROJECTS = [
  {
    title: "RideShare-X",
    image: project1,
    description:
      "A fully functional iOS app with Google SSO tailored for Cornell University students, facilitating easy and cost-effective transportation",
    technologies: ["Python, Flask, SQLAlchemy, Docker, Google Cloud, SwiftUI, Postman, AWS"],
    type: "video",
    link: "https://github.com/Tomtom-debug/RideShare-X",
  },
  {
    title: "Active Pulse",
    image: project2,
    description:
      "A mobile-responsive blogging website where fitness enthusiasts, health experts, and beginners unite to share journeys, tips, and achievements.",
    technologies: ["React, HTML, CSS, Javascript"],
    type: "video",
    link: "https://github.com/Tomtom-debug/active-pulse",
  },
  {
    title: "Interactive image selection App",
    image: project3,
    description:
      "An Enhanced image selection application with an ”intelligent scissors” tool to trace edges using Dijkstra’s shortest path algorithm, built with Java",
    technologies: ["Java, Swing, GUI"],
    type: "video",
    link: "https://www.youtube.com/watch?v=tslHlKmb9GA",
  },
  {
    title: "Alien Invaders Game",
    image: project4,
    description:
      "A Space Invaders clone with Integrated player movement controls, alien movement, firing mechanics, and collision detection.",
    technologies: [" Python, Kivy, GUI  "],
    type: "video",
    link: "https://youtu.be/0IfAheGylZw",
  },
  {
    title: "Connect-N Game",
    image: project5,
    description:
      "A Connect-N game in Python with customizable boards and win conditions, including a graphical user interface (GUI) and AI player.",
    technologies: ["Python"],
    type: "video",
    link: "https://youtu.be/vKJF0hPFdgs?si=I0fnAEAEHxYEj0t2",
  },
];

