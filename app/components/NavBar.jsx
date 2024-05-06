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
      } else if (window.scrollY >= 816 && window.scrollY <= 1000) {
        setActiveLink("about");
      }
    };

    window.addEventListener("scroll", activeNav);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", activeNav);
    };
  }, []);

  return (
    <main
      className={`fixed top-0 left-0 w-screen z-50 p-5 ${
        !navBg ? "bg-transparent" : "bg-[#101828]"
      }`}
    >
      <div className="max-w-7xl mx-auto text-white flex justify-between text-lg">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex gap-10 items-center">
          <Link
            href="#home"
            className={`hover:text-[#1F7DCD] transition-all duration-300 ${
              activeLink === "home" && "text-[#1F7DCD]"
            }`}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={`hover:text-[#1F7DCD] transition-all duration-300 ${
              activeLink === "about" && "text-[#1F7DCD]"
            }`}
          >
            About
          </Link>
          <Link
            href="#leadership"
            className={`hover:text-[#1F7DCD] transition-all duration-300`}
          >
            Leadership
          </Link>
          <Link
            href="#values"
            className={`hover:text-[#1F7DCD] transition-all duration-300`}
          >
            Values
          </Link>
          <Link
            href="#contact"
            className={`hover:text-[#1F7DCD] transition-all duration-300`}
          >
            Contact
          </Link>
          {/* {scroll} */}
        </div>
      </div>
    </main>
  );
};

export default NavBar;
