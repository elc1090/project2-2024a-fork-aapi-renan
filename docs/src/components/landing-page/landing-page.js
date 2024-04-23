import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WelcomeMessage = styled.h1`
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
`;

const InstructionsMessage = styled.h2`
  font-size: 20px;
  color: white;
`;

const ThemeSelector = styled.select`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #4299e1;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
`;

const StartButton = styled.button`
  margin-top: 20px;
  background-color: #4299e1;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #2c5282;
  }
`;

const LandingPage = () => {
//   const [quizStarted, setQuizStarted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("default");

//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <LandingContainer>
      <WelcomeMessage>Welcome to DevQuiz!</WelcomeMessage>
      <InstructionsMessage>Please select the field theme:</InstructionsMessage>
      <ThemeSelector value={selectedTheme} onChange={handleThemeChange}>
        <option value="default">Default Theme</option>
        <option value="dark">Dark Theme</option>
        <option value="light">Light Theme</option>
        <option value="ocean">Ocean Theme</option>
      </ThemeSelector>
      <Link to="/quiz">
        <StartButton>Start Quiz</StartButton>
      </Link>
    </LandingContainer>
  );
};

export default LandingPage;
