import InputField from "./InputField"
import TodoList from "./TodoList"
import Button from "./Button"

const Todo = ({ list }) => {
    return (
        <div id="todo">
            <InputField />
            <Button />
            <TodoList list = { list }/>
        </div>
    )
}

export default Todo