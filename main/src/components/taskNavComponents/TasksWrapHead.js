import React from 'react'
import {BiSearch} from 'react-icons/bi'
import Popup from 'reactjs-popup'
import AddTaskForm from '../bodyComponents/otherComponent/AddTaskForm'

const TasksWrapHead = () => {
    return (
        <div className="tasks-wrap-head">
            <div className="tasks-head-content">
            <Popup trigger={<button>Click</button>} position="right center">
            <AddTaskForm />
            </Popup>
                <h3>Tasks (5)</h3>
                <span className="searchbox-tasks">
                    <input type="text" name="search-title" placeholder="Search task.." />
                    <BiSearch />
                </span>
            </div>
        </div>
    )
}

export default TasksWrapHead
