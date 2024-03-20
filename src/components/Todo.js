import InputField from "./InputField"
import TodoList from "./TodoList"
import Button from "./Button"
import { useState, useCallback } from "react"
import axios from "axios"

const Todo = ({ list, setTodoVal, sendTodo }) => {

    return (
        <div id="todo">
            <InputField onChange={ setTodoVal }/>
            <Button value='Add' onClick={ sendTodo }/>
            <TodoList list = { list }/>
        </div>
    )

}

export default Todo