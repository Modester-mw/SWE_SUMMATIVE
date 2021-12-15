import React from 'react'

const TasksDiv = (props) => {
    return (
        <div className="tasks--task-details-wrap">
            <div className="tasks--task-and-time">
                <h4 className="tasks--task-title">{props.TaskInfo.task_title}</h4>
                <div className="tasks--task-time">{props.TaskInfo.time}</div>
            </div>
            <div className="tasks--task-description">{props.TaskInfo.task_description}</div>
        </div>
    )
}

export default TasksDiv
