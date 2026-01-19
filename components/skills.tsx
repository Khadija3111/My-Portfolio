"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type SkillCategory = "frontend" | "ai" |"backend"| "devops"|"tools";

interface Skill {
  name: string;
  sub?: string;
  level: number;
  category: SkillCategory;
}

const skills: Skill[] = [
  { name: "HTML/CSS/Jasvascript", sub: "SSR & App Router", level: 90, category: "frontend" },
  { name: "TypeScript", sub: "Types & generics", level: 80, category: "frontend" },
  { name: "React/Next.js", sub: "SSR & App Router", level: 90, category: "frontend" },
  { name: "Tailwind CSS", sub: "Design-to-code & responsive layouts", level: 88, category: "frontend" },
  { name: "Python (for AI)", sub: "Scripting & data handling", level: 65, category: "ai" },
  { name: "AI Agents (OpenAI Agents SDK)", sub: "Prototyping assistants & pipelines", level: 75, category: "ai" },
  { name: "OpenAI & Prompting", sub: "Prompt design & system messages", level: 70, category: "ai" },
  { name: "SANITY CMS", sub: "", level: 50, category: "tools" },
  { name: "FastAPI", sub: "REST APIs & async endpoints", level: 70, category: "backend" },
  { name: "API Design", sub: "OpenAPI, request/response modeling", level: 72, category: "backend" },
  { name: "Authentication", sub: "JWT, OAuth basics", level: 65, category: "backend" },
  { name: "Backend Architecture", sub: "Layered & modular design", level: 60, category: "backend" },
  { name: "PostgreSQL", sub: "Schema design & queries", level: 60, category: "backend" },
  { name: "SQLModel / SQLAlchemy", sub: "ORM & data modeling", level: 58, category: "backend" },
  { name: "Vector Databases", sub: "Embeddings & semantic search", level: 55, category: "ai" },
  { name: "Git & GitHub", sub: "Branching, PRs, collaboration", level: 70, category: "tools" },
  { name: "Docker", sub: "Containerizing apps", level: 60, category: "devops" },
  { name: "Docker Compose", sub: "Multi-service setups", level: 55, category: "devops" },
  { name: "Cloud Deployment", sub: "Railway, Vercel, Cloud Run", level: 58, category: "devops" },
  { name: "Pytest", sub: "Unit & API testing", level: 55, category: "tools" },
  { name: "Spec-Driven Development", sub: "Building from specifications", level: 65, category: "tools" },




  
];

const categories: { label: string; value: SkillCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "AI & Agents", value: "ai" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tools" },
];

export default function Skills() {
  const { resolvedTheme } = useTheme();
  const [headingColor, setHeadingColor] = useState('text-white'); // Default to white for initial render
  const [filter, setFilter] = useState<SkillCategory | "all">("all");
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));

  // Update heading color when theme changes
  useEffect(() => {
    setHeadingColor(resolvedTheme === 'dark' || resolvedTheme === undefined ? 'text-white' : 'text-gray-900');
  }, [resolvedTheme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map((s) => s.level));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills =
    filter === "all" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-8xl mx-auto px-3 sm:px-6">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${headingColor}`}>Skills & Expertise</h2>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          A snapshot of what I build: frontend stacks, AI agents, and tooling I use to ship
          fast, reliable products.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-colors duration-200
                ${
                  filter === cat.value
                    ? "bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left: Skill List */}
          <div className="sm:col-span-2 space-y-4 sm:space-y-6">
            {filteredSkills.map((skill, i) => (
              <div
                key={skill.name}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between ${
                  resolvedTheme === 'dark' || resolvedTheme === undefined
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                    : 'bg-gray-100 border border-gray-200 hover:bg-gray-200'
                } p-3 sm:p-4 rounded-2xl transition-colors gap-3 sm:gap-0`}
              >
                <div className="w-full sm:w-auto">
                  <h4 className={`font-semibold ${headingColor} text-sm sm:text-base`}>
                    {skill.name}{" "}
                    {skill.sub && (
                      <span className="text-xs text-gray-400 font-medium">
                        • {skill.sub}
                      </span>
                    )}
                  </h4>
                  {skill.sub && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{skill.sub}</p>
                  )}
                </div>

                <div className="w-full sm:w-44 ml-0 sm:ml-4">
                  <div className={`w-full h-1.5 sm:h-2 ${
                    resolvedTheme === 'dark' || resolvedTheme === undefined
                      ? 'bg-white/10'
                      : 'bg-gray-300'
                  } rounded-full overflow-hidden`}>
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${animatedLevels[i]}%` }}
                    ></div>
                  </div>
                  <p className={`text-xs text-right ${
                    resolvedTheme === 'dark' || resolvedTheme === undefined
                      ? 'text-gray-300'
                      : 'text-gray-600'
                  } mt-1`}>
                    {animatedLevels[i]}%
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Tags and Summary */}
          <aside className="space-y-4 sm:space-y-6 mt-4 sm:mt-0">
            <div className={`${
              resolvedTheme === 'dark' || resolvedTheme === undefined
                ? 'bg-white/5 border border-white/10'
                : 'bg-gray-100 border border-gray-200'
            } p-4 sm:p-5 rounded-2xl`}>
              <h3 className={`font-semibold mb-2 ${headingColor} text-sm sm:text-base`}>Quick Summary</h3>
              <p className={`${
                resolvedTheme === 'dark' || resolvedTheme === undefined
                  ? 'text-gray-400'
                  : 'text-gray-600'
              } text-xs sm:text-sm leading-relaxed`}>
                Frontend-focused: Next.js, React, TypeScript, Tailwind. <br />
                AI & Agents: OpenAIAgentsSDK, prompt engineering, small autonomous workflows. <br />
                Tools: Git, CI/CD, Python for AI tasks.
              </p>
            </div>

            <div className={`${
              resolvedTheme === 'dark' || resolvedTheme === undefined
                ? 'bg-white/5 border border-white/10'
                : 'bg-gray-100 border border-gray-200'
            } p-4 sm:p-5 rounded-2xl`}>
              <h3 className={`font-semibold mb-3 ${headingColor} text-sm sm:text-base`}>Skill Tags</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "HTML/CSS",
                  "javascript",
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Frontend Development",
                  "AI Agents",
                  "Prompting",
                  "Git",
                  "Figma → Code",
                  "Prompt Engineering",
                  "Context Engineering",

                ].map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs sm:text-sm px-2 py-1 rounded-full ${
                      resolvedTheme === 'dark' || resolvedTheme === undefined
                        ? 'bg-white/10 text-gray-300 border border-white/10'
                        : 'bg-gray-200 text-gray-700 border border-gray-300'
                    }`}
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
