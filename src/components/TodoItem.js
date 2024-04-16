import { useCallback } from 'react'
import Checkbox from './Checkbox';

const TodoItem = ({ item, updateTodo }) => {

    const handleChange = useCallback(() => {
        updateTodo(
            item.id,
            {
                ...item,
                completed: item.completed ? undefined : Math.floor(Date.now() / 1000)
            }
        )
    }, [ item, updateTodo ])

    return (
        <li>
            {item.task}
            <Checkbox checked={ item.completed ? true : false } onChange={ handleChange } />
        </li>
    )
}

export default TodoItem