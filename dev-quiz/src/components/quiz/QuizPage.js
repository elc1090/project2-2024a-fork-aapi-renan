// QuizPage.js

import React, { useState } from "react";
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
  color: ${({ correct }) => (correct ? '#68d391' : '#f56565')};
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

const NextQuestionButton = styled(Button)`
  margin-top: 20px;
`;


async function chamadaPerguntas (){
  const fetch = require('node-fetch');

// Definindo a URL da API e a chave da API
  const apiUrl = 'https://quizapi.io/api/v1/questions';
  const apiKey = 'yoxh1LlD16VsNHP8rjGofqbDiz59lAEnSmCumzvB';

// Definindo os parâmetros da requisição
  const params = {
    limit: 10,
  };

// Fazendo a requisição GET para a API
  fetch(`${apiUrl}?${new URLSearchParams(params)}`, {
    headers: {
      'X-Api-Key': apiKey,
    },
  })
      .then(response => response.json()) // Convertendo a resposta em JSON
      .then(data => {
        // Iterando sobre as perguntas retornadas e imprimindo cada uma
        data.forEach(question => {
          console.log(question);
          console.log(`Pergunta: ${question.question}`);
          const corret_ans = question.correct_answer;
          for (let key in question.answers) {
            console.log(`Resposta ${key}: ${question.answers[key]}`);
          }
          console.log(`Resposta certa: ${corret_ans}`);
        });
      })
      .catch(error => console.error('Erro:', error)); // Capturando qualquer erro que possa ocorrer
}

const QuizPage = () => {
  chamadaPerguntas();
  // State variables for managing the quiz
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the output of the following JavaScript code?",
      code: `function foo() {
  var a = 1;
  function bar() {
    var a = 2;
  }
  bar();
  console.log(a);
}
foo();`,
      options: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "undefined" },
        { id: 4, text: "ReferenceError" }
      ],
      correctAnswer: "ReferenceError",
      answered: false
    },
    {
      id: 1,
      question: "What is the output of the following JavaScript code?",
      code: `function foo() {
  var a = 1;
  function bar() {
    var a = 2;
  }
  bar();
  console.log(a);
}
foo();`,
      options: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "undefined" },
        { id: 4, text: "ReferenceError" }
      ],
      correctAnswer: "ReferenceError",
      answered: false
    },
    {
      id: 1,
      question: "What is the output of the following JavaScript code?",
      code: `function foo() {
  var a = 1;
  function bar() {
    var a = 2;
  }
  bar();
  console.log(a);
}
foo();`,
      options: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "undefined" },
        { id: 4, text: "ReferenceError" }
      ],
      correctAnswer: "ReferenceError",
      answered: false
    },
    // Add more questions here
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  // Function to handle user's answer selection
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answered = true;
    setQuestions(updatedQuestions);
  };

  // Function to handle next question button click
  const handleNextQuestion = () => {
    // Check if an answer is selected
    if (selectedAnswer !== null) {
      // Check if the selected answer is correct
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        // Increment the score
        setScore(score + 1);
      }
      // Move to the next question
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Display a message to select an answer
      alert("Please select an answer");
    }
  };

  return (
    <PageContainer>
      {/* Header component for quiz title, score, and questions answered */}
      <Header title="Quiz Title" score={score} questionsAnswered={`${currentQuestionIndex}/${questions.length}`} />
      {/* Container for question and options */}
      <Container>
        <QuestionNumber>Question {currentQuestionIndex + 1}</QuestionNumber>
        <Question>{questions[currentQuestionIndex].question}</Question>
        {questions[currentQuestionIndex].code && (
          <Code>{questions[currentQuestionIndex].code}</Code>
        )}
        {/* Options for user to select */}
        <Options>
          {questions[currentQuestionIndex].options.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleAnswerClick(option.text)}
              disabled={questions[currentQuestionIndex].answered}
              style={{
                // Color the button based on the user's selection
                backgroundColor:
                  selectedAnswer === option.text
                    ? option.text === questions[currentQuestionIndex].correctAnswer
                      ? "#68d391" // Green if correct answer
                      : selectedAnswer === questions[currentQuestionIndex].correctAnswer
                      ? "#f6e05e" // Yellow if wrong answer
                      : "#f56565" // Red if wrong answer and not selected
                    : (questions[currentQuestionIndex].answered === true && option.text === questions[currentQuestionIndex].correctAnswer)
                    ? "#f6e05e"
                    : "#4299e1", // Blue if not selected
                borderColor:
                  selectedAnswer === option.text
                    ? option.text === questions[currentQuestionIndex].correctAnswer
                      ? "#68d391"
                      : selectedAnswer === questions[currentQuestionIndex].correctAnswer
                      ? "#f6e05e"
                      : "#f56565"
                    : "#4299e1"
              }}
            >
              {option.text}
            </Button>
          ))}
        </Options>
        {/* Display feedback whether the answer is correct or wrong */}
        {selectedAnswer && (
          <AnswerFeedback correct={selectedAnswer === questions[currentQuestionIndex].correctAnswer}>
            {selectedAnswer === questions[currentQuestionIndex].correctAnswer ? "Correct!" : "Wrong!"}
          </AnswerFeedback>
        )}
      </Container>
      {/* Footer for next question button */}
      <Footer>
        {/* Show next question button only if an answer is selected and it's not the last question */}
        {selectedAnswer !== null && currentQuestionIndex !== questions.length - 1 && (
          <NextQuestionButton onClick={handleNextQuestion}>Next Question</NextQuestionButton>
        )}
      </Footer>
    </PageContainer>
  );
};

export default QuizPage;