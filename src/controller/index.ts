import Elysia from "elysia";
import {
  FailedResponse,
  SendOTPSchema,
  SuccessResponse,
} from "@/lib/validation";
import { waService } from "@/lib/wa-service";

export const mainController = new Elysia({
  name: "main_controller",
  prefix: "otp",
  detail: {
    tags: ["OTP"],
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
}).post(
  "",
  async ({ body, status }) => {
    const { code, mobile } = body;
    try {
      const data = await waService.sendOTPMessage(code, mobile);
      return {
        success: true,
        message: "OTP was sent",
        data,
      };
    } catch (error) {
      return status(400, {
        success: false,
        message: Error.isError(error) ? error.message : "Unknown error",
      });
    }
  },
  {
    body: SendOTPSchema,
    response: {
      200: SuccessResponse,
      400: FailedResponse,
    },
  },
);
