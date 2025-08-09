import { t } from "elysia";
import { messageField } from "./_otp";

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
