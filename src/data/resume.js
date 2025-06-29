import { Icons } from "../components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mark Anthony Aguirre",
  initials: "MA",
  url: "https://markanthonyaguirre.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring Front-end Developer. Passionate about building practical solutions that improve user experience.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
    "Bootstrap",
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
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
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
        "A web-based system modernizing capstone project management at EVSU IT Department. Features conflict-free scheduling (Greedy Algorithm), intelligent adviser-student matching (Content-Based Filtering), and automated grading.",
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
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Online Academic Archive and Yearbook System",
      href: "#",
      dates: "March 2025 - June 2025",
      active: true,
      description:
        "Developed for Eastern Visayas State University – Graduate School, this platform functions like a university-specific Google Scholar, allowing students and admin to upload theses, dissertations, and re-entry papers with citation and download tracking.",
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
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
};
