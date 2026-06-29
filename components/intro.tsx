"use client";
import { useRef } from "react";

export default function Intro() {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (!card || !inner || !shine) return;

    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;
    const rotX = ((y - cy) / cy) * -14;
    const rotY = ((x - cx) / cx) * 14;

    inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    shine.style.top = `${(y / r.height) * 80 - 30}%`;
    shine.style.left = `${(x / r.width) * 80 - 30}%`;
  };

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

return (
  <section className="relative px-0 sm:pl-10 sm:pr-16 flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between gap-x-10 gap-y-8 pt-14 sm:pt-24 pb-5">
    {/* Background orbs — overflow-hidden on themselves, not the section */}
    <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-violet-400/10 blur-[64px] animate-pulse overflow-hidden" />
    <div className="pointer-events-none absolute -bottom-16 left-[10%] w-48 h-48 rounded-full bg-emerald-400/10 blur-[56px] animate-pulse [animation-delay:-3s] overflow-hidden" />

    {/* Text side — unchanged */}
    <div className="flex-1 z-10">
      <p className="text-xs tracking-widest uppercase text-rose-600 dark:text-red-400 font-medium mb-2 animate-pop-in animation-delay-1">
        Full-stack & AI developer
      </p>
      <p
        className="text-2xl sm:text-3xl font-light text-foreground text-center sm:text-left animate-pop-in animation-delay-2"
      >
        Hey,
      </p>
      <h1
        className="title no-underline text-center sm:text-left mt-1 animate-pop-in animation-delay-3"
        style={{
          background: "linear-gradient(120deg, var(--foreground) 40%, #534AB7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        I'm Khadija.
      </h1>
      <p className="mt-3 font-light text-muted-foreground text-center sm:text-left max-w-md">
        I build full-stack web applications and AI-driven systems. From clean,
        responsive interfaces to robust APIs and intelligent agent workflows, I
        focus on delivering products that are both usable and smart.
      </p>
      <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
        {["Next.js & React", "AI Agents", "FastAPI"].map((tag, i) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-full font-medium border ${
              i === 0
                ? "bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-950 dark:text-violet-200 dark:border-violet-800"
                : i === 1
                ? "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800"
                : "bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-950 dark:text-orange-200 dark:border-orange-800"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* 3D Avatar card — overflow-visible so tags aren't clipped */}
    <div className="relative flex-shrink-0 z-10 overflow-visible">
      <div
        ref={cardRef}
        className="w-60 h-60 cursor-pointer"
        style={{ perspective: "600px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={innerRef}
          className="w-full h-full relative rounded-2xl transition-transform duration-100"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl flex flex-col items-center justify-center gap-3 p-5 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-orange-200 to-rose-200 dark:from-violet-900/30 dark:to-emerald-900/20 rounded-t-2xl pointer-events-none" />
            <div
              ref={shineRef}
              className="pointer-events-none absolute w-3/5 h-3/5 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
                top: "-50%",
                left: "-50%",
                transition: "top 0.1s, left 0.1s",
              }}
            />
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-semibold text-xl shadow-lg z-10">
              KA
            </div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 z-10">
              Khadija Abdulbasit
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 z-10">
              Web Developer · Karachi
            </div>
            <div className="flex gap-1.5 z-10 mt-1">
              {["bg-violet-500", "bg-emerald-500", "bg-orange-500"].map((c, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating tags — nudged further out */}
      <div
        className="absolute -right-6 bottom-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 shadow-md whitespace-nowrap"
        style={{ animation: "floatY 4s ease-in-out infinite alternate" }}
      >
        🤖 AI automation
      </div>
      <div
        className="absolute -right-7 top-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 shadow-md whitespace-nowrap"
        style={{ animation: "floatY 4s ease-in-out infinite alternate", animationDelay: "-2s" }}
      >
        ⚡ n8n · OpenClaw
      </div>
    </div>

    <style>{`
      @keyframes floatY {
        from { transform: translateY(0px) rotate(-1deg); }
        to   { transform: translateY(-6px) rotate(1deg); }
      }

      /* Pop-in: scale up past normal, then settle back to 1 */
      @keyframes popIn {
        0%   { opacity: 0; transform: scale(0.9); }
        55%  { opacity: 1; transform: scale(1.18); }
        78%  { transform: scale(0.97); }
        100% { opacity: 1; transform: scale(1); }
      }
      .animate-pop-in {
        opacity: 0;
        animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      .animation-delay-1 { animation-delay: 0.15s; }
      .animation-delay-2 { animation-delay: 0.6s; }
      .animation-delay-3 { animation-delay: 1.05s; }
    `}</style>
  </section>
);
}