import MyButton from "../Components/Buttons/Calculate_Button"

// Pictures
import NP1 from "../pictures/base_signs/NP.jpg"
import NP2 from "../pictures/base_signs/NP_right.jpg"
import NP3 from "../pictures/base_signs/NP_left.jpg"



export default function Home_Page() {
    return (
        <>
        <div>
            <img src = {NP1} width = "80px" className="sign"/>
            <img src = {NP2} width = "80px" className="sign"/>
            <img src = {NP3} width = "80px" className="sign"/>
        </div>
        <MyButton/>
        </>
    )
}