function TaskItem({ task, index, removeTask }) {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <span>{task}</span>

      <button
        onClick={() => removeTask(index)}
        style={{
          marginLeft: "10px",
        }}
      >
        Remover
      </button>
    </div>
  );
}

export default TaskItem;