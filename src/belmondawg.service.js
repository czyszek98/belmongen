import { BASE_NAMES, POST_NAMES, PRE_NAMES, OG_NAMES } from "./names.const.js";

export class BelmondawgService {
  static generate() {
    const randomPreName =
      PRE_NAMES[Math.floor(Math.random() * PRE_NAMES.length)];
    const randomBaseName =
      BASE_NAMES[Math.floor(Math.random() * BASE_NAMES.length)];
    const randomPostName =
      POST_NAMES[Math.floor(Math.random() * POST_NAMES.length)];
    return `${Math.random() >= 0.4 ? randomPreName : ""} ${randomBaseName} ${
      Math.random() >= 0.4 ? randomPostName : ""
    }`;
  }

  static randomOG() {
    return OG_NAMES[Math.floor(Math.random() * OG_NAMES.length)];
  }
}
