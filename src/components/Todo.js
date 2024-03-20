import TodoList from "./TodoList"
import Form from "./Form"

const Todo = ({ list, todoVal, setTodoVal, sendTodo }) => {

    return (
        <div id="todo">
            <Form
                todoVal={ todoVal }
                setTodoVal={ setTodoVal }
                sendTodo={ sendTodo }
            />
            <TodoList list = { list }/>
        </div>
    )

}

export default Todo