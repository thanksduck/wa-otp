import Elysia from "elysia";
import { bvService } from "@/lib/bv-service";
import { FailedResponse, SuccessResponse } from "@/lib/validation";

export const bvController = new Elysia({
  name: "bv_controller",
  prefix: "bv",
  detail: {
    description: "All the APIs related Bank Verification through cash free",
    tags: ["Bank Verification"],
  },
}).get(
  "signature",
  ({ status }) => {
    try {
      return status(200, {
        success: true,
        message: "Done",
        data: bvService.signature,
      });
    } catch (error) {
      console.error("Error during signature", error);
      return status(400, {
        success: false,
        message: Error.isError(error)
          ? error.message
          : "Unknown Error Occurred",
      });
    }
  },
  {
    response: {
      200: SuccessResponse,
      400: FailedResponse,
    },
  },
);
