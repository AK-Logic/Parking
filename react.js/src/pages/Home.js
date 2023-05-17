import React, { useState } from 'react'

// Components
import Calculate from "../Components/Buttons/Calculate_Button"
import Signs from "../Components/Sign_component"
import VerifySign from '../Components/VerifySign'

// Images
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
    const [SelectedSignTypes, setSelectedSignTypes] = useState([]);

    function handleSignClick(src, stype) {
        // Check if the sign is already in the array
        const index = SelectedSigns.findIndex(sign => sign.src === src);
        if (index === -1) {
          // If it's not in the array, add it
          setSelectedSigns(SelectedSigns => [ ...SelectedSigns, { src }])
          setSelectedSignTypes(SelectedSignTypes => [ ...SelectedSignTypes, { stype }]);
        } else {
          // If it's already in the array, remove it
          const updatedSigns = [...SelectedSigns];
          updatedSigns.splice(index, 1);
          setSelectedSigns(updatedSigns);

          
          const updatedTypes = [...SelectedSignTypes];
          updatedTypes.splice(index, 1);
          setSelectedSignTypes(updatedTypes);
        }
      }

    return (
        <>
        <h1 style={{ textDecoration: 'underline' }}> Select Signs: </h1>
        <div>
            <h3 style ={{marginBottom: '10px'}}>No Parking Signs</h3>
            <Signs src = {NP2} stype = "NoParking" AddtoArray = {handleSignClick} />
            <Signs src = {NP3} stype = "NoParking" AddtoArray = {handleSignClick} />
            <Signs src = {NP1} stype = "NoParking" AddtoArray = {handleSignClick} />

            <h3 style ={{marginBottom: '10px'}}>Text Based Signs</h3>
            <Signs src = {NP_text} stype = "TextBased" AddtoArray = {handleSignClick} />
            
            <h3 style ={{marginBottom: '10px'}}>GreenP Signs</h3>           
            <Signs src = {NP_GP} stype = "GreenP" AddtoArray = {handleSignClick} />

            <h3 style ={{marginBottom: '10px'}}>No Standing Signs</h3> 
            <Signs src = {NS} stype = "NoStanding" AddtoArray = {handleSignClick} /> 
            <Signs src = {NS_right} stype = "NoStanding" AddtoArray = {handleSignClick} />    
            <Signs src = {NS_left} stype = "NoStanding" AddtoArray = {handleSignClick} />
        </div>
            <VerifySign SelectedSigns = {SelectedSigns} SelectedSignTypes = {SelectedSignTypes}/>
            <Calculate/>
        </>
    )
}