"use client";
import dynamic from "next/dynamic";
const About = dynamic(() => import("./About"), { ssr: false });
import { motion, useScroll, useTransform } from "motion/react";
import { GiArchiveResearch } from "react-icons/gi";
import { PiStrategy } from "react-icons/pi";
import { SiTestcafe } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Design() {
  const pathname = usePathname();
  return (
    <main>
      <motion.section
        className="w-full h-auto mt-32"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-left font-[cursive] p-5 text-[#DADADA] text-[250px] leading-[220px] max-lg:text-[160px] max-lg:mb-20 max-sm:text-[80px]">
          Approach
        </h1>
        <h1 className="text-right leading-[170px] p-5 uppercase text-transparent text-[170px] font-black [-webkit-text-stroke:2px_#DADADA] scale-y-150 tracking-tighter max-sm:text-[90px] max-sm:leading-[100px]">
          Ideas into <br /> Impact
        </h1>
        <p className="text-left uppercase text-[#DADADA] font-black w-[400px] text-2xl max-lg:mt-32 max-sm:text-sm max-sm:w-full">
          It’s not just about making things pretty — it’s about making them
          count.
        </p>
      </motion.section>
      <section className="w-auto h-auto mt-32 flex justify-center gap-32 overflow-hidden flex-wrap">
        <motion.div
          className="w-100 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <GiArchiveResearch className="text-white text-[250px] text-center max-sm:text-[130px]" />
          <h1 className="text-white text-center text-3xl font-black max-sm:text-2xl">
            -1-
          </h1>
          <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150 max-sm:text-4xl">
            research
          </h1>
          <p className="text-white text-2xl text-center mt-10 max-sm:text-md">
            Digging into insights and user needs to uncover the story behind the
            solution.
          </p>
        </motion.div>
        <motion.div
          className="w-100 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <PiStrategy className="text-white text-[250px] text-center max-sm:text-[130px]" />
          <h1 className="text-white text-center text-3xl font-black max-sm:text-2xl">
            -2-
          </h1>
          <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150 max-sm:text-4xl">
            STRATEGIZE
          </h1>
          <p className="text-white text-2xl text-center mt-10 max-sm:text-md">
            Mapping out the vision and strategy to align creativity with goals.
            Clarity meets purpose here.
          </p>
        </motion.div>
        <motion.div
          className="w-100 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <SiAltiumdesigner className="text-white text-[250px] text-center max-sm:text-[130px]" />
          <h1 className="text-white text-center text-3xl font-black max-sm:text-2xl">
            -3-
          </h1>
          <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150 max-sm:text-4xl">
            DESIGN
          </h1>
          <p className="text-white text-2xl text-center mt-10 max-sm:text-md">
            Where the magic happens! From concepts to visuals, its all about
            bringing bold ideas to life.
          </p>
        </motion.div>
        <motion.div
          className="w-100 flex flex-col items-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <FaCode className="text-white text-[250px] text-center max-sm:text-[130px]" />
          <h1 className="text-white text-center text-3xl font-black max-sm:text-2xl">
            -4-
          </h1>
          <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150 max-sm:text-4xl">
            BUILD
          </h1>
          <p className="text-white text-2xl text-center mt-10 max-sm:text-md">
            Turning designs into reality with seamless development that bridges
            form and function.
          </p>
        </motion.div>
        <motion.div
          className="w-100 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <SiTestcafe className="text-white text-[250px] text-center max-sm:text-[130px]" />
          <h1 className="text-white text-center text-3xl font-black max-sm:text-2xl">
            -5-
          </h1>
          <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150 max-sm:text-4xl">
            TEST
          </h1>
          <p className="text-white text-2xl text-center mt-10 max-sm:text-md">
            Fine-tuning every detail through testing to ensure it works
            beautifully for users.
          </p>
        </motion.div>
        <motion.div
          className="w-100 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <FaRepeat className="text-white text-[250px] text-center max-sm:text-[130px]" />
          <h1 className="text-white text-center text-3xl font-black max-sm:text-2xl">
            -6-
          </h1>
          <h1 className="text-white text-6xl font-black text-center uppercase scale-y-150 max-sm:text-4xl">
            REPEAT
          </h1>
          <p className="text-white text-2xl text-center mt-10 max-sm:text-md">
            Refining, evolving, and growing—because great design is never one
            and done.
          </p>
        </motion.div>
      </section>
      <section
        className={`w-full h-auto mt-10 overflow-hidden ${
          pathname === "/" ? "block" : "hidden"
        }`}
      >
        <About />
      </section>
      <section className="w-full h-auto mt-80">
        <marquee
          scrollamount="5"
          loop="-1"
          className="text-9xl h-auto p-3 font-black text-white scale-y-150 max-sm:text-5xl"
        >
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          HELLO!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          こんにちは!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          HOLA!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          HALLO!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          OLÁ!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          مرحبا!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          CIAO!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          BONJOUR!
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            SAY
          </span>{" "}
          HELLO!
        </marquee>{" "}
      </section>
    </main>
  );
}
