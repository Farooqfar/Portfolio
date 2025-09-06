"use client";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../components/Profile"), { ssr: false });
export default function page() {
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
    </main>
  );
}
