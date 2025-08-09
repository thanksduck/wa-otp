import { t } from "elysia";
import { fcmTokenField, notificationField } from "./_common";

export const NotifyMultipleSchema = t.Object({
  tokens: t.Array(fcmTokenField, {
    title: "Tokens",
    description: "Complete list of tokens",
  }),
  notification: notificationField,
});

export type NotifyMultiple = typeof NotifyMultipleSchema.static;
