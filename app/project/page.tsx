"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Briefcase } from "lucide-react";

interface Project {
  title: string;
  link: string;
  desc: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Physical AI & Humanoid Robotics Textbook + RAG Chatbot",
    link: "https://github.com/Khadija3111/Physical-AI---Humanoid-Robotics-Book",
    desc: "AI-native robotics textbook built with spec-driven documentation, paired with a RAG chatbot for content-grounded Q&A. Deployed on Vercel with FastAPI backend and vector search.",
    tags: ["Next.js", "FastAPI", "Qdrant", "OpenAI Agents SDK", "Cohere", "RAG"],
    featured: true,
  },
  {
    title: "The Evolution of Todo — Full-Stack App + AI Agent",
    link: "https://github.com/Khadija3111/TODO-APP",
    desc: "Spec-driven full-stack Todo app with an embedded AI agent for smart prioritization, task reminders, and automated workflows. End-to-end from schema design to cloud deployment.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "AI Agents"],
    featured: true,
  },
  {
    title: "E-Commerce Furniture Store",
    link: "https://github.com/Khadija3111/E-com-web-furino",
    desc: "Responsive eCommerce storefront with product management via Sanity CMS, cart logic, and a clean component-driven UI.",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "TypeScript"],
  },
  {
    title: "E-Commerce Store UI",
    link: "https://github.com/Khadija3111/ecommerce-frontend-design",
    desc: "Frontend-only eCommerce design exercise — pixel-perfect responsive layout with reusable components and smooth transitions.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "AI Master Chef Agent",
    link: "https://github.com/Khadija3111/Food-recommending-agent",
    desc: "Conversational AI agent that recommends international recipes based on user preferences, dietary restrictions, and available ingredients.",
    tags: ["Python", "OpenAI Agents SDK", "Prompting"],
  },
  {
    title: "Chatbot with Chainlit",
    link: "https://github.com/Khadija3111/Chatbot",
    desc: "Session-aware conversational chatbot powered by Google Gemini 2.0 Flash. Supports OAuth authentication and is deployment-ready.",
    tags: ["Python", "Chainlit", "Gemini 2.0", "OAuth"],
  },
  {
    title: "Secure Data Encryption App",
    link: "https://github.com/Khadija3111/secure-data-enscryption",
    desc: "CLI app for encrypting and storing sensitive data behind passkey protection — built with Python's cryptography stack.",
    tags: ["Python", "Encryption", "CLI"],
  },
  {
    title: "AI Research Agent",
    link: "https://github.com/Khadija3111/AI-SIMPLE-RESEARCH-AGENT",
    desc: "Lightweight autonomous research agent that searches, summarises, and compiles topic reports using Python and the OpenAI Agents SDK.",
    tags: ["Python", "OpenAI Agents SDK", "UV"],
  },
  {
    title: "Expense Tracker",
    link: "https://github.com/Khadija3111/ExpenseTracker",
    desc: "Clean expense tracking app with category breakdown and monthly summaries to help you stay on budget.",
    tags: ["Python"],
  },
  {
    title: "Personal Library Manager",
    link: "https://github.com/Khadija3111/presonal-lib-manager",
    desc: "CLI tool to catalogue your book collection — add, search, and track reading status across your personal library.",
    tags: ["Python", "CLI"],
  },
];

const tagColors: Record<string, string> = {
  "Next.js":            "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "React":              "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "TypeScript":         "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Tailwind CSS":       "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "FastAPI":            "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "PostgreSQL":         "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "Python":             "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  "OpenAI Agents SDK":  "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "RAG":                "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  "Qdrant":             "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "Cohere":             "bg-teal-400/10 text-teal-200 border-teal-400/20",
  "Sanity CMS":         "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "AI Agents":          "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Gemini 2.0":         "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Encryption":         "bg-rose-500/10 text-rose-300 border-rose-500/20",
  "Prompting":          "bg-purple-400/10 text-purple-300 border-purple-400/20",
};

const defaultTag = "bg-white/5 text-gray-400 border-white/10";

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: Project;
  index: number;
  visible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-5px) scale(1.012) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDelay: `${index * 80}ms`,
        perspective: "600px",
      }}
      className={`
        group relative flex flex-col h-full
        border border-white/10 bg-white/5 rounded-2xl p-5 sm:p-6
        transition-all duration-300 ease-out cursor-default
        hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/10
        ${project.featured ? "ring-1 ring-violet-500/20" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
          Featured
        </span>
      )}

      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-red-500 to-neutral opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="pl-3 flex flex-col flex-1">
        {/* Title + link icon */}
        
         <a href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 group/link mb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-sm sm:text-base font-bold leading-snug group-hover/link:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <ExternalLink
            size={13}
            className="shrink-0 mt-0.5 opacity-40 group-hover/link:opacity-100 group-hover/link:text-violet-400 transition-all"
          />
        </a>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 mb-4">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full border font-medium
                ${tagColors[tag] ?? defaultTag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 md:px-35 py-12 sm:py-16" id="projects">

      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
      <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
      </div>
      <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10">
        Things I've built — from AI-native tools and full-stack apps to quick experiments.
      </p>

      {/* Featured row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
        {featured.map((proj, i) => (
          <ProjectCard key={proj.title} project={proj} index={i} visible={visible} />
        ))}
      </div>

      {/* Rest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {rest.map((proj, i) => (
          <ProjectCard key={proj.title} project={proj} index={i + featured.length} visible={visible} />
        ))}
      </div>

    </section>
  );
}