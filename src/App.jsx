import React, { useState, useEffect } from "react";
import fetchQuestions from "./fetch.js";
import Question from "./components/Question.jsx";
import Score from "./components/Score.jsx";
import Timer from "./components/Timer.jsx";
import "./index.css"; 

function App() {
    const [ques, setQues] = useState([]);
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [load, setLoad] = useState(true);
    const [over, setOver] = useState(false);

    useEffect(() => {
        const loadQues = async () => {
            setLoad(true);  
            const data = await fetchQuestions();
            if (data.length > 0) {
                setQues(data);
                setIdx(0);
            }
            setLoad(false);
        };
        loadQues();
    }, []);

    const nextQues = () => {
        if (idx < ques.length - 1) {
            setIdx(prev => prev + 1);
        } else {
            setOver(true);
        }
    };

    const handleAns = (selected) => {
        if (selected === ques[idx].corrAns) {
            setScore(prev => prev + 1);
        }
        nextQues();
    };

    if (load) return <p className="loading-text">Loading...</p>;
    if (over) return <Score score={score} totalQues={ques.length} restart={() => window.location.reload()} />;

    return (
      <>
      <h1 className="game-heading">QUIZZY!</h1>
        <div className="quiz">
            <Question {...ques[idx]} selectAns={handleAns} />
            <Timer timeLimit={5} timeUp={nextQues} currQuesIdx={idx} />
            <p className="quiz-progress">Question {idx + 1} / {ques.length}</p>
        </div>
        </>
    );
}

export default App;
