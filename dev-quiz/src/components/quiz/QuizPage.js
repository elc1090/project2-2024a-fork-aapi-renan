import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/tailwind.css';

var Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // const response = await axios.get(
        //   "https://api.notion.com/v1/databases/DB-teste-5f465b1f25cc47f1a92beb4bbf2a06d0/query",
        //   {
        //     headers: {
        //       Authorization:
        //         "Bearer secret_yHKYSqgaUWeVfbnws7uh8prjXKhSCVGnekCuvJ7CYeO",
        //       "Notion-Version": "2021-05-13",
        //     },
        //   }
        // );

        // const { Client } = require("@notionhq/client");

        // const notion = new Client({
        //   auth: "secret_yHKYSqgaUWeVfbnws7uh8prjXKhSCVGnekCuvJ7CYeO",
        // });

        // (async () => {
        //   const databaseId = "DB-teste-5f465b1f25cc47f1a92beb4bbf2a06d0";
        //   const response = await notion.databases.retrieve({
        //     database_id: databaseId,
        //   });
        //   console.log(response);
        // })();

        // setQuestions(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
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
        Question 1
         {/* {currentQuestion + 1} of {questions.length} */}
      </div>
      <div>
        pergunta blablablablabla?
        {/* {questions[currentQuestion].question} */}
      </div>
      <div>
        {/* {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))} */}
        <button>a - Sim</button>
        <button>b - Não</button>
        <button>c - Talvez</button>
        <button>d - Batata Frita</button>
      </div>
      <div>
        Score: {score}/{questions.length}
      </div>
    </div>
  );
};

export default Quiz;
