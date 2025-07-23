import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import Elysia, { t } from "elysia";
import { apiRouter } from "./route";

export const app = new Elysia({
  name: "main_app",
})
  .use(
    swagger({
      documentation: {
        tags: [
          {
            name: "OTP",
            description: "the otp related endpoints",
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
      },
    }),
  )
  .get("health", ({ status }) => status(200, "healthy"), {
    response: {
      200: t.Literal("healthy"),
    },
  })
  .use(cors())
  .decorate("poweredBy", "elysia-by-sivam")
  .onRequest(({ set }) => {
    set.headers["X-Powered-By"] = "elysia-by-sivam";
    set.headers["X-Content-Type-Options"] = "nosniff";
    set.headers["X-Frame-Options"] = "DENY";
  })
  .use(apiRouter);
