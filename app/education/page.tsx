"use client";

import React, { useState } from "react";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
  active?: boolean;
}

const educationData: EducationItem[] = [
  {
    institution: "Khursheed Govt Girls Degree College",
    degree: "Intermediate in Medical Science",
    year: "2021 – 2023",
  },
  {
    institution: "Governor Sindh Initiative, GIAIC",
    degree: "Cloud Native Applied Agentic AI",
    year: "2024 – Present",
    active: true,
  },
  {
    institution: "Jamia Al Marifa Al Alamiya",
    degree: "B.Sc. (Hons) in Islamic Studies",
    year: "2023 – Present",
    active: true,
  },
];

const coursesData: EducationItem[] = [
  {
    institution: "Governor Sindh Initiative, GIAIC",
    degree: "Diploma in Cloud Native Agentic AI Engineering",
    year: "2024 – Present",
    active: true,
  },
  {
    institution: "BNO Qabil Initiative",
    degree: "Frontend Development via React",
    year: "2022 – 2023",
  },
  {
    institution: "N-WebSolutions",
    degree: "CIT",
    year: "2022 – 2023",
  },
];

type Tab = "degrees" | "courses";

export default function Education() {
  const [activeTab, setActiveTab] = useState<Tab>("degrees");

  const items = activeTab === "degrees" ? educationData : coursesData;
  const accentFrom = activeTab === "degrees" ? "from-black-500" : "from-black-200";
  const accentTo = activeTab === "degrees" ? "to-rose-500" : "to-rose-500";

  return (
    <section id="education" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-35">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
          <h2 className="text-2xl sm:text-3xl tracking-tight font-extrabold">
            Education
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 mb-6 sm:mb-8">
          {(["degrees", "courses"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 pb-3 text-sm font-medium capitalize transition-all duration-200 border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-red-500 text-rose-500"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab === "degrees" ? "Degrees" : "Courses & certifications"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-4 sm:space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-white/5 hover:bg-white/10
                transition-all duration-300 rounded-2xl p-4 sm:p-6 shadow-md"
            >
              {/* Accent bar */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b ${accentFrom} ${accentTo}
                  opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div className="pl-4 sm:pl-5">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold">{item.institution}</h3>
                  {item.active && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mt-1 text-sm">{item.degree}</p>
                {item.year && (
                  <p className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs sm:text-sm mt-8 sm:mt-10 border-t border-white/10 pt-4 sm:pt-6 text-center">
          Lifelong learner with a passion for connecting education, technology,
          and intelligent systems.
        </p>
      </div>
    </section>
  );
}