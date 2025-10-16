import Elysia from "elysia";
import { notifyService } from "@/lib/notify-service";
import {
  FailedResponse,
  NotifyMultipleSchema,
  SuccessResponse,
} from "@/lib/validation";

export const notifyController = new Elysia({
  name: "notify_controller",
  prefix: "/notify",
  detail: {
    description: "API to send push notification with FCM token",
    tags: ["Notification API"],
  },
}).post(
  "/",
  async ({ status, body }) => {
    try {
      const data = await notifyService.notifyMultiple(body);
      return status(200, {
        success: true,
        message: "Sent to the firebase server",
        data,
      });
    } catch (error) {
      console.error(error, "detailed error");
      return status(400, {
        success: false,
        message: Error.isError(error) ? error.message : "Unknown error",
      });
    }
  },
  {
    body: NotifyMultipleSchema,
    response: {
      200: SuccessResponse,
      400: FailedResponse,
    },
  },
);
