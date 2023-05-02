import React, { useState } from "react"



export default function Signs(props) {
    const [Selected, setSelected] = useState(false) 

    function handleClick(){
        setSelected(Selected => !Selected)
        props.AddtoArray(props.src)
    }
    
    let selected_state = Selected ? "sign_selected": "sign"; 

    return (
        <img src = {props.src} onClick={handleClick} className={selected_state}/>
    )
}