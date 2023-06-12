"use client";

import {
  AiFillGithub,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { emailValidation, passwordValidation } from "@/app/validators";
import useLoading from "@/app/hooks/userLoading";
import { useRegisterAPI } from "@/app/services/auth";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const loadingModule = useLoading();
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
      name: "",
      email: "",
      password: "",
    },
  });

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const togglePasswordType = useCallback(() => {
    setType((pre) => (pre === "password" ? "text" : "password"));
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    loadingModule.startModalLoading();
    loadingModule.startLoading();

    const res = await useRegisterAPI(data);
    console.log(res);
    if (res) {
      registerModal.onClose();
      toast.success("Successfully registered!");
    }

    loadingModule.stopModalLoading();
    loadingModule.stopLoading();
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
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />

      <Input
        inputRef={nameRef}
        id="name"
        type="text"
        label="Name"
        disabled={loadingModule.isLoading}
        register={register}
        errors={errors}
        required={"Please enter your name"}
        onKeyDown={(event: any) => handleKeyDown(event, emailRef)}
      />
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
            onClick={toggle}
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
      isOpen={registerModal.isOpen}
      disabled={loadingModule.isLoading}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
