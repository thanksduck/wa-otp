import * as crypto from "node:crypto";
import { CLIENT_ID, PUBLIC_KEY } from "@/env";

/**
 * Service for handling RSA encryption and signature generation using client credentials.
 * Creates encrypted signatures by combining client ID with current timestamp.
 */
class BVService {
  #encryptRSA(plainData: string, publicKey: string) {
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha1",
      },
      Buffer.from(plainData, "utf-8"),
    );

    return encrypted.toString("base64");
  }
  /** the function which will get the signature */
  get signature() {
    const clientId = CLIENT_ID;
    let publicKey = PUBLIC_KEY;
    if (!publicKey || !clientId) {
      throw new Error("Error: PUBLIC_KEY environment variable is not set.");
    }

    // Replace explicit `\n` characters with actual newlines
    publicKey = publicKey.replace(/\\n/g, "\n").trim();
    const encodedData = `${clientId}.${Math.floor(Date.now() / 1000)}`;
    return this.#encryptRSA(encodedData, publicKey);
  }
}

export const bvService = new BVService();
