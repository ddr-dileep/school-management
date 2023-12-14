import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
});

export default store;
