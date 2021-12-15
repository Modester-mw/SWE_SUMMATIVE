import React from 'react'
import TasksDiv from './TasksDiv'
import AllTasks from '../dataComponents/AllTasks'

const TasksScroller = () => {
    const TaskDetails = AllTasks.map(task => <TasksDiv TaskInfo={task}/>)
    return (
        <div className="tasks-scroller">
            {TaskDetails}
        </div>
    )
}

export default TasksScroller
