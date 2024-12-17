import React from "react";

const Result = ({ score, total, onRestart }) => {
  let message = "";
  let emoji = "";

  if (score >= total * 0.8) {
    message = "Поздравляем! Отличный результат!";
    emoji = "🎉";
  } else if (score >= total * 0.6) {
    message = "Хорошая работа! 👍";
    emoji = "👍";
  } else if (score >= total * 0.4) {
    message = "Могло быть лучше! 🤔";
    emoji = "🤔";
  } else {
    message = "Вам нужна практика 🛠️";
    emoji = "🛠️";
  }

  return (
    <div className="result">
      <h2>Результат</h2>
      <p>
        {emoji} {message}
      </p>
      <p>
        Вы набрали {score} из {total} баллов.
      </p>
      <button onClick={onRestart}>Попробовать снова</button>
    </div>
  );
};

export default Result;
