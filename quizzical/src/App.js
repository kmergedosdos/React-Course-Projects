import Portal from "./components/Portal";
import Item from "./components/Item";
import BlobTopRight from "./images/blob-top-right.png";
import BlobBotLeft from "./images/blob-bot-left.png";
import { useState, useEffect } from 'react';

function App() {

  const [start, setStart] = useState(false);
  const [triviaData, setTriviaData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState(['', '', '', '', ''])
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        setTriviaData(data.results);
      })
      .catch(err => console.log(err))
  }, [])

  function selectAnswerForNum(num, answer) {
    setSelectedAnswers(prevAnswers => {
      let newAnswers = prevAnswers;
      newAnswers[num] = answer;
      return newAnswers;
    });
  }

  function checkAnswers() {
    selectedAnswers.forEach((ans, i) => {
      if(ans === triviaData[i].correct_answer) setScore(prevScore => prevScore + 1);
    });
    setChecked(true);
  }

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
                  selectAnswerForNum={selectAnswerForNum}
                  num={i}
                  checked={checked}
                />
              ))
            }
          </div>
          <div>
            {
              !checked ? 
              <button className="check-button" onClick={checkAnswers}>Check answers</button> :
              <div className="results">
                <p>You scored {`${score}/${triviaData.length}`} correct answers</p>
                <button className="play-again-button" onClick={() => {}}>Play again</button>
              </div>
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
