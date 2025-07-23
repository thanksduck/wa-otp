import { t } from "elysia";

export const otpField = t.String({
  pattern: "^\\d+$",
  minLength: 6,
  examples: ["123456", "786543"],
  maxLength: 6,
  title: "OTP field",
  description: "THE OTP which will be sent to the customer",
  error: "Otp can be of length six only",
});

export const mobileField = t.String({
  pattern: "^91[6-9]\\d{9}$",
  minLength: 12,
  examples: ["919056899671", "919465331339"],
  maxLength: 12,
  title: "Indian Mobile",
  description: "India mobile starting with 91",
  error: "Indian number with prefix 91 no +",
});

export const messageField = t.String({
  title: "Message",
  description: "A helpful message providing information to developer",
  examples: ["OTP was sent"],
});

export const SendOTPSchema = t.Object({
  code: otpField,
  mobile: mobileField,
});

export const SuccessResponse = t.Object({
  success: t.Literal(true),
  message: messageField,
  data: t.Unknown({
    title: "Some data",
    description: "This is directly coming from the facebook api",
  }),
});

export const FailedResponse = t.Object({
  success: t.Literal(false, {
    title: "False",
    examples: [false],
  }),
  message: messageField,
});
