"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Zap } from "lucide-react";

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

type SkillCategory = "ai" | "frontend" | "backend" | "devops" | "tools";

interface Skill {
  name: string;
  sub?: string;
  level: number;
  category: SkillCategory;
}

const skills: Skill[] = [
  { name: "HTML / CSS / JavaScript", sub: "Semantic markup & modern JS", level: 90, category: "frontend" },
  { name: "TypeScript", sub: "Types & generics", level: 80, category: "frontend" },
  { name: "React / Next.js", sub: "SSR & App Router", level: 90, category: "frontend" },
  { name: "Tailwind CSS", sub: "Design-to-code & responsive layouts", level: 88, category: "frontend" },
  { name: "Python (for AI)", sub: "Scripting & data handling", level: 65, category: "ai" },
  { name: "AI Agents (OpenAI Agents SDK)", sub: "Prototyping assistants & pipelines", level: 75, category: "ai" },
  { name: "OpenAI & Prompting", sub: "Prompt design & system messages", level: 70, category: "ai" },
  { name: "AI Driven Development", sub: "Building production apps using AI", level: 80, category: "ai" },
  { name: "RAG Chatbots", sub: "Retrieval-augmented generation", level: 80, category: "ai" },
  { name: "Vector Databases", sub: "Embeddings & semantic search", level: 55, category: "ai" },
  { name: "FastAPI", sub: "REST APIs & async endpoints", level: 70, category: "backend" },
  { name: "API Design", sub: "OpenAPI, request/response modeling", level: 72, category: "backend" },
  { name: "Authentication", sub: "JWT, OAuth basics", level: 65, category: "backend" },
  { name: "Backend Architecture", sub: "Layered & modular design", level: 60, category: "backend" },
  { name: "PostgreSQL", sub: "Schema design & queries", level: 60, category: "backend" },
  { name: "SQLModel / SQLAlchemy", sub: "ORM & data modeling", level: 58, category: "backend" },
  { name: "Git & GitHub", sub: "Branching, PRs, collaboration", level: 70, category: "tools" },
  { name: "Sanity CMS", sub: "Content modeling & GROQ", level: 50, category: "tools" },
  { name: "Cursor", sub: "AI-powered code editor", level: 80, category: "tools" },
  { name: "Spec-Driven Development", sub: "Building from specifications", level: 65, category: "tools" },
  { name: "Pytest", sub: "Unit & API testing", level: 55, category: "tools" },
  { name: "Docker", sub: "Containerizing apps", level: 60, category: "devops" },
  { name: "Docker Compose", sub: "Multi-service setups", level: 55, category: "devops" },
  { name: "Cloud Deployment", sub: "Railway, Vercel, Cloud Run", level: 58, category: "devops" },
];

const categories: { label: string; value: SkillCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI & Agents", value: "ai" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "DevOps", value: "devops" },
  { label: "Tools", value: "tools" },
];

const categoryMeta: Record<SkillCategory | "all", { accent: string; bar: string }> = {
  all:      { accent: "from-neutral-500 to-red-500",   bar: "from-neutral-500 to-red-600" },
  ai:       { accent: "from-emerald-500 to-violet-500", bar: "from-emerald-500 to-violet-500" },
  frontend: { accent: "from-violet-500 to-blue-500",   bar: "from-violet-600 to-blue-500" },
  backend:  { accent: "from-blue-500 to-cyan-500",     bar: "from-blue-500 to-cyan-500" },
  devops:   { accent: "from-orange-500 to-rose-500",   bar: "from-orange-500 to-rose-500" },
  tools:    { accent: "from-pink-500 to-violet-500",   bar: "from-pink-500 to-violet-500" },
};

const tagMeta: Record<string, string> = {
  "Next.js":              "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "React":                "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "TypeScript":           "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Tailwind CSS":         "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "AI Agents":            "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "Prompt Engineering":   "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  "Context Engineering":  "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "FastAPI":              "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "Git":                  "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Docker":               "bg-blue-600/10 text-blue-300 border-blue-600/20",
  "Python":               "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  "Figma → Code":         "bg-pink-500/10 text-pink-300 border-pink-500/20",
};

const defaultTagStyle = "bg-white/5 text-gray-300 border-white/10";

