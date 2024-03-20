import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTodoList(data)
      })
  }, [ setTodoList ])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
