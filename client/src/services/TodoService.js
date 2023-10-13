import { $api } from ".";

export default class TodoService {
  static async getAllMyTodos() {
    return await $api.get("/todos");
  }
}
