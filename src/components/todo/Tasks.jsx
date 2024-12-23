import React from "react";
import Button from "../Button";

export default (props) => (
    <div className="flex justify-between my-1 bg-slate-200 items-center p-4 rounded-xl w-full">
        <p>
            {props.task.text}
        </p>
        <div>
            <Button 
                color="red" 
                onClick={()=>props.removeTask(props.task.id)}
            >
                Remove
            </Button>
            <Button 
                color="green" 
                onClick={() => props.sendForTesting(props.task.id)}
            >
                Done
            </Button>
        </div>
    </div>
);

