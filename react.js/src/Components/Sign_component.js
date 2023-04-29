import React, { useState } from "react"

// Images
import NP_text from '../pictures/base_signs/NP_text.png'
import NP1 from "../pictures/base_signs/NP.jpg"
import NP2 from "../pictures/base_signs/NP_right.jpg"
import NP3 from "../pictures/base_signs/NP_left.jpg"

export default function Signs(props) {
    const [Selected, setSelected] = useState(false) //UseState creates an array of [default value, function]

    function handleClick(){
        setSelected(Selected => !Selected) // onClick, Set Selected = opposite of what it was
    }

    let selected_state = Selected ? "sign_selected": "sign"; // Alternative if statement, if Selected = True, "sign_selected", else: "sign"

    return (
        <img src = {props.src} onClick={handleClick} className={selected_state}/>
    )
}
