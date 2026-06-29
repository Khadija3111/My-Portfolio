"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Code2, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Full-stack",
    detail: "Next.js · FastAPI · PostgreSQL · TypeScript",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Brain,
    label: "AI & Agents",
    detail: "OpenAI Agents SDK · RAG · Prompt engineering",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Rocket,
    label: "Ship-focused",
    detail: "Docker · Vercel · Railway · Cloud Run",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 sm:py-16 scroll-mt-20"
    >
      <div className="max-w-3xl px-0">

        {/* Header */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">About me</h2>
        </div>

        {/* Body copy */}
        <div className="space-y-4 mb-8">
          {[
            {
              text: "I'm a developer who builds things end-to-end — from pixel-perfect interfaces to the APIs, databases, and deployments that power them. My core stack is Next.js, TypeScript, Tailwind CSS, and FastAPI, and I'm comfortable owning a feature from design to production.",
              delay: 100,
            },
            {
              text: "Lately I've been deep in AI — building agents with the OpenAI Agents SDK, designing RAG pipelines for grounded question answering, and engineering the prompts and guardrails that make intelligent systems actually reliable in production.",
              delay: 200,
            },
            {
              text: "What I care about most is making things that work well and feel good to use. I'm looking for a team where I can ship real features, grow fast, and help build products that are both technically solid and genuinely useful.",
              delay: 300,
            },
          ].map(({ text, delay }, i) => (
            <p
              key={i}
              style={{ transitionDelay: `${delay}ms` }}
              className={`text-sm sm:text-base leading-relaxed text-muted-foreground transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {highlights.map(({ icon: Icon, label, detail, color, bg }, i) => (
            <div
              key={label}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
              className={`group flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl border
                bg-white/5 border-white/10 hover:border-violet-500/30
                hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1
                transition-all duration-300 cursor-default
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <div className={`p-2 rounded-xl border shrink-0 ${bg}`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}