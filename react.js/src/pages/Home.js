import Calculate from "../Components/Buttons/Calculate_Button"
import Calculate_Button from "../Components/Buttons/Calculate_Button"

// Pictures
import NP1 from "../base_signs/NP.jpg"
import NP2 from "../base_signs/NP_right.png"
import NP3 from "../base_signs/NP_time.png"



export default function Home_Page() {
    return (
        <>
        <div>
            <img src = {NP1} width = "80px" className="sign"/>
            <img src = {NP2} width = "80px" className="sign"/>
            <img src = {NP3} width = "80px" className="sign"/>
        </div>
        <Calculate/>
        </>
    )
}