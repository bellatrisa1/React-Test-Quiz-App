import React from "react";

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="topic">
      <h3>{question.topic}</h3>
      <h2>{question.text}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index} onClick={() => onAnswerClick(answer.isCorrect)}>
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
