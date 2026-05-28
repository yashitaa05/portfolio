import portfolioImg from './portfolio.png';
import captchaAccessibilityImg from './captcha.png';
import blogimg from './blog.png';

export const projects =  [
  {
    title: "Portfolio Website",
    description: "A modern responsive personal portfolio website built using React and Tailwind CSS.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yashitaa05/portfolio",
    live:"https://yashitaportfolio.vercel.app/"
  },
 {
  title: "CAPTCHA Accessibility Analyzer",
  description: "An accessibility-focused project that analyzes CAPTCHA usability using OCR techniques to improve accessibility for users.",
  image: captchaAccessibilityImg,
  tech: ["HTML", "CSS", "Python", "OCR", "Tesseract", "OpenCV"],
  github: "https://github.com/yashitaa05/captcha-accessibility-analyzer",
  live: "https://your-project.vercel.app",
},
{
  title: "MERN Blog Website",
  description: "A full-stack MERN Blog Website with secure authentication, responsive design, and complete CRUD functionality for managing blogs/products. Built using React.js, Node.js, Express.js, and MongoDB Atlas to track job and internship applications, helping users manage application status efficiently.",
  image: blogimg,
  tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
  github: "https://github.com/yashitaa05/blogs",
  live: "https://blog-rgun.onrender.com/",
},
];