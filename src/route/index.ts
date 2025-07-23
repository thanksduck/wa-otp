import bearer from "@elysiajs/bearer";
import Elysia from "elysia";
import { mainController } from "@/controller";
import { TOKEN } from "@/env";
export const apiRouter = new Elysia({
  name: "api_router",
  prefix: "api",
  detail: {
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
})
  .use(bearer())
  .onBeforeHandle(({ bearer, status }) => {
    if (typeof bearer !== "string") return status(401, "Unauthorized");
    if (bearer !== TOKEN) return status(401, "Unauthorized");
  })
  .use(mainController);
