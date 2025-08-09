import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import {
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PROJECT_ID,
} from "@/env";
import type { NotifyMultiple } from "./validation";

class NotifyService {
  private messaging;

  constructor(serviceAccount: {
    projectId: string;
    clientEmail: string;
    privateKey: string;
  }) {
    const app = initializeApp({
      credential: credential.cert(serviceAccount),
    });
    this.messaging = getMessaging(app);
  }

  async notifyMultiple(body: NotifyMultiple) {
    return this.messaging.sendEachForMulticast(body);
  }
}

const serviceAccount = {
  projectId: FIREBASE_PROJECT_ID,
  clientEmail: FIREBASE_CLIENT_EMAIL,
  privateKey: FIREBASE_PRIVATE_KEY,
};

export const notifyService = new NotifyService(serviceAccount);
