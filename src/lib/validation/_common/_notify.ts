import { t } from "elysia";

export const fcmTokenField = t.String({
  title: "FCM Token",
  description: "A unique FCM token for the device",
  examples: [
    "c6sB6G_WjR-v4sL-m0oQ_a2XyZ_e3fG-h9iJ_k8lM-n7oP_q6rS-t5uV_w4xY-z3aB_c2dE-f1gH_i0jK-l9mN_o8pQ-r7sT_u6vW_x5yZ",
  ],
});

export const titleField = t.String({
  title: "Title",
  description: "A title for the notification",
  examples: ["New Offer is Live now 😊"],
});

export const bodyField = t.String({
  title: "Body",
  description: "A body can be fairly large as well",
  examples: ["If you participate todya there is a chance to 3x your winnings"],
});

export const notificationField = t.Object(
  {
    title: titleField,
    body: bodyField,
  },
  {
    title: "Notification",
    description: "The notification content which will be sent",
  },
);
