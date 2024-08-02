"use client";

import NavBar from "./components/NavBar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";
import Link from "next/link";

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

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

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
              alt="Biodun Coker (FCCA, AFA)"
              width={600}
              height={700}
              className="transition-opacity duration-1000 mt-24"
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
              Biodun Coker (FCCA, AFA)
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
                Biodun Coker (FCCA, AFA) was born in the vibrant Oluwole,
                Olowogbowo area of Lagos Island, growing up in a politically
                active environment thanks to his father, Alhaji Abdulbaqee
                Yemisi Coker, a dedicated grassroots politician. Their family
                home on Wilson Lane was a central hub for political meetings,
                where he and his siblings managed logistics, from setting up
                seats to handling media and refreshments.
                <br></br>
                During General Sanni Abacha&#39;s transition from military to
                civilian rule, their home witnessed the covert formation of five
                political parties. This significant period profoundly influenced
                his early political insights and laid the groundwork for his
                future endeavors in politics.
                <br></br>
                Today, Biodun Coker is a vision-driven Nigerian, constantly
                seizing opportunities to serve communities and make a positive
                impact on lives.
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
                className="float-right"
              />
              <p className="leading-8">
                Biodun&#39;s educational journey reflects his commitment to
                academic excellence and intellectual growth. After completing
                his secondary education, he pursued a Bachelor of Science in
                Economics at Lagos State University, where he laid a solid
                foundation in economic principles. Driven by a desire to expand
                his expertise, he then achieved a second Bachelor of Science
                degree in Applied Accounting from Oxford Brookes University.
                This dual academic background in economics and accounting
                highlights his dedication to both theoretical and practical
                aspects of finance.
              </p>
            </div>

            <div
              className={`transition-all duration-500 ${
                currentScroll >= 400
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-40"
              }`}
            >
              <Image
                src="/ACCA LOGO RED.PNG"
                alt="fruition"
                width={100}
                height={100}
                className="float-left mr-3"
              />
              <p className="leading-8">
                Aside from being a Fellow of the ACCA, he has also carved a
                remarkable entrepreneurial trajectory by establishing multiple
                successful businesses both in Nigeria and internationally. His
                ventures span various industries, showcasing his versatility and
                business acumen. Through strategic planning and innovative
                thinking, he has been able to build and grow enterprises that
                not only thrive in competitive markets but also contribute
                significantly to economic development. His entrepreneurial
                spirit, combined with his extensive financial expertise, has
                made him a respected figure in the business community both
                locally and abroad.
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
                Leadership is anchored in vision, integrity, and
                empathy—qualities that Biodun Coker (FCCA, AFA) exemplifies
                through his actions and contributions. In a world where
                improving lives is a constant priority, Biodun is dedicated to
                making a difference. His commitment to giving back is evident in
                his diverse efforts, from providing vital resources to actively
                supporting communities.
              </p>
              <p className="leading-7">
                Driven by a passion for fostering a sense of unity and enhancing
                well-being, Biodun has seamlessly blended his career
                achievements and entrepreneurial success with a profound
                commitment to uplifting others. As he continues to build his
                career and expand his impact, his core mission remains clear: to
                mentor, resource, and empower individuals, guiding them towards
                realizing their full potential and creating a ripple effect of
                positive change.
              </p>
              <p className="leading-7">
                During the course of building his career, running a business,
                and supporting communities, Biodun Coker (FCCA, AFA) has evolved
                into an empathetic soul with the innate desire to impact as many
                lives as possible. His life goal is to provide mentorship,
                resources, and opportunities to empower people and place them on
                a path to reach their full potential.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1F7DCD] text-xl font-medium">
                Philanthropy
              </h3>
              <p className="leading-7">
                With a distinguished expertise in accounting and as a Fellow of
                the ACCA, Biodun Coker (FCCA, AFA) recognizes the crucial role
                of acquiring relevant skills. Driven by his commitment to giving
                back to society, he has established the Biodun Coker Foundation.
                This foundation is dedicated to empowering lives within the
                Lagos Island community by providing free IT and computer skills
                training, vocational studies, and other community development
                courses. His mission is to equip individuals with the knowledge
                and tools needed to thrive and make meaningful contributions to
                society. For more information, visit{" "}
                <Link
                  href="https://bioduncokerfoundation.org/"
                  className="underline text-[#1F7DCD]"
                >
                  Biodun Coker Foundation.
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1F7DCD] text-xl font-medium">Family</h3>
              <p className="leading-7">
                As much as Biodun Coker (FCCA, AFA) is committedly involved in
                public service, he hasn&apos;t faltered when it comes to
                building a stable and happy household. He&apos;s currently
                married and blessed with two brilliant kids.
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
            <span className="text-[#1F7EC9] text-2xl font-medium">
              Biodun Coker (FCCA, AFA)
            </span>
          </h2>
          <p className="text-center mt-5">
            Send Biodun Coker (FCCA, AFA) a message
          </p>

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
