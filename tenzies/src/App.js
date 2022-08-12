import Dice from "./components/Dice";
import { useState } from 'react';

function App() {

  const [allDice, setAllDice] = useState(generateAllDice());

  function generateAllDice() {
    const dice_list = [];
    for(let i = 0; i < 10; i++) {
      dice_list.push(Math.floor(Math.random() * 6 + 1));
    }
    return dice_list;
  }

  function rollDice() {
    setAllDice(generateAllDice());
  }

  return (
    <main className="container">
      <div className="dice--container">
          {
            allDice.map((dice_value, i) => (
              <Dice key={i} value={dice_value} />
            ))
          }
      </div>
      <button className="roll--button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
