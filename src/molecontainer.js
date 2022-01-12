import react from "react";
import Mole from "./mole";
import moleHill from './molehill.png'


function MoleContainer(props){
    return(
        <div>
            <Mole></Mole>
            <img src={moleHill} style={{'width': '10vw'}}></img>
        </div>
    )
}

export default MoleContainer