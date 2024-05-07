"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ setCurrentScroll }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navMenu, setNavMenu] = useState(false);
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
      } else if (window.scrollY >= 1636 && window.scrollY <= 2589) {
        setActiveLink("leadership");
      } else {
        setActiveLink("contact");
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

        <div className="hidden md:flex gap-16">
          <NavLink href="#home" activeLink={activeLink}>
            Home
          </NavLink>
          <NavLink href="#about" activeLink={activeLink}>
            About
          </NavLink>
          <NavLink href="#leadership" activeLink={activeLink}>
            Leadership
          </NavLink>
          <NavLink href="#contact" activeLink={activeLink}>
            Contact
          </NavLink>
        </div>
        <div className="relative">
          {!navMenu ? (
            <RiMenuFold2Fill size={30} onClick={() => setNavMenu(!navMenu)} />
          ) : (
            <RiMenuFoldFill size={30} onClick={() => setNavMenu(!navMenu)} />
          )}
          <div
            className={`absolute p-5 w-screen -right-3 mt-5 bg-white border z-50 transition-transform duration-300 flex flex-col gap-5 text-black ${
              !navMenu ? "-translate-x-[50rem]" : "translate-x-0"
            }`}
          >
            <div className="flex justify-end">
              <IoMdClose
                size={20}
                className="cursor-pointer"
                onClick={() => setNavMenu(false)}
              />
            </div>
            <NavLink
              href="#home"
              activeLink={activeLink}
              onClick={() => setNavMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="#about"
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
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, activeLink, onClick }) => (
  <Link href={href} onClick={onClick && onClick}>
    <p
      className={`hover:text-[#1F7DCD]  text-xs md:text-lg transition-all duration-300 ${
        activeLink === href.slice(1) && "text-[#1F7DCD]"
      }`}
    >
      {children}
    </p>
  </Link>
);

export default NavBar;
