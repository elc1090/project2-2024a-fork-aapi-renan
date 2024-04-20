// App.js

import React from 'react';
import QuizPage from './components/quiz/QuizPage';

function App() {
  return (
    <div style={{ backgroundColor: '#222', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <QuizPage />
    </div>
  );
}

export default App;
