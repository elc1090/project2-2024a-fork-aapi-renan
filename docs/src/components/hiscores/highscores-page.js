// HighScoresPage.js
import React from "react";
import HighScores from "./highscores.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2d2d2d;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const BackButton = styled(Link)`
  background-color: #4299e1;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
`;

const HiscoresTitle = styled.h1`
  color: #333;
  font-size: 30px;
`;

const ScoresContainer = styled.div`
  margin-top: 30px;
  background-color: white;
  min-width: 300px;
  min-height: 400px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Added shadow */
`;

const HighScoresPage = () => {
  const scores = JSON.parse(localStorage.getItem("highScores")) || [];
  return (
    <PageContainer>
      <Header>
        <BackButton to="/">Back</BackButton>
      </Header>
      <ScoresContainer>
        <HiscoresTitle>High Scores</HiscoresTitle>
        <hr/>
        <HighScores scores={scores} />
      </ScoresContainer>
    </PageContainer>
  );
};

export default HighScoresPage;
