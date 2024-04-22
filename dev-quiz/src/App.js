// App.js

import React from "react";
import { HashRouter as Router, Routes, Route,  } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import QuizPage from "./components/quiz/QuizPage";
import HighScoresPage from "./components/hiscores/highscores-page";
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #2d2d2d; /* Change to your desired background color */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/highscores" element={<HighScoresPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
