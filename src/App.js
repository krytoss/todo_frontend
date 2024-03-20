import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Todo from './components/Todo';

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
        <Todo />
      </header>
    </div>
  );
}

export default App;
