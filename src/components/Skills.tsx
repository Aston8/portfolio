import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

import SkillItem from "./SkillItem";

const skills = [
  { name: "Java", icon: <FaJava size={28} /> },
  { name: "JavaScript", icon: <SiJavascript size={28} /> },
  { name: "Python", icon: <FaPython size={28} /> },
  { name: "React", icon: <FaReact size={28} /> },

  { name: "Node.js", icon: <FaNodeJs size={28} /> },
  { name: "Express.js", icon: <SiExpress size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },

  { name: "MySQL", icon: <SiMysql size={28} /> },
  { name: "MongoDB", icon: <SiMongodb size={28} /> },
  { name: "Git", icon: <FaGitAlt size={28} /> },
  { name: "Postman", icon: <SiPostman size={28} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[1200px] px-10 py-28 text-white"
    >
      <h2 className="text-center text-5xl font-bold">
        Technology Stack
      </h2>

      <div className="mx-auto mt-4 h-px w-40 bg-white/20" />

      <div className="mt-20 flex flex-col items-center gap-16">
        {/* Row 1 */}
        <div className="grid w-full max-w-[1100px] grid-cols-4">
          {skills.slice(0, 4).map((skill) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid w-[75%] grid-cols-3">
          {skills.slice(4, 7).map((skill) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid w-full max-w-[1100px] grid-cols-4">
          {skills.slice(7, 11).map((skill) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}