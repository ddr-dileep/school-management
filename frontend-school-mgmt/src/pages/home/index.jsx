import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tasksApiServices from "../../redux/services/taskServices";
import "./home.scss";
import { AppSlider } from "../../components";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    // dispatch(tasksApiServices.fetchTasks());
  }, [dispatch]);

  const handleCreateTask = () => {
    dispatch(
      tasksApiServices.createTask({
        title: "New Task",
        description: "This is a new task",
      })
    );
  };

  const handleUpdateTask = (taskId, updatedData) => {
    dispatch(tasksApiServices.updateTask({ taskId, updatedData }));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(tasksApiServices.deleteTask(taskId));
  };

  return (
    <div className="home">
      <div className="home-top-image">
        <AppSlider />
      </div>
    </div>
  );
};
