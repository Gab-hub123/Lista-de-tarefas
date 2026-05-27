import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);

    setTask("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);

    setTasks(newTasks);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>Lista</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "10px",
          marginLeft: "10px",
        }}
      >
        Adicionar
      </button>

      <TaskList
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;