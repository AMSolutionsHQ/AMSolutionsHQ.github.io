import sa7a7lyLogo from "@/assets/projects/sa7a7ly-logo.png";
import meacLogo from "@/assets/projects/meac-logo.png";

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
    url: "https://www.sa7a7ly.online/", // Replace with your actual website
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
    title: "IoT Monitoring System",
    description:
      "A connected IoT solution combining embedded devices, sensors, and cloud monitoring.",
    technologies: [
      "Embedded C",
      "IoT",
      "Cloud",
    ],
    category: "Embedded Systems",
    image: null,
    url: "#",
  },
];