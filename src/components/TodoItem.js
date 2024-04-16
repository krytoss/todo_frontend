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
            <label
                for={ item.id }
                className={
                    (item.completed ? 'bg-green-500' : 'bg-red-500') +
                    ` rounded-md my-1 p-1 pr-9 relative
                    box-border w-full h-full block
                    cursor-pointer group`
                }
            >
                {item.task}
                <Checkbox
                    id={ item.id }
                    className={
                        `appearance-none`
                    }
                    checked={ item.completed ? true : false }
                    onChange={ handleChange }
                />
                <div className={
                    `absolute w-6 h-6
                    right-2 top-1/2 -translate-y-1/2
                    bg-white text-gray-800
                    group-hover:text-gray-300
                    leading-none`
                }>
                    <span className={
                        item.completed ?
                            'block' : 'hidden group-hover:block'
                    }>
                        ✓
                    </span>
                </div>
            </label>
        </li>
    )
}

export default TodoItem