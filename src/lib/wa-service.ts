import { requestService } from "./request";

class WaService {
  async sendOTPMessage(code: string, mobile: string) {
    const body = {
      messaging_product: "whatsapp",
      to: mobile,
      type: "template",
      template: {
        name: "login_code",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: code,
              },
            ],
          },
          {
            type: "button",
            sub_type: "url",
            index: 0,
            parameters: [
              {
                type: "text",
                text: code,
              },
            ],
          },
        ],
      },
    };

    const res = await requestService.makeRequest(body);
    return res;
  }
}
export const waService = new WaService();
