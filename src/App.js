import React, { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import Result from "./components/Result";
import ProgressBar from "./components/ProgressBar";
import data from "./data.json";
import "./App.scss";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = data.questions[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex + 1 < data.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container">
      <Header />
      {showResult ? (
        <Result
          score={score}
          total={data.questions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={data.questions.length}
          />
          <Question question={question} onAnswerClick={handleAnswerClick} />
        </>
      )}
    </div>
  );
}

export default App;
