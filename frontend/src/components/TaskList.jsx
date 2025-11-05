import React from "react";
import TaskCard from "./TaskCard";
import TaskEmptySlate from "./TaskEmptySlate";

const TaskList = ({filteredTasks, filter, handleTaskChanged}) => {
    if (!filteredTasks || filteredTasks.length === 0){
        return <TaskEmptySlate filter={filter} />
    }

    return (
        <div className="space-y-3">
            {filteredTasks.map((task, index) => (
                <TaskCard
                    key= {task._id || index}
                    task={task}
                    index={index}
                    handleTaskChanged={handleTaskChanged}
                />
            ))}

        </div>
    );

};

export default TaskList;