import React from 'react'

const DaysTop = (props) => {
    return (
        <div className="days-top">
            <div>{props.Day.date}, {props.Day.day}</div>
        </div>
    )
}

export default DaysTop
