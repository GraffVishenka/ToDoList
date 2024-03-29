import { $api } from ".";

export default class AuthService {
  static async login(email, password) {
    return await $api.post("/login", { email, password });
  }

  static async checkAuth() {
    return await $api.get(`/current`);
  }
}
