import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://api.notion.com/v1/databases/{NOTION_DATABASE_ID}/query', {
          headers: {
            'Authorization': 'Bearer YOUR_NOTION_API_KEY',
            'Notion-Version': '2021-05-13',
          }
        });
        setQuestions(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz finished
      // You can add your logic here, like showing a result screen or resetting the quiz
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <div>{questions[currentQuestion].question}</div>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div>
        Score: {score}/{questions.length}
      </div>
    </div>
  );
};

export default Quiz;
