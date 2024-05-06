"use client"

import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = ({ setCurrentScroll }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const activeNav = () => {
      setCurrentScroll(window.scrollY);
      setScroll(window.scrollY);

      if (window.scrollY >= 0 && window.scrollY <= 10) {
        setNavBg(false);
      } else {
        setNavBg(true);
      }
      if (window.scrollY >= 0 && window.scrollY <= 815) {
        setActiveLink("home");
      } else if (window.scrollY >= 816 && window.scrollY <= 1635) {
        setActiveLink("about");
      } else if (window.scrollY >= 1636 && window.scrollY <= 2300) {
        setActiveLink("leadership");
      }
    };

    window.addEventListener("scroll", activeNav);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", activeNav);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 p-3 md:p-5 ${
        !navBg ? "bg-transparent" : "bg-[#101828]"
      }`}
    >
      <div className="max-w-7xl mx-auto text-white flex justify-between items-center text-lg">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={120} height={40} />
        </Link>

        <div className="flex gap-8 md:gap-16">
          <NavLink href="#home" activeLink={activeLink}>
            Home
          </NavLink>
          <NavLink href="#about" activeLink={activeLink}>
            About
          </NavLink>
          <NavLink href="#leadership" activeLink={activeLink}>
            Leadership
          </NavLink>
     
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, activeLink }) => (
  <Link href={href}>
    <p
      className={`hover:text-[#1F7DCD]  text-xs md:text-md transition-all duration-300 ${
        activeLink === href.slice(1) && "text-[#1F7DCD]"
      }`}
    >
      {children}
    </p>
  </Link>
);

export default NavBar;
