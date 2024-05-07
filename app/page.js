"use client";

import NavBar from "./components/NavBar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [imgSrc, setImgSrc] = useState("/img3.jpg");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   const allImg = ["/img3.jpg", "/img3.jpg", "/img3.jpg"];
  //   let count = 0;
  //   const interval = setInterval(() => {
  //     if (count < 2) {
  //       count += 1;
  //     } else count = 0;

  //     setImgSrc(allImg[count]);
  //     setIsImageLoaded(false); // Reset image loaded state for smooth transition
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // console.log(currentScroll);

  return (
    <main className={`${poppins.className}  bg-[#bbbbc9] `}>
      <NavBar
        setCurrentScroll={setCurrentScroll}
        setCurrentWidth={setCurrentWidth}
      />
      <div id="home" className="h-screen overflow-hidden bg-[#bbbbc9]">
        <div className="max-w-7xl mx-auto h-full flex flex-col sm:flex-row mt-28 md:mt-0 items-center sm:justify-between gap-5 p-5 md:p-10 z-10">
          <div className="max-w-lg">
            <p className="text-lg pb-5 font-medium text-[#282d55]">
              Let&apos;s Stand Together
            </p>

            <p className="text-lg font-medium max-w-2xl text-[#282d55]">
              An exceptional leader creating avenues to improve the quality of
              life in our community, render change and foster unity
            </p>
            <h1 className="text-2xl font-bold mt-8">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Improving communities",
                  2000,
                  "Impacting change",
                  2000,
                  "Impacting lives",
                  2000,
                  "Creating solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                  color: "#282d55",
                }}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div
            className={`right-0 bottom-0 transition-opacity duration-500 ${
              isImageLoaded && currentScroll <= 400
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <Image
              src={imgSrc}
              alt="biodun coker"
              width={600}
              height={700}
              className="transition-opacity duration-1000"
              onLoad={handleImageLoad}
            />
            {/* <div className="h-full w-full bg-white bg-opacity-100 z-20" /> */}
          </div>
        </div>
      </div>
      <div id="about" className="w-full text-gray-500 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto py-32 p-5">
          <h2
            className={`text-center text-[#39ADF8] transition-all transform duration-500 ${
              currentScroll >= 400
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-40"
            }`}
          >
            About{" "}
            <span className="text-[#1F7EC9] text-3xl font-medium">
              Biodun Coker
            </span>
          </h2>
          <div className={`mt-10 flex flex-col gap-10`}>
            <div
              className={`transition-all duration-500 sm:flex gap-5 items-start border-blue border-b-2 pb-8  ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-40"
              }`}
            >
              <p className="leading-8">
                Biodun Coker is a vision-driven bonified Nigerian who’s
                constantly seizing the opportunity to serve communities and
                positively impact lives. His early life began in Olowogbowo Area
                of Lagos Island, Lagos State, where he was raised within the
                four walls of his biological parents’ home. <br></br>
                Fortunately, Biodun’s parents knew how essential it was for a
                child to receive a sound education from an early age. He was
                sent to Flora Nursery and Primary School, and then to Lagos
                State Model College, Igbonla.{" "}
              </p>
            </div>

            <div
              className={`transition-all duration-500 sm:flex sm:flex-row-reverse gap-5 items-start border-blue border-b-2 pb-8 ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-40"
              }`}
            >
              <Image
                src="/oxford_brookes.png"
                alt="oxford brookes"
                width={100}
                height={100}
                className="float-right sm:float-none"
              />
              <p className="leading-8">
                Upon the completion of his secondary schooling, Biodun furthered
                his education as he got admitted to Lagos State University,
                where he successfully bagged a BSc in Economics. <br></br>{" "}
                Interestingly, he was willing to broaden his horizons even after
                this milestone. This impelled him to earn another BSc in Applied
                Accounting from Oxford Brookes University.
              </p>
            </div>

            <div
              className={`transition-all duration-500 sm:flex gap-5 items-start ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-40"
              }`}
            >
              <Image
                src="/fruition.jpeg"
                alt="fruition"
                width={100}
                height={100}
                className="float-left sm:float-none mr-3"
              />
              <p className="leading-8">
                As an accomplished chartered accountant, Biodun Coker is a
                Fellow member of Association of Chartered Certified Accountants
                (ACCA) and also a member of Institute of Financial Accountants
                (IFA). <br></br>Aside from his thriving career in accounting, he
                has also carved a brilliant entrepreneurial trajectory by
                establishing two businesses. He’s the founder and director of
                Fruition Consultant Limited and Fruition Outsourcing Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="leadership"
        className={`text-gray-500 overflow-hidden bg-[#eef1ff] transition-all duration-500 ${
          currentWidth >= 0 && currentWidth <= 640
            ? currentScroll >= 2000
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-40"
            : currentScroll >= 1000
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-40"
        }`}
      >
        <div className="max-w-7xl mx-auto p-5 md:px-10 py-32">
          <h2 className="text-center text-3xl text-[#282d55] font-medium">
            Exceptional Leader
          </h2>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-5">
              <p className="leading-7">
                Leadership is built on the bedrock of vision, integrity, and
                empathy. Biodun understands this. That&apos;s the reason these
                leadership qualities are evident in his endeavors and
                contributions to society.
              </p>
              <p className="leading-7">
                Living in a time when there&apos;s a constant need to improve
                people&apos;s lives, Biodun Coker is enthusiastic about giving
                back and helping out in diverse ways. From providing resources
                to lending a hand, his set of values is built around uplifting
                others. He delights in fostering a sense of community and
                enriching people&apos;s well-being.
              </p>
              <p className="leading-7">
                During the course of building his career, running a business,
                and supporting communities, Biodun Coker has evolved into an
                empathetic soul with the innate desire to impact as many lives
                as possible. His life goal is to provide mentorship, resources,
                and opportunities to empower people and place them on a path to
                reach their full potential.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1F7DCD] text-xl font-medium">
                Philanthropy
              </h3>
              <p className="leading-7">
                Having developed an expertise in accounting and attained ACCA
                Fellowship, Biodun Coker well understands the importance of
                adopting relevant skillsets. This is why as part of his goal to
                give back to society, he has established a foundation aimed at
                empowering lives within the Lagos Island community with free IT
                and Computer skills, vocational studies, and other community
                development courses. His goal is to ensure that people are
                equipped with the relevant knowledge and tools to thrive and
                contribute meaningfully to society.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1F7DCD] text-xl font-medium">Family</h3>
              <p className="leading-7">
                As much as Biodun Coker is committedly involved in public
                service, he hasn&apos;t faltered when it comes to building a
                stable and happy household. He&apos;s currently married and
                blessed with two brilliant kids.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className={`text-gray-500 bg-white w-full overflow-hidden`}
      >
        <div className="max-w-5xl mx-auto p-5 md:px-10 py-32">
          <h2
            className={`text-center  md:px-10 text-[#39ADF8] transition-all transform duration-500 ${
              currentWidth >= 0 && currentWidth <= 640
                ? currentScroll >= 3500
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-40"
                : currentScroll >= 1900
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-40"
            }`}
          >
            Contact{" "}
            <span className="text-[#1F7EC9] text-3xl font-medium">
              Biodun Coker
            </span>
          </h2>
          <p className="text-center mt-5">Send Biodun Coker a message</p>

          <div className="mt-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <div
                className={`relative flex items-center w-full transition-all transform duration-1000 ${
                  currentWidth >= 0 && currentWidth <= 640
                    ? currentScroll >= 3500
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-80"
                    : currentScroll >= 1900
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-80"
                }`}
              >
                <FaRegUser
                  size={20}
                  className="left-2 absolute text-[#1F7EC9]"
                />
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInput}
                  className="w-full p-2 pl-8 border border-gray-400 focus:outline-none"
                />
              </div>
              <div
                className={`relative flex items-center w-full transition-all transform duration-1000 ${
                  currentWidth >= 0 && currentWidth <= 640
                    ? currentScroll >= 3500
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-80"
                    : currentScroll >= 1900
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-80"
                }`}
              >
                <MdOutlineEmail
                  size={21}
                  className="left-2 absolute text-[#1F7EC9]"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  className="w-full p-2 pl-8 border border-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div
              className={`w-full transition-all transform duration-1000 ${
                currentWidth >= 0 && currentWidth <= 640
                  ? currentScroll >= 3500
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-80"
                  : currentScroll >= 1900
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-80"
              }`}
            >
              <textarea
                name="message"
                value={formData.message}
                placeholder="Write your message"
                onChange={handleInput}
                rows={5}
                className={`w-full border border-gray-400 my-5 p-2 focus:outline-none`}
              />
              <button className="uppercase font-medium text-white bg-[#1F7EC9] py-2 px-4">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
