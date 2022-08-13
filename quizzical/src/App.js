import Portal from "./components/Portal";
import Item from "./components/Item";
import BlobTopRight from "./images/blob-top-right.png";
import BlobBotLeft from "./images/blob-bot-left.png";
import { useState } from 'react';

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <img className="blob-top" src={BlobTopRight} alt=""/>
      <img className="blob-bot" src={BlobBotLeft} alt=""/>
      {
        !start ?
        <Portal startQuiz={() => {setStart(true)}}/> :
        <div className="test-page">
          <div className="items-container">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
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
