import React from "react";
import './NameDay.scss'

const NameDay = () => {
    const DaysMAP = [{name:'M'},{name:'T'},{name:'W'},{name:'T'},{name:'F'},{name:'S'},{name:'S'}];
    return (
    <div className="GridWrapper">
        {
            DaysMAP.map((e)=>(
                <div className="CellWrapper">
                    {e.name}
                </div>
            ))
        }
        
    </div>
    )
}

export default NameDay;