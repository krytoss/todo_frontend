import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/tasks')
      .then(response => {
        setTodoList(response.data)
      }, error => {
        console.log(error)
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
