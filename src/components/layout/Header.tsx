import { Julee } from "next/font/google";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import NavLinks from "./NavLinks";

function Header() {
  const navLinks = [
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "About Raduno",
      path: "/about",
    },
    {
      title: "Log in",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/signup",
    },
  ];
  return (
    <nav className="w-full bg-black flex md:justify-between px-4 md:px-12 justify-between items-center py-3">
      <header className="w-fit">
        <h3 className={`text-3xl text-white`}>
          <Link href={"/"}>Raduno</Link>
        </h3>
      </header>
      <NavLinks navLinks={navLinks} />
    </nav>
  );
}

export default Header;
