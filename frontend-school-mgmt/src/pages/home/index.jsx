import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tasksApiServices from "../../redux/services/taskServices";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(tasksApiServices.fetchTasks());
  }, [dispatch]);

  const handleCreateTask = () => {
    dispatch(
      tasksApiServices.createTask({ title: "New Task", description: "This is a new task" })
    );
  };

  const handleUpdateTask = (taskId, updatedData) => {
    dispatch(tasksApiServices.updateTask({ taskId, updatedData }));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(tasksApiServices.deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task App</h1>
      <button onClick={handleCreateTask}>Create Task</button>
      <ul>
        {tasks?.map((task) => (
          <li key={task?.id}>
            {task?.title} - {task?.description}
            <button
              onClick={() =>
                handleUpdateTask(task?.id, { title: "Updated Task" })
              }
            >
              Update
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
