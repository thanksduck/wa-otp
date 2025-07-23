import { app } from "./app";
import { PORT, WA_PHONE_NUMBER_ID, WHATSAPP_TOKEN } from "./env";

Bun.dns.prefetch("https://graph.facebook.com");

if (WHATSAPP_TOKEN && WA_PHONE_NUMBER_ID) {
  app.listen(PORT);
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
  );
} else {
  console.error("whatsapp token could not be found");
  process.exit(1);
}
