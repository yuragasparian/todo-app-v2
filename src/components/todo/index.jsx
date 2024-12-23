import TodoInput from "./TodoInput";
import Tasks from "./Tasks";

export default function Todo({ tasks, addTask, removeTask, sendForTesting }) {
    const todoTasks = tasks.filter((task)=> task.status=="todo")
    return (
        <div className="flex flex-col items-center border-r-2 px-4">
            <h1 className="font-bold text-3xl">To-Do</h1>
            <TodoInput addTask={addTask}/>
            {todoTasks.map((task) => (
                <Tasks key={task.id} task={task} removeTask={removeTask}  sendForTesting={sendForTesting}/>
            ))}
        </div>
    );
}
