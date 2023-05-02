import React, { useState } from 'react'

// Components
import Calculate from "../Components/Buttons/Calculate_Button"
import Calculate_Button from "../Components/Buttons/Calculate_Button"
import Signs from "../Components/Sign_component"
import VerifySign from '../Components/VerifySign'

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
    const [SelectedSigns, setSelectedSigns] = useState([]);

    // function handleSignClick(src) {
    //   setSelectedSigns(SelectedSigns => [ ...SelectedSigns, { src }])
      
    // }


    function handleSignClick(src) {
        // Check if the sign is already in the array
        const index = SelectedSigns.findIndex(sign => sign.src === src);
        if (index === -1) {
          // If it's not in the array, add it
          setSelectedSigns(SelectedSigns => [ ...SelectedSigns, { src }])
        } else {
          // If it's already in the array, remove it
          const updatedSigns = [...SelectedSigns];
          updatedSigns.splice(index, 1);
          setSelectedSigns(updatedSigns);
        }
      }

    return (
        <>
        <div>
            <h1>No Parking Signs</h1>
            <Signs src = {NP2} stype = "NoParking" AddtoArray = {handleSignClick} />
            <Signs src = {NP3} stype = "NoParking" AddtoArray = {handleSignClick} />
            <Signs src = {NP1} stype = "NoParking" AddtoArray = {handleSignClick} />

            <h1>Text Based Signs</h1>
            <Signs src = {NP_text} stype = "TextBased" AddtoArray = {handleSignClick} />
            
            <h1>GreenP Signs</h1>           
            <Signs src = {NP_GP} stype = "GreenP" AddtoArray = {handleSignClick} />

            <h1>No Standing Signs</h1> 
            <Signs src = {NS} stype = "NoStanding" AddtoArray = {handleSignClick} /> 
            <Signs src = {NS_right} stype = "NoStanding" AddtoArray = {handleSignClick} />    
            <Signs src = {NS_left} stype = "NoStanding" AddtoArray = {handleSignClick} />
        </div>
            <VerifySign SelectedSigns = {SelectedSigns} />
            <Calculate/>
        </>
    )
}