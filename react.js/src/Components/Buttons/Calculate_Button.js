import React from 'react'
import { useHistory } from 'react-router-dom'
import Calculation from '../../pages/Calculation';


export default function Calculate() {
  let history = useHistory();

  return (
        <button className = "button" onClick={() => {history.push("/calculate")}}>
            Calculate
        </button>
  );
}


// const Calculate_Button = () => {
//   return (
//     <button className = "button" onClick={calculate_page}>
//         Calculate
//     </button>

//   )
// }

// export default Calculate_Button
