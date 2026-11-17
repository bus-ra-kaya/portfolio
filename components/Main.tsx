import Image from "next/image";
import ProjectSection from "./Projects/ProjectSection";
import { projects } from "@/data/projects";

export default function Main() {

  return (
    <main>
      <section className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:gap-10 md:py-12">
        <div>
          <h2 className="mb-5 font-display text-5xl font-medium leading-20 tracking-tight md:text-6xl lg:text-7xl">
            Full-Stack Developer
          </h2>
          <p className="mb-8 max-w-200 text-lg text-muted">
            Hello, I&apos;m Büşra. I&apos;m a software developer experienced in technologies such as Next.js, TypeScript, Express and Prisma. I care about writing clean code and building maintainable projects. I&apos;m currently building an API uptime monitor web app. 
          </p>
        </div>
      <Image 
        src='/busra-kaya-photo.png'
        alt='Personal photo'
        className='rounded-full order-first md:order-0 border-2 border-line size-32 md:size-46 mx-auto'
        width='160'
        height='160'
      />
      </section>
      <section className="border-b border-line py-8">
        <h2 className="font-display text-3xl font-medium tracking-tight">Projects</h2>
        <ProjectSection projects={projects}/>
      </section>
    </main>
  )
}