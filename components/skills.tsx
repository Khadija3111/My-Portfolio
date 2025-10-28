"use client";

import React, { useState, useEffect } from "react";

type SkillCategory = "frontend" | "ai" | "tools";

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
 
  
];

const categories: { label: string; value: SkillCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "AI & Agents", value: "ai" },
  { label: "Tools", value: "tools" },
];

export default function Skills() {
  const [filter, setFilter] = useState<SkillCategory | "all">("all");
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map((s) => s.level));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills =
    filter === "all" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 ">Skills & Expertise</h2>
        <p className="text-gray-400 mb-8">
          A snapshot of what I build: frontend stacks, AI agents, and tooling I use to ship
          fast, reliable products.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors duration-200
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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Skill List */}
          <div className="md:col-span-2 space-y-6">
            {filteredSkills.map((skill, i) => (
              <div
                key={skill.name}
                className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div>
                  <h4 className="font-semibold text-white">
                    {skill.name}{" "}
                    {skill.sub && (
                      <span className="text-xs text-gray-400 font-medium">
                        • {skill.sub}
                      </span>
                    )}
                  </h4>
                  {skill.sub && (
                    <p className="text-sm text-gray-500 mt-1">{skill.sub}</p>
                  )}
                </div>

                <div className="w-44 ml-4">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${animatedLevels[i]}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-right text-gray-300 mt-1">
                    {animatedLevels[i]}%
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Tags and Summary */}
          <aside className="space-y-6">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2 text-white">Quick Summary</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Frontend-focused: Next.js, React, TypeScript, Tailwind. <br />
                AI & Agents: LangChain, prompt engineering, small autonomous workflows. <br />
                Tools: Git, CI/CD, Python for AI tasks.
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-3 text-white">Skill Tags</h3>
              <div className="flex flex-wrap gap-2">
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
                    className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
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
