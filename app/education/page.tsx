"use client";

import React from "react";
import { GraduationCap, School } from "lucide-react"; // optional icons

interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Khursheed Govt Girls Degree College",
    degree: "Intermediate in Medical Science",
    year: "2022 – 2024",
  },
  {
    institution: "Governor Sindh Initiative, GIAIC",
    degree: "Cloud Native Applied Agentic AI",
    year: "2024 – Present",
  },
  {
    institution: "Jamia Al Marifa Al Alamiya",
    degree: "B.Sc. (Hons) in Islamic Studies",
    year: "2021 – Present",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16  scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="w-8 h-8 text-violet-500" />
          <h2 className="text-3xl  tracking-tight font-extrabold">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-white/5 hover:bg-white/10 
              transition-all duration-300 rounded-2xl p-6 shadow-md"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-violet-500 to-blue-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="pl-5">
                <h3 className="text-lg font-bold">
                  {edu.institution}
                </h3>
                <p className="text-gray-400 mt-1 text-sm font-medium">
                  {edu.degree}
                </p>
                {edu.year && (
                  <p className="text-xs text-gray-500 mt-2">{edu.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional Quote or Note */}
        <p className="text-gray-500 text-sm mt-10 border-t border-white/10 pt-6 text-center">
          Lifelong learner with a passion for connecting education, technology,
          and intelligent systems.
        </p>
      </div>
    </section>
  );
}
