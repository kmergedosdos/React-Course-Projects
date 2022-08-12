import Dice from "./components/Dice";
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {

  const [allDice, setAllDice] = useState(generateAllDice());

  function generateAllDice() {
    const dice_list = [];
    for(let i = 0; i < 10; i++) {
      dice_list.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false
      });
    }
    return dice_list;
  }

  function rollDice() {
    setAllDice(prevDice => {
      const newDice = prevDice.map(dice => ({
        ...dice,
        value: dice.isHeld ? dice.value : Math.floor(Math.random() * 6 + 1)
      }));
      return newDice;
    });
  }

  function holdDice(id) {
    setAllDice(prevDice => {
      const newDice = prevDice.map(dice => ({
        ...dice,
        isHeld: dice.id === id ? !dice.isHeld : dice.isHeld
      }))
      return newDice;
    })
  }

  return (
    <main className="container">
      <div className="dice--container">
          {
            allDice.map(dice => (
              <Dice
                key={dice.id}
                id={dice.id} 
                value={dice.value} 
                isHeld={dice.isHeld} 
                holdDice={holdDice}
              />
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
