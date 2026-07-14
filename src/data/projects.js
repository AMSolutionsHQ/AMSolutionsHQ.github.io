import sa7a7lyLogo from "@/assets/projects/sa7a7ly-logo.png";
import meacLogo from "@/assets/projects/meac-logo.png";
import tawassLogo from "@/assets/projects/tawass-logo.png";

export const projects = [
  {
    title: "Sa7a7ly",
    description:
      "An AI-powered educational platform that helps students solve, understand, and practice academic questions using intelligent technologies.",
    technologies: [
      "React",
      "Node.js",
      "AI",
      "Python",
      "MongoDB",
    ],
    category: "AI Education",
    image: sa7a7lyLogo,
    url: "https://www.sa7a7ly.online/",
  },

  {
    title: "MEAC Service Portal",
    description:
      "A modern enterprise service portal developed to streamline service management and improve operational efficiency. Our team delivered the complete solution, including software development, deployment, and ongoing operational support.",
    technologies: [
      "React",
      "Node.js",
      "REST API",
      "Cloud",
      "DevOps",
    ],
    category: "Enterprise Software",
    image: meacLogo,
    url: "https://meac-service-portal.vercel.app/login",
  },
 {
    title: "Tawass+",
    description:
      "An AI-powered career and recruitment platform that connects job seekers with opportunities through intelligent profile matching. Users can interact with an AI chatbot powered by Retrieval-Augmented Generation (RAG) for Tawass-related information, conduct AI video interviews, build a dynamic CV profile, and receive real-time notifications when new opportunities match their skills and experience.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "AI",
      "RAG",
      "LLMs",
      "Video Calling",
      "MongoDB",
    ],
    category: "Artificial Intelligence",
    image: tawassLogo,
    url: "",
    disabled: true,

  },
];