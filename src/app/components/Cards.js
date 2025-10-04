"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export default function Cards() {
  return (
    <section className="w-full h-auto flex flex-wrap justify-start items-center gap-5 mt-20 overflow-hidden p-5">
      <motion.div
        className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-green-400 mt-10 max-lg:w-full"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
          <h1 className="bg-gradient-to-b from-blue-400 via-yellow-500 to-gray-900 bg-clip-text text-transparent  text-2xl scale-y-170 font-black tracking-tighter max-sm:text-xl">
            THE EXIT INTERVIEW
          </h1>
          <h1 className="relative top-5 bg-gradient-to-b from-blue-400 via-green-500 to-gray-900 bg-clip-text text-transparent  text-5xl scale-y-150 font-black uppercase tracking-tighter max-sm:text-3xl max-sm:mt-4">
            The Developer&#39;s Experiment
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
        className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-blue-400 mt-10 max-lg:w-full"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
          <h1 className="bg-gradient-to-b from-blue-400 via-yellow-500 to-gray-900 bg-clip-text text-transparent  text-2xl scale-y-170 font-black tracking-tighter max-sm:text-xl">
            THE STUDIO
          </h1>
          <h1 className="relative top-5 bg-gradient-to-b from-blue-400 via-green-500 to-gray-900 bg-clip-text text-transparent  text-5xl scale-y-150 font-black uppercase tracking-tighter max-sm:text-3xl max-sm:mt-4">
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
        className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-yellow-500  mt-10 max-lg:w-full"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-auto flex flex-col items-center justify-center text-center p-20">
          <h1 className="bg-gradient-to-b from-blue-400 via-yellow-500 to-gray-900 bg-clip-text text-transparent  text-2xl scale-y-170 font-black tracking-tighter max-sm:text-xl">
            THE STUDIO
          </h1>
          <h1 className="relative top-5 bg-gradient-to-b from-blue-400 via-green-500 to-gray-900 bg-clip-text text-transparent  text-5xl scale-y-150 font-black uppercase tracking-tighter max-sm:text-3xl max-sm:mt-4">
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
        className="relative w-[49%] h-[1000px] flex flex-col justify-between border-2 border-blue-500 mt-10 max-lg:w-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/Farooqfar"
          target="_blank"
          className="w-full h-full"
        >
          <div className="w-full h-full flex justify-center items-center border-yellow-500 border-2 rotate-2 bg-black">
            <div className="w-full h-full flex justify-center items-center border-green-400 border-2 rotate-[-4deg] bg-black">
              <h1 className="bg-gradient-to-b from-blue-400 via-green-500 to-gray-900 bg-clip-text text-transparent  text-6xl text-center">
                View All
              </h1>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
