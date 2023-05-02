import React from "react";




export default function VerifySign({ SelectedSigns }) {
  return (
    <div>
        <h1>Verify</h1>
          <div className="Verify">
              {SelectedSigns.map((sign, index) => (
                <div>
                <img src={sign.src} key={index} alt="selected sign" className="sign"/>
                </div>
              ))}
          </div>
    </div>
  );
}