import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1150px] px-10 pt-44 pb-24 text-white"
    >
      <h1 className="text-6xl font-bold tracking-tight">
        Aston Monteiro,
      </h1>

      <p className="mt-3 text-xl italic text-zinc-400">
        Computer Science Engineering Student × Full-Stack Developer
      </p>

      <div className="mt-8 h-px w-full bg-white/20" />

      <div className="mt-10 max-w-[900px] space-y-8 text-[18px] leading-10 text-zinc-300">
        <p>
          Hey, I'm Aston, a Computer Science Engineering student at
          St. Joseph Engineering College, Mangaluru. I enjoy building
          full-stack applications and transforming ideas into real-world
          products. My primary focus is on developing scalable,
          efficient, and user-friendly web applications using modern
          technologies.
        </p>

        <p>
          I work with React, Next.js, Node.js, Express.js, MySQL, and
          MongoDB, and I'm constantly exploring new tools and
          technologies to improve my development skills. I'm passionate
          about problem-solving, continuous learning, and building
          projects that help me grow as a developer.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-5">
        <a
          href="https://github.com/Aston8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-md transition hover:border-white/20"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/aston-monteiro-176bb0321"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-md transition hover:border-white/20"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
}