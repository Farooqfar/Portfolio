"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full h-auto p-8 flex items-center justify-center">
      <ul className="flex justify-center items-center gap-10">
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/" ? "line-through" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/work" ? "line-through" : ""
          }`}
        >
          <Link href="/work">Work</Link>
        </li>
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/about" ? "line-through" : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/contact" ? "line-through" : ""
          }`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
