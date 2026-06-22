import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Flight Booking Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "SerpAPI",
      "Tailwind CSS",
    ],
    description:
      "Developed a full-stack flight booking platform enabling users to search, compare, and book flights using real-time airline data. Integrated SerpAPI for dynamic flight information, implemented secure JWT authentication, and built booking management workflows including seat selection, booking history, and cancellation features.",
    github: "https://github.com/Aston8/flight-booking-app",
  },

  {
    title: "Food Delivery Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redux",
      "Tailwind CSS",
    ],
    description:
      "Built a modern food delivery platform allowing users to browse restaurants, explore menus, place orders, and track order history. Implemented secure authentication, user profile management, cart functionality, ratings, reviews, and MongoDB-based data models for scalable order management.",
    github: "https://github.com/Aston8/food-delivery-app",
  },

  {
    title: "Campus Complaint Tracker",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Tailwind CSS",
    ],
    description:
      "Developed an AI-powered complaint management platform that streamlines student complaint submission and resolution workflows. Integrated Google Gemini API for complaint classification, implemented role-based access control, and built dashboards, analytics, and tracking systems for administrators and students.",
    github: "https://github.com/Aston8/complaint-tracker",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1200px] px-10 py-28 text-white"
    >
      <h2 className="text-center text-5xl font-bold">
        Featured Projects
      </h2>

      <div className="mx-auto mt-4 h-px w-40 bg-white/20" />

      <div className="mt-16 space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-zinc-900/20 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/30"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-4xl leading-8 text-zinc-300">
              {project.description}
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:border-white/20 hover:bg-white/5"
              >
                <FaGithub />
                GitHub
              </a>

              {/*
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:border-white/20 hover:bg-white/5"
              >
                Live Demo
              </a>
              */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}