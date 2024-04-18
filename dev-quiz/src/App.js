import './App.css';
import { Link } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo(a) ao Dev-Quiz!</h1>
        <p>Um quiz de conhecimentos gerais sobre o mundo da programação</p>
        <Link to="/select-field" className="btn btn-primary">Start</Link>
      </header>
    </div>
  );
}

export default App;
