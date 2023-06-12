"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
  onKeyDown?: any;
  inputRef?: any;
  validations?: object;
  leftIcon?: IconType;
  rightIcon?: IconType;
  rightIconAction?: () => void;
  leftIconAction?: () => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
  onKeyDown,
  inputRef,
  validations,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rightIconAction,
  leftIconAction,
}) => {
  return (
    <div className="w-full relative ">
      <div className="flex items-center justify-between">
        {LeftIcon && (
          <button
            className="absolute left-2"
            onClick={leftIconAction}
            disabled={!leftIconAction}
          >
            <LeftIcon size={24} />
          </button>
        )}
        <input
          onKeyDown={onKeyDown}
          id={id}
          disabled={disabled}
          {...register(id, {
            required: required ? required : false,
            ...validations,
          })}
          placeholder=" "
          type={type}
          className={`
          peer
          w-full
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${RightIcon ? "pr-8" : "pr-4"}
          ${LeftIcon ? "pl-8" : "pl-4"}
          py-4
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
        />
        {RightIcon && (
          <button
            className="absolute right-2"
            onClick={rightIconAction}
            disabled={!rightIconAction}
          >
            <RightIcon size={24} />
          </button>
        )}

        <label
          className={`
          ${LeftIcon ? "pl-4" : "pl-0"}
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
        >
          {label}
        </label>
      </div>
      {errors[id] && (
        <span className="text-rose-500 ">{errors[id]["message"]}</span>
      )}
    </div>
  );
};

export default Input;
