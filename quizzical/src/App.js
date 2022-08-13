import Portal from "./components/Portal";
import Item from "./components/Item";
import BlobTopRight from "./images/blob-top-right.png";
import BlobBotLeft from "./images/blob-bot-left.png";
import { useState, useEffect } from 'react';

function App() {

  const [start, setStart] = useState(false);
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        setTriviaData(data.results);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <img className="blob-top" src={BlobTopRight} alt=""/>
      <img className="blob-bot" src={BlobBotLeft} alt=""/>
      {
        !start ?
        <Portal startQuiz={() => {setStart(true)}}/> :
        <div className="test-page">
          <div className="items-container">
            {
              triviaData.map((item, i) => (
                <Item
                  key={i}
                  question={item.question}
                  correct_answer={item.correct_answer}
                  incorrect_answers={item.incorrect_answers}
                />
              ))
            }
          </div>
          <div>
            <button className="check-button">Check answers</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
