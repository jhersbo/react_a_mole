import {state, useState} from 'react'
import './App.css';
import MoleContainer from './molecontainer';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = ()=>{
    let hills =[]
    for(let i = 0; i < 9; i++){
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score}></MoleContainer>
      )
    }
    return(
      <div style={{'display': 'flex', 'justifyContent': 'center'}}>
        {hills}
      </div>
    )
  }

  // const displayMole = (e)=>{

  // }
  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