const summaryLines = [
  { icon: "⚡", label: "Frontend", detail: "Next.js, React, TypeScript, Tailwind CSS — pixel-perfect UIs shipped fast." },
  { icon: "🤖", label: "AI & Agents", detail: "OpenAI Agents SDK, RAG chatbots, prompt & context engineering." },
  { icon: "🔧", label: "Backend", detail: "FastAPI, PostgreSQL, SQLModel — clean REST APIs and async pipelines." },
  { icon: "🚀", label: "DevOps", detail: "Docker, Vercel, Railway, Cloud Run — from local to live." },
];

function SkillCard({
  skill,
  index,
  visible,
  barColor,
  isDark,
}: {
  skill: Skill;
  index: number;
  visible: boolean;
  barColor: string;
  isDark: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-4px) scale(1.012) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${index * 60}ms`, perspective: "600px" }}
      className={`
        flex flex-col sm:flex-row items-start sm:items-center justify-between
        p-3 sm:p-4 rounded-2xl gap-3 sm:gap-0 cursor-default
        transition-all duration-300 ease-out
        ${isDark
          ? "bg-white/5 border border-white/10 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
          : "bg-gray-100 border border-gray-200 hover:border-violet-400/40 hover:shadow-md"
        }
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
    >
      <div className="w-full sm:w-auto">
        <h4 className={`font-semibold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
          {skill.name}
          {skill.sub && (
            <span className="text-xs text-gray-400 font-normal ml-1.5">· {skill.sub}</span>
          )}
        </h4>
      </div>

      <div className="w-full sm:w-44 ml-0 sm:ml-4 shrink-0">
        <div className={`w-full h-1.5 sm:h-2 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-300"}`}>
          <div
            className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <p className={`text-xs text-right mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          {skill.level}%
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : false;

  const [filter, setFilter] = useState<SkillCategory | "all">("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (val: SkillCategory | "all") => {
    setVisible(false);
    setFilter(val);
    setTimeout(() => setVisible(true), 50);
  };

  const filteredSkills = filter === "all" ? skills : skills.filter((s) => s.category === filter);
  const { accent, bar } = categoryMeta[filter];

  return (
    <section ref={sectionRef} id="skills" className="py-12 sm:py-16">
      <div className="max-w-8xl mx-auto px-3 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
          <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Skills & Expertise
          </h2>
        </div>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          A snapshot of what I build: frontend stacks, AI agents, and tooling I use to ship
          fast, reliable products.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleFilter(cat.value)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-sm font-semibold transition-all duration-200
                ${filter === cat.value
                  ? `bg-gradient-to-r ${categoryMeta[cat.value].accent} text-white shadow-lg scale-[1.03]`
                  : `${isDark ? "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"}`
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Skill Cards */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            {filteredSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                visible={visible}
                barColor={bar}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 sm:space-y-5 mt-4 sm:mt-0">

            {/* Quick Summary */}
            <div className={`p-4 sm:p-5 rounded-2xl border ${isDark ? "bg-white/5 border-white/10" : "bg-gray-100 border-gray-200"}`}>
              <h3 className={`font-semibold mb-3 text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                Quick summary
              </h3>
              <div className="space-y-3">
                {summaryLines.map(({ icon, label, detail }) => (
                  <div key={label} className="flex gap-2.5 items-start">
                    <span className="text-base leading-none mt-0.5">{icon}</span>
                    <div>
                      <p className={`text-xs font-semibold mb-0.5 ${isDark ? "text-white" : "text-gray-800"}`}>{label}</p>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Tags */}
            <div className={`p-4 sm:p-5 rounded-2xl border ${isDark ? "bg-white/5 border-white/10" : "bg-gray-100 border-gray-200"}`}>
              <h3 className={`font-semibold mb-3 text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                Skill tags
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Next.js", "React", "TypeScript", "Tailwind CSS",
                  "AI Agents", "Prompt Engineering", "Context Engineering",
                  "FastAPI", "Python", "Git", "Docker", "Figma → Code",
                ].map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium transition-all duration-200
                      hover:scale-105 hover:brightness-110 cursor-default
                      ${isDark ? (tagMeta[tag] ?? defaultTagStyle) : "bg-gray-200 text-gray-700 border-gray-300"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}