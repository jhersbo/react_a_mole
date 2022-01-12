import react from "react";
import { useState } from "react/cjs/react.development";
import Mole from "./mole";
import moleHill from './molehill.png'


function MoleContainer(props){
let [displayMole, setDisplayMole] = useState(false)
    const handleClick = (e)=>{
        if(displayMole === true){
            // score++
            displayMole = false
            return(
                <Mole setDisplayMole={setDisplayMole}></Mole>
            )
        }else{
            return(
                <img src={moleHill} style={{'width': '10vw'}}></img>
            )
        }
    }
    return(
        <div>
            {handleClick()}
        </div>
    )
}

export default MoleContainer