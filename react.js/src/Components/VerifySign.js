import React from "react";
import InputTime from './InputTime'



export default function VerifySign({ SelectedSigns}) {


  return (
    <div>
        <h1 style={{ textDecoration: 'underline' }}>Verify:</h1>
              {SelectedSigns.map((sign, index) => (
                <div>
                  <img src={sign.src} key={index} alt="selected sign" className="sign"/>
                  <InputTime/>
                </div>
              ))}
    </div>
  );
}
