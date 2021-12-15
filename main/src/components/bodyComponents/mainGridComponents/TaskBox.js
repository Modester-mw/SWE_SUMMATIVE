import React from 'react'

var timeDifference = 1
var pastMidNightTimeLapse = 1
var typeOfTaskBack
var typeOfTaskColor

const TaskBoxTue = (props) => {
    if (props.tasks.isBreak === true) {
        typeOfTaskBack = '#8a6a00'
        typeOfTaskColor = '#fff'
    }
    else if (props.tasks.isFixed === true) {
        typeOfTaskBack = '#684be0'
        typeOfTaskColor = '#fff'
    } else if ((props.tasks.isFixed === false)) {
        typeOfTaskBack = '#00724c'
        typeOfTaskColor = '#fff'
    }

    var midNightTime = new Date("2021-12-12 00:00:00")
    var pastMidNightTime = new Date("2021-12-12 " + props.tasks.start_time)

    pastMidNightTimeLapse = ((pastMidNightTime - midNightTime) / 3600000)

    var startTime = new Date(props.tasks.full_date + " " + props.tasks.start_time)
    var endTime = new Date(props.tasks.full_date + " " + props.tasks.end_time)

    timeDifference = ((endTime - startTime) / 3600000)

    const taskBoxStyle = {
        'padding': '1%',
        'background-color': typeOfTaskBack,
        'height': 70 * timeDifference,
        'border-radius': 5,
        'color': typeOfTaskColor,
        'border': '1px solid white',
        'width': '100%',
        'position': 'absolute',
        'top': 70 * pastMidNightTimeLapse
    }

    return (
        <div>
            <div style={taskBoxStyle}>
                <div>{props.tasks.time}</div>
                <div>{props.tasks.task_title}</div>
                <div>{props.tasks.tast_description}</div>
            </div>
        </div>
    )
}

export default TaskBoxTue
