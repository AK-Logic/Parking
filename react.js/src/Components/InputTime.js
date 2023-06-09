import React, { useState } from "react"
import plus_logo from "../pictures/+.png"
import minus_logo from "../pictures/-.jpg"


const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function InputTime() {

  const [times, setTimes] = useState([{ startDay: "", startTime: "", endDay: "", endTime: "" }]);

  const handleAddTime = () => {
    setTimes([...times, { startDay: "", startTime: "", endDay: "", endTime: "" }]);
  };

  const handleRemoveTime = (index) => {
    setTimes(times.filter((_, i) => i !== index));
  };

  const handleTimeChange = (event, index, field) => {
    const { value } = event.target;
    setTimes((prevState) =>
      prevState.map((time, i) => {
        if (i === index) {
          return {
            ...time,
            [field]: value,
          };
        }
        return time;
      })
    );
  };

  return (
    <div style={{ display: "inline-block", verticalAlign: "top" }}>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "10px" }}>Add a Time:</span>
        <img
          src={plus_logo}
          onClick={handleAddTime}
          style={{ cursor: "pointer" }}
          alt="Add a Time"
          className="plus_logo"
        />
      </div>

      {times.map((time, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <select
            value={time.startDay}
            onChange={(event) => handleTimeChange(event, index, "startDay")}
            style={{ marginRight: "5px" }}
          >
            <option value="" disabled>Select Start Day</option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          <input
            type="time"
            value={time.startTime}
            onChange={(event) => handleTimeChange(event, index, "startTime")}
            style={{ marginRight: "5px" }}
          />

          <span>-</span>

          <select
            value={time.endDay}
            onChange={(event) => handleTimeChange(event, index, "endDay")}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <option value="" disabled>Select End Day</option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          <input
            type="time"
            value={time.endTime}
            onChange={(event) => handleTimeChange(event, index, "endTime")}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />

          <img
            src={minus_logo}
            onClick={() => handleRemoveTime(index)}
            style={{ cursor: "pointer" }}
            alt="Remove a Time"
            className="plus_logo"
          />

        </div>
      ))}
    </div>
  );
}