import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axiosConfigs";

const tasksApiServices = {
  fetchTasks: createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await API.get("/posts");
    return response.data;
  }),
  createTask: createAsyncThunk("tasks/createTask", async (taskData) => {
    const response = await API.post(`/posts/`, taskData);
    return response.data;
  }),
  updateTask: createAsyncThunk(
    "tasks/updateTask",
    async ({ taskId, updatedData }) => {
      const response = await API.put(`posts/${taskId}`, updatedData);
      return response.data;
    }
  ),
  deleteTask: createAsyncThunk("tasks/deleteTask", async (taskId) => {
    await API.delete(`/posts/${taskId}`);
    return taskId;
  }),
};

export default tasksApiServices;
