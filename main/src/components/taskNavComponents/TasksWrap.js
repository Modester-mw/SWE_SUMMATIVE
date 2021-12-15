import React from 'react'
import "../../css/components_css/components_main.css"
import TasksWrapHead from './TasksWrapHead'
import TasksScroller from './TasksScroller'
import AddTask from './AddTask'
import Legend from './Legend'

const TasksWrap = () => {
    return (
        <div>
            <TasksWrapHead />
            <TasksScroller />
            <AddTask />
            <Legend />
        </div>
    )
}

export default TasksWrap
