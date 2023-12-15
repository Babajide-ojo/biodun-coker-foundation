"use client";
import Image from "next/image";
import ellipse from "../../public/images/gold ellipse.png";
import Link from "next/link";
import InputField from "../components/inputs/InputField";
import { MdEmail, MdLockOutline, MdMailOutline } from "react-icons/md";
import { IoEye, IoLockClosed } from "react-icons/io5";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import mailLogo from "../../public/images/mailLogo.png";
import SignUp from "../components/sign-up/SignUp";
import BusinessSignUp from "../components/business-sign-up/BusinessSignUp";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BusinessLoginPage = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [forgotPasswordMail, setForgotPasswordMail] = useState("");
  const [forgotPasswordMailError, setForgotPasswordMailError] = useState("");
  const [pageState, setPageState] = useState("login");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDetails = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "forgotPasswordMail") setForgotPasswordMail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setEmailError("Email is required");
      return;
    }
    if (password.length === 0) {
      setPasswordError("Password is required");
      return;
    }
    if (!isEmailValid(email)) {
      setEmailError("Provided text isn't an email");
      return;
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (forgotPasswordMail.length < 1) {
      setForgotPasswordMailError("Email is required");
      return;
    }
    if (!isEmailValid(forgotPasswordMail)) {
      setForgotPasswordMailError("Provided text isn't an email");
      return;
    }
    setPageState("verifyEmail");
  };

  return (
    <main className="min-h-screen w-full bg-btDarkBlue relative text-white p-5 sm:p-10 flex justify-center">
      {pageState === "login" && (
        <div className="max-w-xl w-full bg-white relative z-10 p-5 sm:p-10 pt-16 rounded-lg bg-opacity-30 h-fit">
          <div
            className="flex gap-2 items-center font-bold text-lg cursor-pointer w-fit"
            onClick={() => router.back()}
          >
            <IoIosArrowBack size={20} />
            Back
          </div>
          <p className="font-semibold mt-10">Welcome back</p>
          <p className="text-xs">
            Don&apos;t have an account?{" "}
            <span
              href=""
              className="font-semibold text-sm text-btGold cursor-pointer"
              // onClick={() => setPageState("signUp")}
            >
              Sign Up
            </span>
          </p>

          <div className="w-full mt-10 flex flex-col gap-5">
            <div>
              <InputField
                value={email}
                name={"email"}
                label={"Email"}
                inputType={"email"}
                borderColor={emailError && "border-red-500"}
                startIcon={<MdEmail size={20} />}
                placeHolder={"Email"}
                placeHolderColor={"placeholder-white"}
                onChange={handleDetails}
              />
              {emailError && (
                <div className="text-xs text-red-800">{emailError}</div>
              )}
            </div>
            <div>
              <InputField
                value={password}
                name={"password"}
                label={"Password"}
                inputType={isPasswordVisible ? "text" : "password"}
                startIcon={<IoLockClosed size={20} />}
                placeHolder={"Password"}
                placeHolderColor={"placeholder-white"}
                borderColor={emailError && "border-red-500"}
                endIcon={
                  isPasswordVisible ? (
                    <FaEyeSlash
                      size={20}
                      onClick={() => setIsPasswordVisible(false)}
                      className="text-white cursor-pointer"
                    />
                  ) : (
                    <IoEye
                      size={20}
                      onClick={() => setIsPasswordVisible(true)}
                      className="text-white cursor-pointer"
                    />
                  )
                }
                onChange={handleDetails}
              />
              {passwordError && (
                <div className="text-xs text-red-800">{passwordError}</div>
              )}
            </div>
          </div>

          <p
            className="mt-3 text-sm font-semibold cursor-pointer"
            onClick={() => setPageState("forgotPassword")}
          >
            Forgot your password?
          </p>

          <button
            className="w-full p-2 rounded-md bg-btDarkBlue font-semibold text-sm mt-5"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login to business account
          </button>
        </div>
      )}
      {pageState === "forgotPassword" && (
        <div className="max-w-xl w-full bg-white relative z-10 p-5 sm:p-10 pt-16 rounded-lg bg-opacity-30 h-fit">
          <p className="font-semibold">Welcome back</p>
          <p className="text-white text-sm mt-3 mb-5">
            Don&apos;t fret! We understand how you feel, simply provide your
            registered email below to receive a reset link.
          </p>
          <div>
            <InputField
              value={forgotPasswordMail}
              name={"forgotPasswordMail"}
              label={"Email"}
              inputType={"email"}
              borderColor={forgotPasswordMailError && "border-red-500"}
              startIcon={<MdEmail size={20} />}
              placeHolder={"johndoe@gmail.com"}
              placeHolderColor={"placeholder-white"}
              onChange={handleDetails}
            />
            {forgotPasswordMailError && (
              <div className="text-xs text-red-800">
                {forgotPasswordMailError}
              </div>
            )}
          </div>
          <button
            className="w-full p-2 rounded-md bg-btDarkBlue font-semibold text-sm my-5 "
            onClick={(e) => {
              handleResetPassword(e);
            }}
          >
            Reset
          </button>
          <p
            className="mx-auto font-semibold text-sm text-btDarkBlue cursor-pointer w-fit"
            onClick={() => setPageState("login")}
          >
            Back
          </p>
        </div>
      )}

      {pageState === "verifyEmail" && (
        <div className="max-w-xl w-full bg-white bg-opacity-90 relative z-10 p-5 pt-16 sm:p-10 rounded-lg h-fit text-center">
          <Image src={mailLogo} alt="mail logo" className="mx-auto" />

          <p className="my-5 text-3xl font-bold text-black">Check your email</p>
          <p className="text-btTextGray font-semibold text-xl">
            We&apos;ve sent a link to your email address
          </p>
          <p className="text-xl text-black font-semibold">
            {forgotPasswordMail}
          </p>
          <p className="mt-10 text-btTextGray font-semibold text-xl">
            Didn&apos;t receive an email?{" "}
            <span className="text-black font-bold">Resend</span>{" "}
          </p>
        </div>
      )}
      {/* {pageState === "signUp" && <BusinessSignUp />} */}

      <Image
        src={ellipse}
        alt="ellipse"
        className="absolute h-full w-full top-0 left-0 "
      />
    </main>
  );
};

export default BusinessLoginPage;
