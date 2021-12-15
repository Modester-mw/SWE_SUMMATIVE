import React from 'react'

const Legend = () => {
    return (
        <div className="legend-div">
            <h3>Legend</h3>
            <div className="legend-item">
                <div className="legend-item--fixed"></div>
                <div>Fixed task</div>
            </div>
            <div className="legend-item">
                <div className="legend-item--flexible"></div>
                <div>Flexible task</div>
            </div>
            <div className="legend-item">
                <div className="legend-item--break"></div>
                <div>Break</div>
            </div>
        </div>
    )
}

export default Legend
