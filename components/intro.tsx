// import Image from 'next/image';

export default function Intro() {
  return (
    <section className="pl-10 flex flex-col-reverse md:flex-row items-center justify-between gap-x-19 gap-y-3 pt-24 pb-5">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hey, I’m Khadija.</h1>
        <p className="mt-2 font-light text-muted-foreground">
          I’m a Frontend developer and I build AI Agents based in Karachi, Pakistan.  
          I craft interfaces that connect humans and intelligent systems.
        </p>
      </div>
      <div className="relative flex-1 md:flex-none pr-10">
        {/* <Image
          className="rounded-lg grayscale"
          src="/niqaab.jpg"
          alt="author"
          width={255}
          height={185}
          priority
        /> */}
      </div>
    </section>
  );
}
