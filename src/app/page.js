"use client";
import dynamic from "next/dynamic";

const Design = dynamic(() => import("./components/Design"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });

import { motion } from "motion/react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full h-auto  p-5 selection:bg-green-400 selection:text-black overflow-x-hidden">
      <section className="relative w-full h-auto overflow-hidden   ">
        <div className="w-full h-auto flex gap-15 max-lg:flex-col max-lg:justify-center">
          {/* h1 heading */}
          <motion.div
            className="relative w-[50%] max-lg:w-full max-lg:justify-center max-lg:flex"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="relative text-[210px] leading-[270px] font-black  text-white uppercase z-10 scale-y-150 max-sm:text-[125px]">
              full
            </h1>
            <Image
              src="/1.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-[-20px] left-[30%] z-20 max-sm:w-36 max-sm:left-0 max-sm:top-0"
            />
            <Image
              src="/2.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-44 left-[12vw] z-0 max-sm:w-36"
            />
            <Image
              src="/3.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-[-90px] left-[26vw] z-0  max-sm:w-36"
            />

            <Image
              src="/4.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-0 left-[32vw] z-0 max-sm:w-36"
            />

            <Image
              src="/5.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-64 left-[29vw] z-0 max-sm:w-36"
            />
          </motion.div>
          {/* h2 heading */}
          <motion.div
            className="relative flex top-28 w-[50%]  max-lg:w-full max-lg:justify-center max-lg:left-0 max-lg:top-28 max-xl:left-5 max-xl:top-44"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="relative left-[-25px] text-[200px] leading-[270px] font-black text-white uppercase z-10 scale-y-150 max-lg:text-[185px] max-xl:text-[12vw] max-2xl:text-[165px] max-sm:text-[90px] max-sm:text-center max-sm:ml-11">
              stack
            </h1>
            <Image
              src="/6.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-0 left-[20px] max-lg:left-[60px] z-10 max-sm:w-36"
            />
            <Image
              src="/7.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-[-120px] right-[140px] z-0 max-sm:w-36"
            />
            <Image
              src="/8.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-[-50px] right-0 z-0 max-sm:w-36"
            />
            <Image
              src="/9.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-52 absolute top-44 right-[60px] z-10 max-sm:w-36"
            />
          </motion.div>
        </div>
        {/* h3 heading */}
        <motion.div
          className="relative w-full max-lg:top-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="relative top-[-30px] text-[200px] text-center text-transparent leading-[270px] font-black uppercase pt-24 [-webkit-text-stroke:3px_white] scale-y-150 z-10  max-xl:text-[165px] max-lg:text-[210px] ">
            <span className="hidden max-lg:inline max-sm:text-[153px]">
              dev
            </span>
            <span className="inline max-lg:hidden">engineer</span>
          </h1>

          {/* img images */}
          <Image
            src="/10.webp"
            alt="Loading"
            width={100}
            height={100}
            loading="lazy"
            className="w-52 absolute top-28 left-10 z-0 max-sm:w-36"
          />
          <Image
            src="/11.webp"
            alt="Loading"
            width={100}
            height={100}
            loading="lazy"
            className="w-52 absolute top-36 left-52 z-0  max-sm:w-36"
          />
          <Image
            src="/12.webp"
            alt="Loading"
            width={100}
            height={100}
            loading="lazy"
            className="w-52 absolute bottom-0 right-100 z-10 max-lg:right-10 max-sm:w-36"
          />
        </motion.div>
      </section>
      {/* short Abouts us */}
      <section className="w-full h-auto mt-20 p-56 max-lg:p-10 max-lg:mt-100 max-sm:p-0 overflow-hidden">
        <motion.p
          className="text-4xl font-black text-[#B2B2B2] text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          Hey there ✰! I’m Muhammad Farooq — a MERN Stack & Next.js Developer ⚡
          based in Pakistan. I specialize in building modern, high-performing
          web applications that are fast, scalable, and user-friendly. From
          crafting clean front-end experiences with React & Tailwind CSS to
          developing robust back-end solutions with Node.js and MongoDB, I love
          turning ideas into impactful digital products that really work.
        </motion.p>
      </section>
      <motion.section
        className="w-full h-auto pb-20 max-lg:mt-100 overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-left font-[cursive] text-[#DADADA] text-[250px] leading-[220px] rotate-[-2deg] max-lg:text-[220px] max-sm:text-[130px] max-sm:leading-[240px]">
          Work
        </h1>
        <h2 className="text-right pr-3 leading-[170px] uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-lg:text-[170px] max-lg:leading-[170px] max-sm:text-[100px] max-sm:text-start max-sm:leading-[100px]">
          build
          <br className="hidden max-lg:block" />
          that
        </h2>
        <h2 className="text-right pr-3 uppercase leading-[300px] text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-lg:text-[170px] max-lg:leading-[400px] max-sm:text-[85px] max-sm:leading-[220px]">
          speaks
        </h2>
        <p className="text-left uppercase text-[#DADADA] font-black w-[400px] text-2xl max-sm:text-sm max-sm:w-full">
          Peek into a lineup of projects where logic meets innovation.
        </p>
      </motion.section>
      <section className="w-full h-auto flex flex-wrap justify-start items-center gap-5 mt-20 overflow-hidden">
        <motion.div
          className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-[#D3D3D3] mt-10 max-lg:w-full"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
            <h1 className="text-[#D3D3D3] text-2xl scale-y-170 font-black tracking-tighter max-sm:text-xl">
              THE EXIT INTERVIEW
            </h1>
            <h1 className="relative top-5 text-[#D3D3D3] text-5xl scale-y-150 font-black uppercase tracking-tighter max-sm:text-3xl max-sm:mt-4">
              The Developer’s Experiment
            </h1>
          </div>
          <div className=" w-full h-auto flex items-center justify-center">
            <Image
              src="/13.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-full rotate-10"
            />
          </div>
        </motion.div>
        <motion.div
          className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-[#D3D3D3] mt-10 max-lg:w-full"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
            <h1 className="text-[#D3D3D3] text-2xl scale-y-170 font-black tracking-tighter max-sm:text-xl">
              THE STUDIO
            </h1>
            <h1 className="relative top-5 text-[#D3D3D3] text-5xl scale-y-150 font-black uppercase tracking-tighter max-sm:text-3xl max-sm:mt-4">
              a home for Musician
            </h1>
          </div>
          <div className=" w-full h-auto flex items-center justify-center">
            <Image
              src="/14.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-full rotate-20"
            />
          </div>
        </motion.div>
        <motion.div
          className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-[#D3D3D3] mt-10 max-lg:w-full"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
            <h1 className="text-[#D3D3D3] text-2xl scale-y-170 font-black tracking-tighter max-sm:text-xl">
              THE STUDIO
            </h1>
            <h1 className="relative top-5 text-[#D3D3D3] text-5xl scale-y-150 font-black uppercase tracking-tighter max-sm:text-3xl max-sm:mt-4">
              a home for Musician
            </h1>
          </div>
          <div className=" w-full h-auto flex items-center justify-center">
            <Image
              src="/14.webp"
              alt="Loading"
              width={100}
              height={100}
              loading="lazy"
              className="w-full rotate-20"
            />
          </div>
        </motion.div>
      </section>
      <section className="w-full h-auto mt-10 overflow-hidden">
        <Design />
      </section>
      <section className="w-full h-auto mt-10 overflow-hidden">
        <Contact />
      </section>
    </main>
  );
}
