import TodoItem from "./TodoItem"

const TodoList = ({ list }) => {
    return (
        <ul>
            { list?.map((item, i) => {
                return <TodoItem key={i} item={item} />
            }) }
        </ul>
    )
}

export default TodoList