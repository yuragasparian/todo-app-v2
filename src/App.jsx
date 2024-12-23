import Todo from "./components/todo";
import Testing from "./components/testing";
import Done from './components/done/index';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, status: "todo" }]);
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const sendForTesting = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "testing" } : task
    );
    setTasks(updatedTasks);
  };

  const taskRejected = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "todo" } : task
    );
    setTasks(updatedTasks);
  };

  const taskApproved = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "done" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      <Todo
        tasks={tasks}
        addTask={addTask}
        removeTask={removeTask}
        sendForTesting={sendForTesting}
      />
      <Testing
        tasks={tasks} 
        taskApproved={taskApproved}
        taskRejected={taskRejected}
        />
      <Done 
      tasks={tasks} 
      removeTask={removeTask}
      />
    </div>
  );
}

export default App;
