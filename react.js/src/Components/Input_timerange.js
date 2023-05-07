import React, { useState } from "react"
import plus_logo from "../pictures/+.png"
import minus_logo from "../pictures/-.jpg"

export default function InputTime() {
    const [InputAdded, setInputAdded] = useState(false) 
    const [InputAdded2, setInputAdded2] = useState(false) 
    const [InputAdded3, setInputAdded3] = useState(false) 

    function handleClick(){
        setInputAdded(InputAdded => !InputAdded)
    }
    function handleClick2(){
        setInputAdded2(InputAdded2 => !InputAdded2)
    }
    function handleClick3(){
        setInputAdded3(InputAdded3 => !InputAdded3)
    }

return (
    <div style={{display: "inline-block", verticalAlign:"top"}}>
        
    <text>Add a Time </text>

    <div style = {{display: "block"}}>
        { InputAdded && 
            <span> 
                <input type="time"></input> <text style={{ fontSize: '20px' }}> - </text> <input type="time"></input> 
            </span>
        }

        { !InputAdded && <img src = {plus_logo} onClick={handleClick}  className="plus_logo"/>}
        { InputAdded && <img src = {minus_logo} onClick={handleClick}  className="plus_logo"/>}
    </div>

    <div style = {{display: "block"}}>
        { InputAdded2 && 
            <span> 
                <input type="time"></input> <text style={{ fontSize: '20px' }}> - </text> <input type="time"></input> 
            </span>
        }

        { InputAdded && !InputAdded2 && <img src = {plus_logo} onClick={handleClick2} className="plus_logo"/>}
        { InputAdded2 && <img src = {minus_logo} onClick={handleClick2} className="plus_logo"/>}
    </div>

    <div style = {{display: "block"}}>
        { InputAdded3 && 
            <span> 
                <input type="time"></input> <text style={{ fontSize: '20px' }}> - </text> <input type="time"></input> 
            </span>
        }

        { InputAdded && InputAdded2 && !InputAdded3 && <img src = {plus_logo} onClick={handleClick3} className="plus_logo"/>}
        { InputAdded3 && <img src = {minus_logo} onClick={handleClick3} className="plus_logo"/>}
    </div>

    </div>
)
}

// This function below only allows inputs in 15min time intervals. 1:00, 1:15, 1:30, 1:45, 2:00

// export default function InputTime() {
//   const [time, setTime] = useState('00:00');

//   const handleTimeChange = (event) => {
//     const { value } = event.target;
//     const timeParts = value.split(':');
//     const hours = parseInt(timeParts[0], 10);
//     const minutes = parseInt(timeParts[1], 10);

//     // Round minutes to the nearest 15-minute interval
//     const roundedMinutes = Math.round(minutes / 15) * 15;

//     // Format the time string with leading zeros
//     const formattedMinutes = roundedMinutes.toString().padStart(2, '0');
//     const formattedTime = `${hours.toString().padStart(2, '0')}:${formattedMinutes}`;

//     setTime(formattedTime);
//   };

//   return (
//     <input type="time" value={time} step={900} onChange={handleTimeChange} />
//   );
// }