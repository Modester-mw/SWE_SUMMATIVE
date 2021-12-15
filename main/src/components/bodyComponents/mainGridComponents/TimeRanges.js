import React from 'react'

var timeDifference = 1
var pastMidNightTimeLapse = 1

const TimeRanges = (props) => {
    var midNightTime = new Date("2021-12-12 00:00:00")
    var pastMidNightTime = new Date("2021-12-12 " + props.timeRange.hour)

    pastMidNightTimeLapse = ((pastMidNightTime - midNightTime) / 3600000)

    const taskBoxStyle = {
        'padding': '1%',
        'height': 70 * timeDifference,
        'border-radius': 5,
        'border': '1px solid white',
        'width': '100%',
        'position': 'absolute',
        'top': 70 * pastMidNightTimeLapse
    }
    return (
        <div style={taskBoxStyle}>
            {props.timeRange.hour}
            <div className="time-horizontal-divide"></div>
        </div>
    )
}

export default TimeRanges
