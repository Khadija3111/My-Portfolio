import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [

     {
      title: "Physical AI & Humanoid Robotics — AI-Native Textbook + RAG Chatbot",
      link: "https://github.com/Khadija3111/Physical-AI---Humanoid-Robotics-Book",
      desc: "AI-native robotics textbook built with spec-driven documentation and deployed on Vercel, paired with a RAG chatbot using FastAPI, Qdrant, Cohere, and OpenAI Agents SDK for content-grounded question answering."
    },
    {
  title: "The Evolution of Todo — Spec-Driven Full-Stack App + AI Agent",
  link: "https://github.com/Khadija3111/TODO-APP",
  desc: "A full-stack Todo application built using spec-driven development and modern web technologies (Next.js, TypeScript, Tailwind CSS, FastAPI, PostgreSQL). Includes AI agent features for task management, automated reminders, and smart prioritization. The project demonstrates end-to-end design, deployment, and integration of AI workflows in a practical web product."
 },
    {
      title: "E-Commerce Furniture Store",
      link: "https://github.com/Khadija3111/E-com-web-furino",
      desc: "A modern and responsive eCommerce furniture website built with Next.js, Tailwind, SANITY CMS and clean UI components ."
    },
    {
      title: "AI Master Chef Agent",
      link: "https://github.com/Khadija3111/Food-recommending-agent",
      desc: "AI agent to recommend international recipes based on user preferences using Openai Agents SDK"
    },
    {
      title: "Simple Website ",
      link: "https://github.com/Khadija3111/simple-web-nextjs",
      desc: "A very simple and basic website build using Next.js ,TS ,Tailwind Css  "
    },
    {
      title: "ChatBot with Chainlit ",
      link: "https://github.com/Khadija3111/Chatbot",
      desc: " a conversational chatbot built using Chainlit and Google's Gemini 2.0 Flash model. It supports session-based memory and optionally OAuth for user authentication. This project is ready for deployment and can be easily customized or extended. "
    },
    {
      title: "Secure Data enscription App",
      link: "https://github.com/Khadija3111/secure-data-enscryption",
      desc: "A secure data storage app with encryption and passkey protection using Python ."
    },
    {
      title: "AI-SIMPLE-RESEARCH-AGENT",
      link: "https://github.com/Khadija3111/AI-SIMPLE-RESEARCH-AGENT",
      desc: "This is a simple research agent build using PYTHON ,UV,agents this will help in research as its a research agent."
    },
    {
      title: "Expense tracker ",
      link: "https://github.com/Khadija3111/ExpenseTracker",
      desc: "this expense tracker can help you track your expenses."
    },
    {
      title: "Personal library manager ",
      link: "https://github.com/Khadija3111/presonal-lib-manager",
      desc: "if you love reading books then this personal library manager is for you ."
    },
   

  ];

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16" id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            className="group border border-border p-4 sm:p-5 rounded-xl hover:shadow-lg transition-all duration-300 bg-card"
          >
            <div className="flex items-center gap-2  ">
              <h3 className="text-lg sm:text-xl font-semibold group-hover:text-blue-500 transition-colors">
                {proj.title}
              </h3>
              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100" />
            </div>
            <p className="text-muted-foreground text-sm mt-2 sm:mt-3">
              {proj.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
