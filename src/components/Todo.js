import TodoList from "./TodoList"
import Form from "./Form"

const Todo = ({ list, todoVal, setTodoVal, sendTodo, updateTodo }) => {

    return (
        <div id="todo">
            <Form
                todoVal={ todoVal }
                setTodoVal={ setTodoVal }
                sendTodo={ sendTodo }
            />
            <TodoList list = { list } updateTodo = { updateTodo }/>
        </div>
    )

}

export default Todo