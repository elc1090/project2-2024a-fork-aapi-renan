// HighScoresPage.js
import React from 'react';
import HighScores from './highscores';

const HighScoresPage = () => {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  return (
    <div>
      <h1>High Scores</h1>
      <HighScores scores={scores} />
    </div>
  );
};

export default HighScoresPage;
