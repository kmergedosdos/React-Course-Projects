const Portal = ({ startQuiz }) => {
   return (
      <div className="portal">
         <h1>Quizzical</h1>
         <p>Test your knowledge by answering our trivia questions</p>
         <button onClick={startQuiz}>Start quiz</button>
      </div>
   );
}

export default Portal;