import React from 'react'
import DaysTop from './DaysTop'
import Days from '../../dataComponents/Days'

const GridTop = () => {
    const selectedDays = Days.map(day => <DaysTop Day={day}/>)
    return (
        <div className="grid-top">
            <div className="time-top">Time</div>
            {selectedDays}
            <div className="grid-top-horizontal-divide"></div>
        </div>
    )
}

export default GridTop
