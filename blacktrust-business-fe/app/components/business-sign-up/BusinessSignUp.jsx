import Image from "next/image";
import signUpIcon from "../../../public/images/signUpIcon.png";
import InputField from "../inputs/InputField";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const BusinessSignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDetails = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
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
    <main className="p-5 sm:p-10 pt-16">
      <div className="flex items-center">
        <div className="max-w-xl w-full bg-white relative z-10 p-5 sm:p-10 rounded-lg bg-opacity-30 h-fit">
          <Image
            src={signUpIcon}
            alt="sign up icon"
            className="h-[20rem] mx-auto"
          />
          <p className="text-2xl font-semibold whitespace-nowrap">
            Hi There! Welcome to BlackTrust<sup>TM</sup>
          </p>

          <p className="mt-5">
            An Online Community where we report scam activities to inform and
            prevent people from falling victim to fraudulents acts.
          </p>
        </div>

        <div className="max-w-3xl w-full bg-white relative z-10 p-5 sm:p-10 rounded-lg bg-opacity-30 h-fit border border-white -ml-5">
          <p className="font-semibold text-2xl">Create an account</p>
          <p className="font-medium">
            Already have an account? <span className="text-btGold">Login</span>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessSignUp;
