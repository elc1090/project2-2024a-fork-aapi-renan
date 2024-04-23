// QuizPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/button.js";
import Header from "../header/header.js";

// Styled components for the quiz page layout
const PageContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d3748;
  padding: 40px;
  border-radius: 10px;
  max-width: 80%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
  text-align: left;
`;

const QuestionNumber = styled.p`
  color: white;
  font-size: 16px;
  margin: 0;
  margin-bottom: 5px;
`;

const Question = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Code = styled.pre`
  background-color: #f4f4f4;
  border-left: 3px solid #7db4e6;
  color: #333;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
  border-radius: 10px;
`;

const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const AnswerFeedback = styled.p`
  color: ${({ correct }) => (correct === "true" ? "#68d391" : "#f56565")};
  font-weight: bold;
  text-align: center;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EndMessage = styled.div`
  margin-bottom: 20px;
`;

const NextQuestionButton = styled(Button)`
  margin-top: 20px;
`;

const EndMessageContainer = styled.div`
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

const UsernameInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  color: black;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
`;

const LoadingText = styled.h2`
  color: white;
  font-size: 26px;
`;

async function chamadaPerguntas() {
  const fetch = require("node-fetch");

  var questions = [];

  // Definindo a URL da API e a chave da API
  const apiUrl = "https://quizapi.io/api/v1/questions";
  const apiKey = "yoxh1LlD16VsNHP8rjGofqbDiz59lAEnSmCumzvB";

  // Definindo os parâmetros da requisição
  const params = {
    limit: 50,
    category: "Linux",
    difficulty: "easy",
  };

  // Fazendo a requisição GET para a API
  await fetch(`${apiUrl}?${new URLSearchParams(params)}`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => response.json()) // Convertendo a resposta em JSON
    .then((data) => {
      questions = data;
    })
    .catch((error) => console.error("Erro:", error)); // Capturando qualquer erro que possa ocorrer
  return questions;
}

