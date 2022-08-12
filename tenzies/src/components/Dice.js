const Dice = ({ id, value, isHeld, holdDice }) => {
   return (
      <div className={`dice ${isHeld ? "held" : ""}`} onClick={() => holdDice(id)}>
         <h2 className="dice--value">{value}</h2>
      </div>
   );
}

export default Dice;