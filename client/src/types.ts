export type ErrorWithMessage = {
  status: number;
  data: {
    message: string;
  };
};

export type User = {
    id: number;
    email: string;
    password:string;
    firstname: string;
    surname: string;
    patronymic: string;
    role: string;
    department: string;
}

export type Todo = {
    id: number;
    header: string;
    description: string;
    deadline: Date;
    responsible: number;
    status: string;
    priority: string;
}