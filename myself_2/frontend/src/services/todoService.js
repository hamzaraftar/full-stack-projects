import api from "../api";

export const getTodos = async () => {
  const response = await api.get(`api/todo/`);
  return response.data;
};

export const createTodo = async (data) => {
  const response = await api.post(`api/todo/`, data);
  return response.data;
};

export const updateTodo = async (id, data) => {
  const response = await api.put(`api/todo/${id}/`, data);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`api/todo/${id}/`);
};
