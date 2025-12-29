import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import Project from "./project/page";
import Education from "./education/page";
import Skills from "@/components/skills";

export default function Home() {
  const content = `I am a Frontend Developer passionate about building smooth, intuitive, and scalable web experiences.
I specialize in Next.js, TypeScript, JavaScript, Tailwind CSS, and Sanity CMS—creating interfaces that balance clean design and solid performance.

Recently, I’ve been exploring the exciting world of AI Agents and intelligent systems, learning to merge front-end interfaces with smart backend logic—building products that not only look great but think smart.

Beyond coding, I love understanding how people interact with technology and continuously improving how digital experiences feel and function.`;

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
