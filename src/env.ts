import { env } from "bun";

/** Whether the enviornment is development or not */
export const isDev = env.NODE_ENV === "development";
/** Whether the enviornment is production or not
 * ```typescript
 * process.env.NODE_ENV==="production"
 * ```
 */
export const isProd = env.NODE_ENV === "production";

/** Other enviornment variables */
export const PORT = env.PORT ?? 3000;

export const WA_PHONE_NUMBER_ID = env.WA_PHONE_NUMBER_ID || "";
export const WHATSAPP_TOKEN = env.WHATSAPP_TOKEN || "";
export const TOKEN = env.TOKEN || "";
