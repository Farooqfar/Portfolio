"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const Profile = dynamic(() => import("../components/Profile"), { ssr: false });
const Design = dynamic(() => import("../components/Design"), { ssr: false });
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
export default function page() {
  const [Skill, setskill] = useState([
    {
      icon: <FaHtml5 />,
      name: "HTML",
      description:
        "HTML is like the skeleton of a webpage — it gives structure to everything you see on the internet.",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      description:
        "CSS is like the clothes and colors of a webpage — it makes websites look stylish and beautiful.",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind",
      description:
        "Tailwind CSS is like a magic toolkit of ready-made styles — it helps you design websites quickly without writing endless CSS.",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      description:
        "JavaScript is like the brain of a webpage — it makes websites think, act, and respond to you.",
    },
    {
      icon: <FaReact />,
      name: "React",
      description:
        "React is like a box of reusable Lego blocks — you build websites by snapping pieces together.",
    },
    {
      icon: <RiNextjsFill />,
      name: "Next",
      description:
        "Next.js is like React on steroids — it makes websites faster, smarter, and ready for the real world.",
    },
    {
      icon: <FaNode />,
      name: "Node Js",
      description:
        "Node.js is like giving JavaScript superpowers — it lets you run it on the server, not just in the browser.",
    },
    {
      icon: <SiExpress />,
      name: "Express Js",
      description:
        "Express.js is like a fast delivery service for websites — it helps your server handle requests and send back responses quickly.",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
      description:
        "MongoDB is like a flexible digital filing cabinet — it stores data in a way thats easy to organize and scale.",
    },
  ]);
  return (
    <main>
      <section className="w-full pt-32 p-5 flex flex-col justify-center items-center">
        <h1 className="text-[210px] text-white scale-y-150 uppercase font-black text-center max-sm:text-[90px] max-lg:text-[190px]">
          about
        </h1>
        <p className="mt-72 w-[70%] text-white text-4xl font-black text-center max-sm:text-2xl max-sm:w-full">
          Hey there ✰! I’m Muhammad Farooq, a passionate Web Developer 💻 based
          in Pakistan. I spend my time turning ideas into interactive,
          responsive, and impactful digital experiences—making websites not only
          look GREAT but also work even better ☜.
        </p>
        <p className="mt-10 w-[70%] text-white text-4xl font-black text-center max-sm:text-2xl max-sm:w-full">
          For the past year ☟ I’ve been living the ✰ developer dream—taking
          concepts and transforming them into clean, functional, and
          performance-driven code ❀. From front-end design to back-end logic, I
          love building projects that are both creative and technically solid.
        </p>
        <p className="mt-10 w-[70%] text-white text-4xl font-black text-center max-sm:text-2xl max-sm:w-full">
          My focus ✎ is always on creating web experiences that truly connect
          with people. Whether it’s crafting smooth UIs, optimizing performance,
          or solving tough coding challenges, I aim to deliver solutions that
          are meaningful, user-friendly, and unforgettable.
        </p>
      </section>
      <section className="mt-20">
        <Profile />
      </section>
      <section className="w-full min-h-full p-5 mt-32 pb-10 flex flex-col gap-32">
        <div className="w-full h-auto">
          <h1 className="text-right font-[cursive] text-[#DADADA] text-[250px] leading-[220px] rotate-[-2deg] max-lg:text-[150px] max-sm:text-[70px] max-sm:leading-[200px]">
            Expertise
          </h1>
          <h2 className="text-right pr-3 leading-[170px] uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-lg:text-[130px] max-lg:leading-[130px] max-sm:text-[100px] max-sm:text-start max-sm:leading-[100px] max-sm:mb-14">
            what i do
          </h2>
          <h2 className="mt-20 text-right pr-3 leading-[170px] uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-lg:text-[100px] max-lg:leading-[100px] max-sm:text-[80px] max-sm:text-start max-sm:leading-[80px] max-sm:mt-32">
            (and do well)
          </h2>
        </div>
        <h1 className="text-white text-9xl font-black text-center mt-32">Technology</h1>
        <div className="w-full flex justify-center items-center gap-10 flex-wrap h-auto">
          {Skill.map((skill, index) => {
            return (
              <div
                key={index}
                className="text-white border-2 border-white w-[450px] h-100 flex flex-col justify-around items-center p-10 "
              >
                <h1 className="text-white text-9xl font-black">{skill.icon}</h1>

                <h1 className="text-white text-5xl font-black">{skill.name}</h1>

                <p className="text-white text-center">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="p-5">
        <Design />
      </section>
    </main>
  );
}
