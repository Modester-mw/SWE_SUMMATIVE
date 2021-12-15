import React from 'react'
import TaskBox from './TaskBox'
import { MondayTasks, TuesdayTasks, WednesdayTasks, ThursdayTasks, FridayTasks, SaturdayTasks, SundayTasks } from '../../dataComponents/Tasks'
import TimeHrs from '../../dataComponents/TimeHrs'
import TimeRanges from './TimeRanges'

const DaysColumns = () => {
    const timeHrs = TimeHrs.map(time => <TimeRanges timeRange={time}/>)
    const monTasks = MondayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    const tueTasks = TuesdayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    const wedTasks = WednesdayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    const thurTasks = ThursdayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    const friTasks = FridayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    const satTasks = SaturdayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    const sunTasks = SundayTasks.map(tasks => <TaskBox id={tasks.id} tasks={tasks}/>)
    return (
        <div className="days-columns-grid-body">
            <div className="time-column">
                {timeHrs}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="monday-column">
                {monTasks}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="tuesday-column">
                {tueTasks}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="wednesday-column">
                {wedTasks}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="thursday-column">
                {thurTasks}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="friday-column">
                {friTasks}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="saturday-column">
                {satTasks}
                <div className="vertical-grid-divider"></div>
            </div>
            <div className="sunday-column">
                {sunTasks}
                <div className="vertical-grid-divider"></div>
            </div>
        </div>
    )
}

export default DaysColumns
