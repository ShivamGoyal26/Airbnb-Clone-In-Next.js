"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import {
  AiFillGithub,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { emailValidation, passwordValidation } from "@/app/validators";
import useLoading from "@/app/hooks/userLoading";
import { useRegisterAPI } from "@/app/services/auth";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const loadingModule = useLoading();
  const router = useRouter();
  const [type, setType] = useState("password");

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePasswordType = useCallback(() => {
    setType((pre) => (pre === "password" ? "text" : "password"));
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    loadingModule.startModalLoading();
    loadingModule.startLoading();

    const res = await signIn("credentials", { ...data, redirect: false }).then(
      (callback) => {
        console.log(callback);
        loadingModule.stopModalLoading();
        loadingModule.stopLoading();
        if (callback?.ok) {
          toast.success("Successfully Logged in!");
          router.refresh();
          loginModal.onClose();
        }
        if (callback?.error) {
          toast.error(callback.error);
        }
      }
    );
    console.log(res);
  };

  const handleKeyDown = (event: any, ref: any) => {
    if (event.key === "Enter") {
      console.log("HERE");
      event.preventDefault();
      ref.current.focus();
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />

      <Input
        inputRef={emailRef}
        id="email"
        label="Email"
        type="email"
        disabled={loadingModule.isLoading}
        register={register}
        errors={errors}
        required={"Please enter your email"}
        validations={emailValidation}
        onKeyDown={(event: any) => handleKeyDown(event, passwordRef)}
      />
      <Input
        inputRef={passwordRef}
        validations={passwordValidation}
        id="password"
        label="Password"
        type={type}
        disabled={loadingModule.isLoading}
        register={register}
        rightIconAction={togglePasswordType}
        errors={errors}
        required={"Please enter your password"}
        rightIcon={type === "text" ? AiOutlineEyeInvisible : AiOutlineEye}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        onClick={() => {}}
        icon={FcGoogle}
        label="Continue with Google"
        outline
      />
      <Button
        onClick={() => {}}
        icon={AiFillGithub}
        label="Continue with Github"
        outline
      />
      <div className="text-neutral-500 mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>Already have an account?</div>
          <div
            onClick={loginModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      disabled={loadingModule.isLoading}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
