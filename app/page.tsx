import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import Project from "./project/page";
import Education from "./education/page";
import Skills from "@/components/skills";

export default function Home() {
  const content = `I’m a frontend-focused developer who builds smooth, intuitive, and scalable web experiences. My core stack includes Next.js, TypeScript, JavaScript, Tailwind CSS, and Sanity CMS, with a strong emphasis on clean UI, performance, and maintainable code.

 My focus is on creating products that are not only visually polished, but also smart, reliable, and practical.

 I actively build full-stack applications, connecting modern frontends with FastAPI backends, PostgreSQL databases, authentication, and deployed cloud services. I’m comfortable taking a product from idea to production—designing interfaces, building APIs, integrating data, and shipping real features.

 Recently, I’ve been working with AI agents and intelligent systems, building assistants that use structured prompts, tools, memory, and guardrails to solve real problems. I enjoy merging AI capabilities with usable interfaces so products don’t just look good—but work intelligently.
 
 I’m looking for opportunities where I can contribute to real products, grow as a full-stack developer, and build intelligent systems that create real value.`;

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
              pb-6
              md:pb-11
            
            "
          >
            About Me
          </h1>

          <MDXRemote source={content} />
        </div>
      </div>

      <Education />
      <Skills />
      <Project />
    </section>
  );
}
