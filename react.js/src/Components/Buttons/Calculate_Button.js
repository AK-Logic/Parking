import React from 'react'
import { useHistory } from 'react-router-dom'
import Calculation from '../../pages/Calculation';

import moment from "moment";

export default function Calculate() {
  let history = useHistory();

  return (
        <button className = "button" onPress={() => moment.setCurrentDate(new Date())}>
            Calculate
        </button>
  );
}


