import { makeAutoObservable } from "mobx";
import TodoService from "../services/TodoService";

export default class TodoStore {

  constructor() {
    this._todo = [];
    makeAutoObservable(this);
  }

  setTodo(todo) {
    this._todo = todo;
  }

  get todo() {
    return this._todo;
  }

  async getAllMyTodos() {
    try {
      const { data } = await TodoService.getAllMyTodos();
      this.setTodo(data);
      for (let i = 0; i < data.length; i++) { 
        sessionStorage.setItem(`todo${i}`, JSON.stringify(data[i]))
      }
    } catch (e) {
      console.log(e);
    }
  }
}
