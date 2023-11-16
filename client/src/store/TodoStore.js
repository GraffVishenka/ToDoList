import { makeAutoObservable } from "mobx";

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
}
