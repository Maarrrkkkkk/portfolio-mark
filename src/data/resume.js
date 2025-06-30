import { Icons } from "../components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mark Anthony Aguirre",
  initials: "MA",
  url: "https://markanthonyaguirre.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring Front-end Developer dedicated to crafting accessible web experiences that make a positive difference in people's lives.",
  summary:
    "A proactive and detail-oriented professional with a strong sense of duty in every project I undertake. Currently pursuing my Bachelor's degree in Information Technology at Eastern Visayas State University, where I earned recognition as **Best in Thesis/Capstone Project** for my innovative solutions and technical excellence. My courteous approach and commitment to quality are reflected in my project implementations, consistently demonstrating sound judgment and professionalism in leading development initiatives.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Django",
    "Python",
    "SQLite",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Maarrrkkkkk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mark-anthony-aguirre/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Gmail: {
        name: "Send Email",
        url: "mailto:markanthonyaguirre1234@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Eastern Visayas State University - Graduate School",
      href: "#",
      badges: [],
      location: "Tacloban City, Leyte",
      title: "Frontend Developer (Internship)",
      logoUrl: "/evsu-logo.png",
      start: "March 2025",
      end: "June 2025",
      description:
        "Developed a web-based application for the Graduate School of the Eastern Visayas State University.",
    },
  ],
  education: [
    {
      school: "Eastern Visayas State University - Main Campus",
      href: "#",
      degree: "Bachelor of Science in Information Technology (BSIT)",
      logoUrl: "/evsu-logo.png",
      start: "August 2021",
      end: "June 2025",
      achievements: [
        "Academic Achiever",
        "Best in Thesis / Capstone Project",
        "Outstanding-On-The-Job Training (Internship)",
        "Dean's Lister",
      ],
    },
  ],
  projects: [
    {
      title:
        "Enhancing Undergraduate Capstone Projects and Research with Recommender System, Automated Grading, and Scheduling",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "A web-based system modernizing capstone project management at EVSU IT Department. Features **conflict-free scheduling** (Greedy Algorithm), **intelligent adviser-student matching** (Content-Based Filtering), and **automated grading**.",
      technologies: [
        "Django",
        "JavaScript",
        "HTML/CSS",
        "Python",
        "SQLite",
        "GitHub",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/KurtLD/Capstone-System-Project-V3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/capstone-project.jpg",
      video: "",
    },
    {
      title: "Online Academic Archive and Yearbook System",
      href: "#",
      dates: "March 2025 - June 2025",
      active: true,
      description:
        "Developed for Eastern Visayas State University – Graduate School, this platform functions as an **Academic Repository**, allowing students and admin to upload **theses**, **dissertations**, and **re-entry papers** with citation and download tracking.",
      technologies: [
        "Django",
        "JavaScript",
        "HTML/CSS",
        "Python",
        "SQLite",
        "GitHub",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Maarrrkkkkk/Django_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/archive-system.jpg",
      video: "",
    },
  ],
};
