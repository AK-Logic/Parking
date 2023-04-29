import Calculate from "../Components/Buttons/Calculate_Button"
import Calculate_Button from "../Components/Buttons/Calculate_Button"
import Signs from "../Components/Sign_component"


// No Parking Signs
import NP1 from "../pictures/base_signs/NP.jpg"
import NP2 from "../pictures/base_signs/NP_right.jpg"
import NP3 from "../pictures/base_signs/NP_left.jpg"
// Text Signs
import NP_text from '../pictures/base_signs/NP_text.png'
// GreenP Signs
import NP_GP from '../pictures/base_signs/greenP.png'
// No Standing
import NS from '../pictures/base_signs/NS.jpg'
import NS_left from '../pictures/base_signs/NS_left.jpg'
import NS_right from '../pictures/base_signs/NS_right.jpg'


export default function Home_Page() {
    return (
        <>
        <div>
            <h2> No Parking Signs</h2>
                <Signs src = {NP1}/>
                <Signs src = {NP2}/>
                <Signs src = {NP3}/>

            <h2> Text Based Signs</h2>
                <Signs src = {NP_text}/>

            <h2> Green P Signs</h2>
                <Signs src = {NP_GP}/>

            <h2> No standing</h2>
                <Signs src = {NS}/> 
                <Signs src = {NS_right}/>    
                <Signs src = {NS_left}/>                
        </div>
<<<<<<< HEAD
            <Calculate/>
=======
        <MyButton/>
>>>>>>> c129f2c (change the import from calculate to mybutton;)
        </>
    )
}