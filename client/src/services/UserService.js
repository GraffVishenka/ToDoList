import { $api } from ".";

export const fetchUsers = async (department) => {
  const { data } = await $api.get("/users/" + department);
  return data;
};
