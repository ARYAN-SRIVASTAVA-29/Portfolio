import React from "react";
import {
  SiCanvas,
  SiCss3,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { MovingBorderBtn } from "@/components/ui/moving-border";

export default function Projects() {
  const projects = [
    {
      title: "Anon Feedback App",
      description: "A FullStack NextJS anonymous feedback application that lets users send and receive messages without revealing identities. Features include secure email authentication with verification codes, unique username creation, and a user dashboard to toggle message acceptance on or off, providing control over receiving feedback.",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
      Link: "https://github.com/ARYAN-SRIVASTAVA-29/AnonFeedback",
      cover: "/anon-feedback.png",
      background: "bg-indigo-500",
    },
    {
      title: "Video Connect",
      description: "Developed a Next.js React app for video calls. Users generate or join rooms via unique IDs. Utilizing socket.io and PeerJS, it ensures smooth video streaming. Features like muting/unmuting, toggling video, and exiting calls enhance real-time communication, making it efficient and user-friendly",
      tech: [SiNextdotjs, SiReact, SiSocketdotio, SiWebrtc],
      Link: "https://github.com/ARYAN-SRIVASTAVA-29/VideoConnect",
      cover: "/video-connect.png",
      background: "bg-green-500",
    },
    {
      title: "Digi Draw",
      description: "Built a collaborative drawing React app with Canvas & Socket.io. Features color selection, brush size adjustment, undo/redo functionality, and live drawing interaction. Users can collaborate in real-time and download their creations.",
      tech: [SiReact, SiJavascript, SiSocketdotio, SiCanvas],
      Link: "https://github.com/ARYAN-SRIVASTAVA-29/DigiDraw",
      cover: "/digi-draw.png",
      background: "bg-sky-500",
    },
    {
      title: "Spotify Clone",
      description: "Demonstrated proficiency in React, Context API, and Material UI. Through this project, I deepened my understanding of API integration, authentication, and building immersive user interfaces.",
      tech: [SiReact, SiJavascript, SiCss3],
      Link: "https://github.com/ARYAN-SRIVASTAVA-29/SpotifyClone",
      cover: "/project-1.png",
      background: "bg-pink-500",
    },
    {
      title: "Gym Website",
      description: "Built gym app with TypeScript & React, Tailwind CSS for design, Framer Motion for animations, & React Hook Form for forms. Boosted proficiency in all.",
      tech: [SiReact, SiTypescript, SiFramer, SiTailwindcss],
      Link: "https://github.com/ARYAN-SRIVASTAVA-29/Typescript-GymApp",
      cover: "/gym-website.png",
      background: "bg-violet-500",
    },
    {
      title: "Quiz App",
      description: "Quiz app featuring timed questions with a 10-second countdown and a dynamic progress bar. Users select from four options, with a red background indicating incorrect and green for correct answers. With smooth transition to the next question",
      tech: [SiReact, SiJavascript],
      Link: "https://github.com/ARYAN-SRIVASTAVA-29/QuizApp",
      cover: "/quiz-app.png",
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
                  <p>{project.description}</p>
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
      <a href="https://drive.google.com/file/d/1IkR5C8DcYn8zVoRFh6B_LeAC__Kakalm/view" target="_blank" rel="noopener noreferrer">
      <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
            <p>🖹 View Resume</p>    
        </MovingBorderBtn> 
        </a>
      </div>
    </div>
  );
}
