import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import Project from "./project/page";
import Education from "./education/page";
import Skills from "@/components/skills";
import About from "./about/page";

export default function Home() {
  const content = `I'm a full-stack developer who builds complete products — responsive frontends, FastAPI backends, PostgreSQL databases, authentication systems, and cloud deployments. My core stack is Next.js, TypeScript, Tailwind CSS, and Sanity CMS, and I'm comfortable owning a feature from the first line of code to production.

 Lately I've been going deep on AI — building agents with the OpenAI Agents SDK, designing RAG pipelines for grounded question answering, and engineering the prompts, memory, and guardrails that make intelligent systems actually reliable. I focus on merging AI capabilities with usable interfaces so products don't just look smart — they work smart.
 I'm looking for a team where I can ship real features, contribute to products that matter, and keep growing as a developer. I want to build things that are technically solid, genuinely useful, and worth being proud of.`;

  return (
    <section
      className="
        px-4                /* mobile */
        sm:px-6
        md:px-35            /* laptop stays SAME */
      "
    >
      <Intro />

      <div
        className="
          container
          max-w-full         /* mobile */
          md:max-w-2xl       /* laptop SAME */
          px-2               /* mobile padding */
          md:pl-10           /* laptop SAME */
          pb-10
          md:pb-17
        "
      >
        <div>
          <h1
            className="
              text-3xl        /* mobile */
              md:text-4xl     /* laptop */
              font-black
              pb-1
              md:pb-6
            
            ">  
          </h1>
<About/>
          {/* <MDXRemote source={content} /> */}
        </div>
      </div>

      
      <Skills />
      <Project />
      <Education />
    </section>
  );
}
