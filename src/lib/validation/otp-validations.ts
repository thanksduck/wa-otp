import { t } from "elysia";
import { mobileField, otpField } from "./_common";

export const SendOTPSchema = t.Object({
  code: otpField,
  mobile: mobileField,
});
