"use client";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Page() {
  return (
    <>
      <main className="w-full">
        <Contact />
      </main>
    </>
  );
}
