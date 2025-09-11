import React from "react";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "motion/react";
export default function Profile() {
  return (
    <main>
      <div className="w-full h-auto mt-52 flex justify-center gap-8 items-start p-4 max-lg:gap-4 max-sm:flex-col max-sm:items-center">
        <div className="w-[50%] h-auto flex flex-col items-end justify-start max-sm:justify-center max-sm:w-[100%]">
          <div className="w-auto">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-100 text-[#C8C8C8] font-bold text-2xl text-start max-lg:w-full"
            >
              I&#39;ve had the opportunity to work with some amazing teams and
              projects, building full-stack applications with the MERN stack.
              From front-end interfaces that look and feel great to back-end
              systems that run smoothly, I love turning ideas into products that
              truly connect with people.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 w-60 flex gap-3 justify-center items-center text-center text-[#C8C8C8] text-2xl border-2 p-2 border-[#C8C8C8] rounded-3xl cursor-pointer hover:bg-white hover:text-black"
              download
              href="/cv/MuhammadFarooq.pdf"
            >
              Download CV <FaDownload />
            </motion.a>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-start items-start gap-20 max-sm:justify-center max-sm:items-center max-sm:w-[100%]">
          <Image src="/profile.jpg" alt="profile" width={260} height={260} />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-100 text-[#C8C8C8] font-bold text-2xl text-start max-lg:w-80"
          >
            When I&#39;m not coding, you&#39;ll usually find me exploring new
            technologies, solving real-world problems, or sketching out ideas
            for my next project
          </motion.p>
        </div>
      </div>
    </main>
  );
}
