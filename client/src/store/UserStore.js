import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class UserStore {
  constructor() {
    this._user = {};
    this._isAuth = false;
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }

  async login(email, password) {
    try {
      const { data } = await AuthService.login(email, password);
      localStorage.setItem("token", data.token);
      this.setIsAuth(true);
      this.setUser(data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setIsAuth(false);
      this.setUser({});
    } catch (e) {
      console.log();
    }
  }

  async checkAuth() {
    try {
      const { data } = await AuthService.checkAuth();
      this.setUser(data.user);
      this.setIsAuth(true);
      localStorage.setItem("token", data.token);
      return data;
    } catch (e) {
      this.logout();
      console.log(e);
    }
  }
}
