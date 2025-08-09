import Elysia from "elysia";
import { bvController } from "./bv-controller";
import { notifyController } from "./notify-controller";
import { otpController } from "./otp-controller";

export const mainController = new Elysia({
  name: "main_controller",
  tags: ["My Dream Test"],
  detail: {
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
})
  .use(otpController)
  .use(notifyController)
  .use(bvController);
