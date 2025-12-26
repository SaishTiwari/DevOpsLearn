import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const todoAPI = {
  // Get all todos
  getAllTodos: async () => {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  },

  // Create a new todo
  createTodo: async (todoData) => {
    const response = await axios.post(`${API_URL}/todos`, todoData);
    return response.data;
  },

  // Update a todo
  updateTodo: async (id, todoData) => {
    const response = await axios.put(`${API_URL}/todos/${id}`, todoData);
    return response.data;
  },

  // Delete a todo
  deleteTodo: async (id) => {
    const response = await axios.delete(`${API_URL}/todos/${id}`);
    return response.data;
  },
};
