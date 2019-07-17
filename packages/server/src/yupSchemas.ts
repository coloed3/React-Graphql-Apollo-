import * as yup from "yup";
import {validationSchema} from "@abb/common";
import { passwordNotLongEnough } from "./modules/user/register/errorMessages";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255);
