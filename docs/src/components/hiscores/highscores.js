// HighScores.js
import React from 'react';
import styled from "styled-components";

const HiscoresUl = styled.ul`
  color: black;
  font-size: 20px;
  list-style: none;
  padding: 0;
`;

const HiscoresLi = styled.li`
  margin-bottom: 10px;
`;

const HiscoreItem = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`;

const HiscoreRank = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const HighScores = ({ scores }) => {
  // Sort the scores in descending order based on the score
  const sortedScores = scores.sort((a, b) => b.score - a.score);
  
  return (
    <div>
      <HiscoresUl>
        {sortedScores.slice(0, 10).map((score, index) => (
          <HiscoresLi key={index}>
            <HiscoreItem>
              <HiscoreRank>{index + 1}.</HiscoreRank>
              <span>{score.name} - {score.score}</span>
            </HiscoreItem>
          </HiscoresLi>
        ))}
      </HiscoresUl>
    </div>
  );
};

export default HighScores;
