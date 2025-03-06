const Question = ({ question, options, selectAns }) => {
  return (
      <div className="question">
          <h2 className="question-title">{question}</h2>
          <div className="question-options">
              {options.map((option, index) => (
                  <button key={index} className="question-option" onClick={() => selectAns(option)}>
                      {option}
                  </button>
              ))}
          </div>
      </div>
  );
};

export default Question;
