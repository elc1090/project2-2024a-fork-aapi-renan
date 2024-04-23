// HighScores.js
import React from 'react';

const HighScores = ({ scores }) => {
  return (
    <div>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{score.name}: {score.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighScores;
