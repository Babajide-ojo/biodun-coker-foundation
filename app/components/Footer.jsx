import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <main className="bg-[#101828] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl pt-36 pb-20 p-5 md:px-10 flex flex-col justify-center items-center">
          <div className="max-w-xs w-full h-32 sm:h-40 relative">
            <Image src="/big-logo.png" alt="logo" fill />
          </div>

          <p className="my-5 font-light text-center">
            Improving communities and impacting change
          </p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="bg-[#1F7EC9] p-2 rounded-full transition-all trasnform duration-200 hover:translate-y-2"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="bg-[#1F7EC9] p-2 rounded-full transition-all trasnform duration-200 hover:translate-y-2"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="bg-[#1F7EC9] p-2 rounded-full transition-all trasnform duration-200 hover:translate-y-2"
            >
              <BiLogoGmail size={20} />
            </Link>
            <Link
              href="#"
              className="bg-[#1F7EC9] p-2 rounded-full transition-all trasnform duration-200 hover:translate-y-2"
            >
              <FaYoutube size={20} />
            </Link>
            <Link
              href="#"
              className="bg-[#1F7EC9] p-2 rounded-full transition-all trasnform duration-200 hover:translate-y-2"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="#"
              className="bg-[#1F7EC9] p-2 rounded-full transition-all trasnform duration-200 hover:translate-y-2"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center p-5">
          <p className="">Copyright &copy; 2024 Biodun Coker</p>
          <Link href={"#home"} className="p-4 bg-[#1F7EC9] cursor-pointer">
            <RiArrowUpSLine size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Footer;
