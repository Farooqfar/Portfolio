"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  console.log(menu);
  return (
    <nav
      className={`relative w-full h-auto p-8 flex items-center justify-center flex-row ${
        menu ? "max-md:w-full max-md:h-screen max-md:flex-col max-md:z-30" : ""
      }`}
    >
      <ul className="absolute top-2 right-1 hidden max-md:block">
        <li className="flex">
          <button
            className="text-white text-4xl"
            onClick={() => setMenu(!menu)}
          >
            <RiMenu4Line
              className={`absolute right-[10px] top-3 ${
                menu ? "hidden" : "block"
              }`}
            />
            <RiMenuFold2Line
              className={`absolute right-[10px] top-3 ${
                menu ? "block" : "hidden"
              }`}
            />
          </button>
        </li>
      </ul>
      <ul
        className={`flex justify-center items-center gap-10 ${
          menu
            ? "max-md:w-[100%] max-md:h-[100%] max-md: bg-black/50 max-md:flex-col max-md:justify-center max-md:items-center"
            : "max-md:hidden"
        }`}
      >
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/" ? "line-through" : ""
          }`}
          onClick={() => setMenu(false)}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/work" ? "line-through" : ""
          }`}
          onClick={() => setMenu(false)}
        >
          <Link href="/work">Work</Link>
        </li>
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/about" ? "line-through" : ""
          }`}
          onClick={() => setMenu(false)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`text-white text-2xl  font-black cursor-pointer transition-all duration-500 ease-in-out ${
            pathname === "/contact" ? "line-through" : ""
          }`}
          onClick={() => setMenu(false)}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
