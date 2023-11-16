import { $api } from ".";

export default class TodoService {
  static async getAllMyTodos() {
    return await $api.get("/todos");
  }
}


export const fetchTodos = async () => {
  const { data } = await $api.get("/todos");
  return data;
};

export const fetchOneTodosById = async (id) => {
  const { data } = await $api.get("/todos/"+ id);
  return data;
};