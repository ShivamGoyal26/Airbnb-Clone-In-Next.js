"use client";

import { IconType } from "react-icons";
import { BeatLoader } from "react-spinners";
import useLoading from "../hooks/userLoading";
interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  disableLoader?: boolean;
  loaderColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  disableLoader,
  loaderColor,
}) => {
  const loadingModule = useLoading();
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        flex
        items-center
        justify-center
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        gap-3
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {disableLoader ? (
        <>
          {Icon && <Icon size={24} />}
          {label}
        </>
      ) : loadingModule.isLoading && !loadingModule.modalLoading ? (
        <BeatLoader size={10} color={loaderColor ? loaderColor : "#fff"} />
      ) : (
        <>
          {Icon && <Icon size={24} />}
          {label}
        </>
      )}
    </button>
  );
};

export default Button;
