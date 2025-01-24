"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ setCurrentScroll, setCurrentWidth }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    const activeNav = () => {
      setCurrentScroll(window.scrollY);
      setCurrentWidth(window.innerWidth);
      if (window.scrollY >= 0 && window.scrollY <= 10) {
        setNavBg(false);
      } else {
        setNavBg(true);
      }

      if (window.innerWidth >= 0 && window.innerWidth <= 640) {
        if (window.scrollY >= 0 && window.scrollY <= 815) {
          setActiveLink("home");
        } else if (window.scrollY >= 816 && window.scrollY <= 2849) {
          setActiveLink("about");
        } else if (window.scrollY >= 2850 && window.scrollY <= 4790) {
          setActiveLink("leadership");
        } else {
          setActiveLink("contact");
        }
      } else {
        if (window.scrollY >= 0 && window.scrollY <= 815) {
          setActiveLink("home");
        } else if (window.scrollY >= 816 && window.scrollY <= 1635) {
          setActiveLink("about");
        } else if (window.scrollY >= 1636 && window.scrollY <= 2589) {
          setActiveLink("leadership");
        } else {
          setActiveLink("contact");
        }
      }
    };

    window.addEventListener("scroll", activeNav);
    window.addEventListener("resize", activeNav);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", activeNav);
      window.removeEventListener("resize", activeNav);
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

        <div className="hidden md:flex gap-10 lg:gap-16 -ml-10">
          <NavLink href="#home" activeLink={activeLink}>
            Home
          </NavLink>
          <NavLink href="/about" activeLink={activeLink}>
            About
          </NavLink>
          <NavLink href="#leadership" activeLink={activeLink}>
            Leadership
          </NavLink>
          <NavLink href="#contact" activeLink={activeLink}>
            Contact
          </NavLink>
          <NavLink
            href="https://bioduncokerfoundation.org/"
            activeLink={activeLink}
          >
            Foundation
          </NavLink>
        </div>
        <div className="relative block md:hidden">
          {!navMenu ? (
            <RiMenuFold2Fill size={30} onClick={() => setNavMenu(!navMenu)} />
          ) : (
            <RiMenuFoldFill size={30} onClick={() => setNavMenu(!navMenu)} />
          )}
          <div
            className={`absolute p-5 w-screen h-[95vh] -p-10 -right-3 mt-3 bg-white border -z-10 transition-transform duration-300 flex flex-col items-center justify-center gap-20 text-xl  text-black ${
              !navMenu ? "-translate-x-[200rem]" : "translate-x-0"
            }`}
          >
            {/* <div className="flex justify-end">
              <IoMdClose
                size={20}
                className="cursor-pointer"
                onClick={() => setNavMenu(false)}
              />
            </div> */}
            <NavLink
              href="#home"
              activeLink={activeLink}
              onClick={() => setNavMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              activeLink={activeLink}
              onClick={() => setNavMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              href="#leadership"
              activeLink={activeLink}
              onClick={() => setNavMenu(false)}
            >
              Leadership
            </NavLink>
            <NavLink
              href="#contact"
              activeLink={activeLink}
              onClick={() => setNavMenu(false)}
            >
              Contact
            </NavLink>
            <NavLink
              href="https://bioduncokerfoundation.org/"
              activeLink={activeLink}
              onClick={() => setNavMenu(false)}
            >
              Foundation
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, activeLink, onClick }) => (
  <Link href={href} onClick={onClick && onClick}>
    <p
      className={`hover:text-[#1F7DCD] border-b-2 border-transparent  text-lg transition-all duration-300 ${
        activeLink === href.slice(1) &&
        "border-[#1F7DCD] md:border-transparent md:text-[#1F7DCD]"
      }`}
    >
      {children}
    </p>
  </Link>
);

export default NavBar;
