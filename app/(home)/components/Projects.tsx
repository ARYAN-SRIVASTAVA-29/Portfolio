import React from "react";
import {
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { MovingBorderBtn } from "@/components/ui/moving-border";

export default function Projects() {
  const projects = [
    {
      title: "Digi Draw",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Video Connect",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-green-500",
    },
    {
      title: "Annon Feedback",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-sky-500",
    },
    {
      title: "Event Booking App sadsads sadfsdaf sadfxzczxcxzcxzcxz",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-pink-500",
    },
    {
      title: "Event Booking App sadsads sadfsdaf sadfxzczxcxzcxzcxz",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-violet-500",
    },
    {
      title: "Event Booking App sadsads sadfsdaf sadfxzczxcxzcxzcxz",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "http://localhost:3000",
      cover: "/project-1.png",
      background: "bg-slate-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-8">
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">

                    <div className="space-y-5 bg-slate-800">
                      
                  

                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index}/>
                    })}
                  </div>

                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
      <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
            <p>🖹 View Resume</p>    
        </MovingBorderBtn> 
      </div>
    </div>
  );
}
