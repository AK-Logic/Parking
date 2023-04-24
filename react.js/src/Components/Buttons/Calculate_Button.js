import React from 'react'
import { useHistory } from 'react-router-dom'
import Calculation from '../../pages/Calculation';

function Calculate_Path() {
  const history = useHistory();
  const calculate_page = () => {
    history.push("/calculate")
  }
}
// export Hist () => {
//   const history = useHistory()
// };


const Calculate_Button = () => {
  return (
    <button className = "button" onClick={Calculate_Path}>
        Calculate
    </button>

  )
}

export default Calculate_Button
