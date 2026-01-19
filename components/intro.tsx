import Image from 'next/image';

export default function Intro() {
  return (
    <section className="px-0 sm:pl-10 flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between gap-x-2 sm:gap-x-10 md:gap-x-19 gap-y-6 pt-16 sm:pt-24 pb-5">
      <div className="mt-2 flex-1 md:mt-0 w-full">
        <h1 className="title no-underline text-center sm:text-left">Hey, I'm Khadija.</h1>
        <p className="mt-2 font-light text-muted-foreground text-center sm:text-left">
        “
          I build **full-stack web applications and AI-driven systems**. From clean, responsive interfaces to robust APIs and intelligent agent workflows, I focus on delivering products that are both **usable and smart**.”
        </p>
      </div>
      <div className="relative flex-1 md:flex-none pr-0 sm:pr-10 w-full sm:w-auto">
        <Image
          className="rounded-lg grayscale w-full sm:w-auto"
          src="/download.jpg"
          alt="author"
          width={255}
          height={185}
          priority
        />
      </div>
    </section>
  );
}
