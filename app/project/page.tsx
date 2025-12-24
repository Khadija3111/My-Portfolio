import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
   
    {
      title: "Physical AI and Humanoid Robotics E-BOOK ",
      link: "https://github.com/Khadija3111/Physical-AI---Humanoid-Robotics-Book",
      desc: " An interactive technical e-book on Physical AI and humanoid Robotics made using speckitPlus , gemini CLI mainly ,a fully functional RAG-powered chatbot has been implemented to support interactive learning. ",
      
   
    },
    {
      title: "E-Commerce Furniture Store",
      link: "https://github.com/Khadija3111/E-com-web-furino",
      desc: "A modern and responsive eCommerce frontend built with Next.js, Tailwind, and clean UI components."
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
      desc: " a conversational chatbot built using Chainlit and Google’s Gemini 2.0 Flash model. It supports session-based memory and optionally OAuth for user authentication. This project is ready for deployment and can be easily customized or extended. "
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
    <section className="px-6 py-18" id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            className="group border border-border p-5 rounded-xl hover:shadow-lg transition-all duration-300 bg-card"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                {proj.title}
              </h3>
              <ExternalLink size={18} className="opacity-60 group-hover:opacity-100" />
            </div>
            <p className="text-muted-foreground text-sm mt-3">
              {proj.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
