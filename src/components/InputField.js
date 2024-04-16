const InputField = ({ value, setTodoVal, className }) => {

    const handleChange = ( event ) => {
        setTodoVal(event.target.value)
    }

    return (
        <input
            className={ className }
            type='text'
            onChange = { handleChange }
            value={ value }
        />
    )
}

export default InputField