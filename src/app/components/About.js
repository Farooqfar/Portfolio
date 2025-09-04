import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
export default function About() {
  return (
    <section className="w-full h-auto">
      <h1 className="mt-20 text-center text-[200px] font-[cursive] font-black text-white leading-[200px] scale-y-150 tracking-tighter max-lg:text-[166px] max-sm:text-7xl max-sm:leading-20">
        About
      </h1>
      <h1 className="pt-18 text-center text-[200px] font-black text-transparent uppercase [-webkit-text-stroke:3px_white] leading-[160px] scale-y-150 tracking-tighter max-lg:text-[166px] max-sm:text-7xl max-sm:leading-20">
        beyond code
      </h1>
      <div className="mt-52 flex flex-col items-center justify-center">
        <p className="w-[70%] text-[#C8C8C8] font-bold text-4xl text-center ">
          For the past One years, ☟ I’ve been living the ✰ dream — transforming
          big ideas into code that not only looks incredible but also works
          seamlessly. but also work like a charm ❀. <br /> <br />
          My focus ✎ is on crafting digital experiences that truly connect 🔗
          with people.
        </p>
        <div className="w-full h-auto mt-52 flex justify-center gap-8 items-start max-lg:gap-4 max-sm:flex-col max-sm:items-center">
          <div className="w-[50%] h-auto flex flex-col items-end justify-start max-sm:justify-center">
            <div className="w-auto">
              <p className="w-100 text-[#C8C8C8] font-bold text-2xl text-start max-lg:w-full">
                I’ve had the opportunity to work with some amazing teams and
                projects, building full-stack applications with the MERN stack.
                From front-end interfaces that look and feel great to back-end
                systems that run smoothly, I love turning ideas into products
                that truly connect with people.
              </p>
              <a
                className="mt-16 w-60 flex gap-3 justify-center items-center text-center text-[#C8C8C8] text-2xl border-2 p-2 border-[#C8C8C8] rounded-3xl cursor-pointer hover:bg-white hover:text-black"
                download
                href="/cv/MuhammadFarooq.pdf"
              >
                Download CV <FaDownload />
              </a>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-start items-start gap-20 max-sm:justify-center max-sm:items-center">
            <Image src="/profile.jpg" width={260} height={260} />
            <p className="w-100 text-[#C8C8C8] font-bold text-2xl text-start max-lg:w-80">
              When I’m not coding, you’ll usually find me exploring new
              technologies, solving real-world problems, or sketching out ideas
              for my next project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
