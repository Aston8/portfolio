import { MdEmail } from "react-icons/md";

const EMAIL = "astonmonteiro04@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-32 text-center text-white"
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
        Let's Connect
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
        Open to software engineering opportunities, collaborations, and exciting projects where I can learn, contribute, and create meaningful solutions.
      </p>

      {/* Email CTA */}
      <div className="mx-auto mt-14 flex max-w-2xl items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex-1 px-6 py-4 text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Email
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 block text-base font-medium text-zinc-200 transition-colors hover:text-white"
          >
            {EMAIL}
          </a>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=astonmonteiro04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition-all duration-300 hover:scale-105"
        >
          <MdEmail size={18} />
          Send Email
        </a>
      </div>
    </section>
  );
}