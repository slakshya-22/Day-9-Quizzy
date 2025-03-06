const Score = ({ score, totalQues, restart }) => {
  return (
      <div className="score">
          <h2 className="score-title">Quiz Finished!</h2>
          <p className="score-value">Your Score: {score} / {totalQues}</p>
          <button className="score-restart" onClick={restart}>Restart Quiz</button>
      </div>
  );
};

export default Score;
