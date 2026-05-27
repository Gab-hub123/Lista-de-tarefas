import TaskItem from "./TaskItem";

function TaskList({ tasks, removeTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;