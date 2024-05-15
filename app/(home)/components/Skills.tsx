'use client'

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiC, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

  const skills = [
    {
      text: "Python",
      Icon: SiPython
    },
    {
      text: "C",
      Icon: SiC
    },
    {
      text: "React",
      Icon: SiReact
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text='Skills 🗡️' className='flex flex-col items-center justify-center -rotate-6'/>

      <HoverEffect items={skills}/>
    </div>
  )
}
