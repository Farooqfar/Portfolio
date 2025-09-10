import { motion } from "motion/react";
import Profile from "./Profile";
export default function About() {
  return (
    <section className="w-full h-auto">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mt-20 text-center text-[200px] font-[cursive] font-black text-white leading-[200px] scale-y-150 tracking-tighter max-lg:text-[166px] max-sm:text-7xl max-sm:leading-20"
      >
        About
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="pt-28 text-center text-[200px] font-black text-transparent uppercase [-webkit-text-stroke:3px_white] leading-[160px] scale-y-150 tracking-tighter max-lg:text-[166px] max-sm:text-7xl max-sm:leading-20"
      >
        beyond code
      </motion.h1>
      <div className="mt-52 flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-[70%] text-[#C8C8C8] font-bold text-4xl text-center "
        >
          For the past One years, ☟ I&#39;ve been living the ✰ dream —
          transforming big ideas into code that not only looks incredible but
          also works seamlessly. but also work like a charm ❀. <br /> <br />
          My focus ✎ is on crafting digital experiences that truly connect 🔗
          with people.
        </motion.p>
        <Profile />
      </div>
    </section>
  );
}
