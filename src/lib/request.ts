import { WA_PHONE_NUMBER_ID, WHATSAPP_TOKEN } from "@/env";

class RequestService {
  async makeRequest(body: Record<string, unknown>): Promise<unknown> {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v20.0/${WA_PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Request failed:", error);
      throw error;
    }
  }
}
export const requestService = new RequestService();
