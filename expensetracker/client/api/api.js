import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const getTransactions = () => api.get("/transactions");
export const addTransaction = (data) => api.post("/transactions", data);
export const exportData = () => api.get("/transactions/export");
export const importData = (file) => api.post("/transactions/import", file);

export default api;
