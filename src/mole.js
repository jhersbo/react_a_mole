import react, { useEffect } from "react";
import moleImg from './mole.png'

function Mole(props){
    useEffect(()=>{
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randSeconds)
        return ()=> clearTimeout(timer)
    })
    return(
        <div>
            <img src={moleImg} style={{'width': '30vw'}} onClick={props.handleClick}/>
        </div>
    )
}
export default Mole