"use client";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("../components/Cards"), { ssr: false });
const Design = dynamic(() => import("../components/Design"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
export default function page() {
  return (
    <main className=" selection:bg-green-400 selection:text-black">
      <section className="w-full pt-32 p-5">
        <h1 className="text-[210px] text-white scale-y-150 uppercase font-black text-center max-sm:text-[125px]">
          work
        </h1>
        <p className="mt-72 text-white text-center text-4xl max-sm:text-3xl">
          Peek into a lineup of web projects where creativity 🎨 meets clean
          code 💻.
        </p>
      </section>
      <section className="mt-80 mb-20">
        <Card />
      </section>
      <section>
        <Design />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
