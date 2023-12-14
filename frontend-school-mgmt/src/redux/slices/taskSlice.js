import { createSlice } from "@reduxjs/toolkit";
import tasksApiServices from "../services/taskServices";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tasksApiServices.createTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(tasksApiServices.fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(tasksApiServices.fetchTasks.pending, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(tasksApiServices.createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(tasksApiServices.updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(tasksApiServices.deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
