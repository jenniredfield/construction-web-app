import { string, array, number, object, ref, bool, lazy, boolean } from "yup";
import { validate as validateEmail } from "email-validator";

export const validation = {
  register: {
    name: string().required(),
    last_name: string().required(),
    email: string()
      .test("Email validation", "Must enter a valid email address", (value) => {
        return validateEmail(value);
      })
      .required("You must enter an email"),
    password: string()
      .matches(/[@$!%*#?&]+/, "Must have special character")
      .matches(/\d+/, "Must have one number")
      .matches(/[a-z]+/, "Must have one lowercase character")
      .matches(/[A-Z]+/, "Must have uppercase character")
      .min(8, "Must be 8 characters or more")
      .required("No password provided."),
    confirm_password: string()
      .required("Must retype your password")
      .oneOf([ref("password"), null], "Passwords must match"),
  },

  login: {
    email: string().required(),
    password: string().required(),
  },
};
