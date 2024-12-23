import TestingTasks from "./TestingTasks"

export default function Testing({tasks, taskApproved, taskRejected}) {

    const testingTasks = tasks.filter((task)=> task.status=="testing")

    return (
        <div className="flex flex-col items-center border-r-2 px-4">
            <h1 className="font-bold text-3xl mb-5">Testing</h1>
            {testingTasks.map((task) => (
                <TestingTasks key={task.id} task={task} taskApproved={taskApproved}  taskRejected={taskRejected}/>
            ))}
        </div>
    )
}