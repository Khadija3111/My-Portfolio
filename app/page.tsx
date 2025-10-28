import Intro from "@/components/intro";
import {MDXRemote} from "next-mdx-remote/rsc";

import Project from "./project/page";
import Education from "./education/page";
import Skills from "@/components/skills";

export default function Home() {
  const content = ` i am a Frontend Developer passionate about building smooth, intuitive, and scalable web experiences.
I specialize in Next.js,  TypeScript, JavaScript, and Tailwind CSS, SANITY-CMS creating interfaces that balance clean design and solid performance.

Recently, I’ve been exploring the exciting world of AI Agents and intelligent systems, learning to merge front-end interfaces with smart backend logic.
— building products that not only look great but think smart.

Beyond coding, I love understanding how people interact with technology and continuously improving how digital experiences feel and function.  `
    return (
    <section className="  px-30">
      <Intro />
      <div className="container max-w-3xl ">
      <div className="pl-10 ">
        <h1 className=" text-2xl font-black pb-11">About Me</h1>
      <MDXRemote source={content}  />
       </div>
      </div>
      <Education></Education>
      <Skills></Skills>
      <Project></Project>
      
      </section>
     
  );
}
