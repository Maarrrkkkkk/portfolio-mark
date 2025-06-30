import React, { useEffect, useState } from "react";
import { Icons } from "./icons";

const skillIconMap = {
  HTML: "html",
  CSS: "css",
  JavaScript: "javascript",
  React: "react",
  "Tailwind CSS": "tailwind",
  Bootstrap: "bootstrap",
  Git: "git",
  Django: "django",
  Python: "python",
  SQLite: "sqlite",
};

export function SkillCarousel({ skills }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="flex gap-4  justify-center items-center flex-wrap">
      {skills.map((skill, idx) => {
        const iconKey = skillIconMap[skill] || null;
        const Icon = iconKey && Icons[iconKey] ? Icons[iconKey] : Icons.globe;
        return (
          <div
            bg-
            key={skill + idx}
            className={
              idx === current
                ? "scale-125 transition-transform duration-300"
                : "opacity-60 transition-opacity duration-300"
            }
            title={skill}
          >
            <Icon size={32} />
          </div>
        );
      })}
    </div>
  );
}
