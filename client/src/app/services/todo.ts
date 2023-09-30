import { Todo } from "../../types";
import { api } from "./api";

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllMyTodo: builder.query<Todo[], void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
    getOneById: builder.query<Todo, string>({
      query: (id) => ({
        url: `/todos/:${id}`,
        method: "GET",
      }),
    }),
    editTodo: builder.mutation<string, Todo>({
      query: (todo) => ({
        url: `/todos/:${todo.id}`,
        method: "PUT",
        body: todo,
      }),
    }),
    getByResponsible: builder.mutation<string, string>({
      query: (id) => ({
        url: `/todos/responsible`,
        method: "GET",
        body: { id },
      }),
    }),
    getAllForToday: builder.mutation<string, string>({
      query: (id) => ({
        url: `/todos/today`,
        method: "GET",
        body: { id },
      }),
    }),
    getAllForAWeek: builder.mutation<string, string>({
      query: (id) => ({
        url: `/todos/week`,
        method: "GET",
        body: { id },
      }),
    }),
    addTodo: builder.mutation<Todo, Todo>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
    }),
    getMyUsers: builder.mutation<Todo, Todo>({
        query: (id) => ({
          url: "/todos/users",
          method: "POST",
          body: id,
        }),
      }),
  }),
});

export const {
  useGetAllMyTodoQuery,
  useGetOneByIdQuery,
  useEditTodoMutation,
  useGetByResponsibleMutation,
  useAddTodoMutation,
  useGetAllForTodayMutation,
  useGetAllForAWeekMutation,
  useGetMyUsersMutation,
} = todoApi;

export const {
  endpoints: {
    getAllMyTodo,
    getOneById,
    editTodo,
    getByResponsible,
    addTodo,
    getAllForToday,
    getAllForAWeek,
    getMyUsers
  },
} = todoApi;
