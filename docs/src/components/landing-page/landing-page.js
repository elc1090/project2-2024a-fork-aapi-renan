import React, { useState, useEffect } from "react";
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

const DifficultySelector = styled.select`
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
  const [selectedTheme, setSelectedTheme] = useState("Linux");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");
  const [categories, setCategories] = useState([]);

//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };
  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const apiUrl = "https://quizapi.io/api/v1/categories";
        const apiKey = "yoxh1LlD16VsNHP8rjGofqbDiz59lAEnSmCumzvB";
        const response = await fetch(apiUrl, {
          headers: {
            "X-Api-Key": apiKey,
          },
        });
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };
    
    fetchCategories();
  }, []);


  return (
    <LandingContainer>
      <WelcomeMessage>Welcome to DevQuiz!</WelcomeMessage>
      <InstructionsMessage>Please select the quiz theme:</InstructionsMessage>
      <ThemeSelector value={selectedTheme} onChange={handleThemeChange}>
      {categories.map(item => (
        <option value={item.name}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </option>
      ))}
      </ThemeSelector>
      <DifficultySelector value={selectedDifficulty} onChange={handleDifficultyChange}>
        <option value="Easy">
          Easy
        </option>
        <option value="Medium">
          Medium
        </option>
        <option value="Hard">
          Hard
        </option>
      </DifficultySelector>
      <Link to={`/quiz?theme=${selectedTheme}&difficulty=${selectedDifficulty}`}>
        <StartButton>Start Quiz</StartButton>
      </Link>
    </LandingContainer>
  );
};

export default LandingPage;
