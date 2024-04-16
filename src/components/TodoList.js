import TodoItem from "./TodoItem"

const TodoList = ({ list, updateTodo }) => {
    return (
        <ul>
            { list?.sort((a, b) => {
                return new Date(a.completed) - new Date(b.completed) || new Date(a.created) - new Date(b.created)
            }).map((item, i) => {
                return <TodoItem key={i} item={item} updateTodo={updateTodo} />
            }) }
        </ul>
    )
}

export default TodoList