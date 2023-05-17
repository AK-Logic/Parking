import React, { useState } from "react"



export default function Signs( { src , stype , AddtoArray }) {
    const [Selected, setSelected] = useState(false) 

    function handleClick(){
        setSelected(Selected => !Selected)
        AddtoArray(src, stype)
    }
    
    let selected_state = Selected ? "sign_selected": "sign"; 

    return (
        <img src = {src} onClick={handleClick} className={selected_state}/>
    )
}