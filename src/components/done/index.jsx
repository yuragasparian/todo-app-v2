import DoneTasks from "./DoneTasks"



export default function Done({tasks, removeTask}) {

    const doneTasks = tasks.filter((task)=> task.status=="done")
    
    return (
        <div className="flex flex-col items-center px-4">
            <h1 className="font-bold text-3xl mb-5">Done</h1>
            {doneTasks.map((task) => (
                <DoneTasks key={task.id} task={task} removeTask={removeTask}/>
            ))}
        </div>
    )
}