const QuizPage = () => {
  // State variables for managing the quiz
  const [questions, setQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");
  const [showEndMessage, setShowEndMessage] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingScores, setloadingScores] = useState(false);
  const [scoresSent, setScoresSent] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await chamadaPerguntas();
        setQuestions(response);
        setAnsweredQuestions(
          response.map((question) => ({
            id: question.id,
            answered: false,
          }))
        );
        setCurrentAnswers([
          response[0].answers["answer_a"]
            ? response[0].answers["answer_a"]
            : null,
          response[0].answers["answer_b"]
            ? response[0].answers["answer_b"]
            : null,
          response[0].answers["answer_c"]
            ? response[0].answers["answer_c"]
            : null,
          response[0].answers["answer_d"]
            ? response[0].answers["answer_d"]
            : null,
          response[0].answers["answer_e"]
            ? response[0].answers["answer_e"]
            : null,
          response[0].answers["answer_f"]
            ? response[0].answers["answer_f"]
            : null,
        ]);
        for (var element in response[0].correct_answers) {
          if (response[0].correct_answers[element] === "true") {
            setCurrentCorrectAnswer(
              response[0].answers[element.replace("_correct", "")]
            );
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    }
    fetchQuestions();
  }, []);

  // Function to handle user's answer selection
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    answeredQuestions[currentQuestionIndex].answered = true;
    if (answer === currentCorrectAnswer) {
      // Increment the score
      setScore(score + 1);
    }
  };

  // Function to handle next question button click
  const handleNextQuestion = () => {
    // Check if an answer is selected
    if (currentQuestionIndex === questions.length - 1) {
      setShowEndMessage(true);
      setQuizFinished(true);
    } else {
      if (selectedAnswer !== null) {
        // Check if the selected answer is correct
        // Move to the next question
        setSelectedAnswer(null);

        setCurrentQuestionIndex(currentQuestionIndex + 1);

        setCurrentAnswers([
          questions[currentQuestionIndex + 1].answers["answer_a"]
            ? questions[currentQuestionIndex + 1].answers["answer_a"]
            : null,
          questions[currentQuestionIndex + 1].answers["answer_b"]
            ? questions[currentQuestionIndex + 1].answers["answer_b"]
            : null,
          questions[currentQuestionIndex + 1].answers["answer_c"]
            ? questions[currentQuestionIndex + 1].answers["answer_c"]
            : null,
          questions[currentQuestionIndex + 1].answers["answer_d"]
            ? questions[currentQuestionIndex + 1].answers["answer_d"]
            : null,
          questions[currentQuestionIndex + 1].answers["answer_e"]
            ? questions[currentQuestionIndex + 1].answers["answer_e"]
            : null,
          questions[currentQuestionIndex + 1].answers["answer_f"]
            ? questions[currentQuestionIndex + 1].answers["answer_f"]
            : null,
        ]);

        for (var element in questions[currentQuestionIndex + 1]
          .correct_answers) {
          if (
            questions[currentQuestionIndex + 1].correct_answers[element] ===
            "true"
          ) {
            setCurrentCorrectAnswer(
              questions[currentQuestionIndex + 1].answers[
                element.replace("_correct", "")
              ]
            );
          }
        }
      } else {
        // Display a message to select an answer
        alert("Please select an answer");
      }
    }
  };

  const handleFinishQuiz = () => {
    // setShowEndMessage(false);
    if(!loadingScores) {
      setloadingScores(true);
      if(!scoresSent) {
        let highscores = JSON.parse(localStorage.getItem("highScores"))
        localStorage.setItem(
          "highScores",
          JSON.stringify([...highscores, { name: username, score: score }])
        );
        setScoresSent(true);
      }
      setloadingScores(false);
    }
  };

  if (loading) {
    return (
      <div>
        <LoadingText>Loading...</LoadingText>
      </div>
    );
  }

  if (!loading) {
    return (
      <PageContainer>
        {/* Header component for quiz title, score, and questions answered */}
        <Header
          title="DevQuiz"
          score={score}
          questionsAnswered={`${currentQuestionIndex}/${questions.length}`}
        />
        {/* Container for question and options */}
        {showEndMessage ? (
          <EndMessageContainer>
            <EndMessage>
              You scored {score} out of {questions.length}!
            </EndMessage>
            <UsernameInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
            />
            <br />
            <NextQuestionButton onClick={handleFinishQuiz} disabled={loadingScores}>
              <Link to="/highscores">Send Hiscore</Link>
            </NextQuestionButton>
          </EndMessageContainer>
        ) : questions !== ([]) ? (
          <Container>
            <QuestionNumber>Question {currentQuestionIndex + 1}</QuestionNumber>
            <Question>{questions[currentQuestionIndex].question}</Question>
            {questions[currentQuestionIndex].code && (
              <Code>{questions[currentQuestionIndex].code}</Code>
            )}
            {/* Options for user to select */}

            <Options>
              {currentAnswers.map((option, index) =>
                option !== null ? (
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    disabled={answeredQuestions[currentQuestionIndex].answered}
                    style={{
                      // Color the button based on the user's selection
                      backgroundColor:
                        selectedAnswer === option
                          ? option === currentCorrectAnswer
                            ? "#68d391" // Green if correct answer
                            : selectedAnswer === currentCorrectAnswer
                            ? "#f6e05e" // Yellow if wrong answer
                            : "#f56565" // Red if wrong answer and not selected
                          : questions[currentQuestionIndex].answered === true &&
                            option === currentCorrectAnswer
                          ? "#f6e05e"
                          : "#4299e1", // Blue if not selected
                      borderColor:
                        selectedAnswer === option
                          ? option === currentCorrectAnswer
                            ? "#68d391"
                            : selectedAnswer === currentCorrectAnswer
                            ? "#f6e05e"
                            : "#f56565"
                          : "#4299e1",
                      ":hover": {
                        backgroundColor:
                          selectedAnswer === option
                            ? option === currentCorrectAnswer
                              ? "#4cb976" // Green if correct answer
                              : selectedAnswer === currentCorrectAnswer
                              ? "#ccb635" // Yellow if wrong answer
                              : "#c93f3f" // Red if wrong answer and not selected
                            : questions[currentQuestionIndex].answered ===
                                true && option === currentCorrectAnswer
                            ? "#ccb635"
                            : "#2a7fc5", // Blue if not selected
                      },
                    }}
                  >
                    {option}
                  </Button>
                ) : (
                  <></>
                )
              )}
            </Options>
            {/* Display feedback whether the answer is correct or wrong */}
            {selectedAnswer && (
              <AnswerFeedback
                correct={
                  selectedAnswer === currentCorrectAnswer ? "true" : "false"
                }
              >
                {selectedAnswer === currentCorrectAnswer
                  ? "Correct!"
                  : "Wrong!"}
              </AnswerFeedback>
            )}
          </Container>
        ) : (
          <div>Loading</div>
        )}
        {/* Footer for next question button */}
        <Footer>
          {/* Show next question button only if an answer is selected and it's not the last question */}
          {currentQuestionIndex === questions.length - 1 && !quizFinished
            ? selectedAnswer !== null && (
                <NextQuestionButton onClick={handleNextQuestion}>
                  Finish Quiz
                </NextQuestionButton>
              )
            : selectedAnswer !== null &&
              currentQuestionIndex !== questions.length - 1 && (
                <NextQuestionButton onClick={handleNextQuestion}>
                  Next Question
                </NextQuestionButton>
              )}
        </Footer>
      </PageContainer>
    );
  }
};

export default QuizPage;
