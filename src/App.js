import { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import Todo from './components/Todo';

function App() {

  const [ todoList, setTodoList ] = useState([])
  const [ todoVal, setTodoVal ] = useState('')

  const fetchTodo = useCallback(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => {
        setTodoList(response.data)
      }, error => {
        console.log(error)
      })
  }, [ setTodoList ])

  const sendTodo = useCallback(() => {
    axios.post('http://localhost:8080/api/tasks', {
        text: todoVal
    })
    .then(response => {
        console.log(response)
        fetchTodo()
    }, error => {
        console.log(error)
    })
  }, [ todoVal, fetchTodo ])

  useEffect(() => {
    fetchTodo()
  }, [ fetchTodo ])

  return (
    <div className="App">
      <header className="App-header">
        <Todo
          list = { todoList }
          todoVal = { todoVal }
          setTodoVal = { setTodoVal }
          sendTodo = { sendTodo }
        />
      </header>
    </div>
  );
}

export default App;
