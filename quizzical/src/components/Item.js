import { useState, useEffect } from 'react';

const Item = ({ question, correct_answer, incorrect_answers}) => {
   const [choices, setChoices] = useState([])

   useEffect(() => {
      let tempChoices = [
         {
            value: correct_answer,
            selected: false
         },
         {
            value: incorrect_answers[0],
            selected: false
         },
         {
            value: incorrect_answers[1],
            selected: false
         },
         {
            value: incorrect_answers[2],
            selected: false
         }
      ];
      setChoices(tempChoices.sort(() => 0.5 - Math.random()));
   }, [correct_answer, incorrect_answers])

   function select(value) {
      setChoices(prevChoices => (
         prevChoices.map(choice => ({
            ...choice,
            selected: choice.value === value ? true : false
         }))
      ))
   }

   return (
      <div className="item">
         <h2 className="question">{question}</h2>
         <ul className="choices">
            {
               choices.map(choice => (
                  <li
                     key={choice.value}
                     className={choice.selected ? "active" : ""}
                     onClick={() => select(choice.value)}
                  >
                     {choice.value}
                  </li>
               ))
            }
         </ul>
         <hr/>
      </div>
   );
}

export default Item;