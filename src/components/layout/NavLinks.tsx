"use client";
import Link from "next/link";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

interface NavLink {
  title: string;
  path: string;
}
interface NavLinksProps {
  navLinks: NavLink[];
}
export default function NavLinks({ navLinks }: NavLinksProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`flex bg flex-col md:flex-row transition-all duration-500  gap-2 md:text-base text-xl font-medium md:justify-between md:items-center pt-20 md:pt-0  ${
          isOpen
            ? "absolute top-0 left-0 opacity-100 bg-purple-primary z-40 w-full h-[100vh]"
            : " relative top-0 h-auto  text-nowrap md:opacity-100 pointer-events-none md:pointer-events-auto"
        }`}
      >
        <span
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute  top-5 flex md:hidden right-5 z-50 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <BiX size={45} />
        </span>
        {navLinks.map(({ title, path }, index) => (
          <Link
            key={index}
            className={`text-verdant mx-4   ${
              isOpen ? "border-b-4 text-white pl-4" : " hidden md:block"
            } ${path === '/signup' && 'rounded-full px-8 py-2 bg-white text-black border-[1px]'}`}
            href={path}
          >
            <p className={path === '/signup' ? "text-black" : 'text-white'}>{title}</p>
          </Link>
        ))}
      </div>
      <span className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <HiMenu size={40} />
      </span>
    </>
  );
}
