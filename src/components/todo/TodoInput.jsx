import { useRef } from "react"
import Button from "../Button"

export default (props) => {

    const inputTask = useRef()

    const handleAddTask = () => {
        const taskValue = inputTask.current.value;
        if (taskValue.trim() !== "") {
            props.addTask(taskValue);
            inputTask.current.value = "";
        }
    };
    return (
        <div className="flex items-center justify-center my-6 w-full">
            <input type="text" className="border-2 rounded h-8 w-3/4" ref={inputTask} placeholder="Enter task"/>
            <Button color="slate" onClick={handleAddTask}>Add Task</Button>
        </div>
    )
}