"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = navItems.find(
              (item) => item.href === `#${entry.target.id}`
            );

            if (current) {
              setActive(current.name);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2 backdrop-blur-xl">
      <ul className="flex items-center gap-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`block rounded-full px-8 py-2.5 text-base font-medium ${
                active === item.name
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}