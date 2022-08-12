import Dice from "./components/Dice";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [tenzies, setTenzies] = useState(false);
  const [allDice, setAllDice] = useState(generateAllDice());

  useEffect(() => {
    setTenzies(allDice.every(dice => dice.isHeld && dice.value === allDice[0].value));
  }, [allDice, tenzies])

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

  function handleButtonClick() {
    if(tenzies) {
      setAllDice(generateAllDice());
    } else {
      setAllDice(prevDice => {
        const newDice = prevDice.map(dice => ({
          ...dice,
          value: dice.isHeld ? dice.value : Math.floor(Math.random() * 6 + 1)
        }));
        return newDice;
      });
    }
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
      {tenzies && <Confetti/>}
      <div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
      </div>
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
      <button className="roll--button" onClick={handleButtonClick}>
        {tenzies ? "New Game": "Roll"}
      </button>
    </main>
  );
}

export default App;
