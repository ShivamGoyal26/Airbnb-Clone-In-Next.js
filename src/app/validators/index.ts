import { emailRegex } from "./regexs";

export const emailValidation = {
  pattern: {
    value: emailRegex,
    message: "Invalid email address",
  },
};

export const passwordValidation = {
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
};
