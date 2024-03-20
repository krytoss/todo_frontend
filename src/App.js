import { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import Todo from './components/Todo';

function App() {

  const [ todoList, setTodoList ] = useState([])
  const [ todoVal, setTodoVal ] = useState(null)

  const fetchTodo = useCallback(() => {
    axios.get('http://localhost:8080/tasks')
      .then(response => {
        setTodoList(response.data)
      }, error => {
        console.log(error)
      })
  }, [ setTodoList ])

  const sendTodo = useCallback(() => {
    axios.post('http://localhost:8080/tasks', {
        text: todoVal
    })
    .then(response => {
        console.log(response)
        fetchTodo()
    }, error => {
        console.log(error)
    })
  }, [ todoVal ])

  useEffect(() => {
    fetchTodo()
  }, [ fetchTodo ])

  return (
    <div className="App">
      <header className="App-header">
        <Todo list = { todoList } setTodoVal = { setTodoVal } sendTodo = { sendTodo }/>
      </header>
    </div>
  );
}

export default App;
