// QuizPage.js

import React from 'react';
import styled from 'styled-components';
import Button from '../button/button.js';

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
`;

const AppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Score = styled.p`
  color: white;
  font-size: 16px;
  margin: 5px 0 0;
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
  text-align: center;
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

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 16px;
`;

const QuizPage = () => {
  return (
    <>
      <AppBar>
        <Title>Quiz Title</Title>
        <Score>Score: 0</Score>
      </AppBar>
      <Container>
        <QuestionNumber>Question 1</QuestionNumber>
        <Question>What is the output of the following JavaScript code?</Question>
        <Code>
          {`function quiz() {
  var a = 1;
  function bar() {
    var a = 2;
  }
  bar();
  console.log(a);
}
quiz();`}
        </Code>
        <Options>
          <Button>1</Button>
          <Button>2</Button>
          <Button>undefined</Button>
          <Button>ReferenceError</Button>
        </Options>
      </Container>
      <Footer>Questions answered: 1/10</Footer>
    </>
  );
}

export default QuizPage;