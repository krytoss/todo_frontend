const InputField = ({ value, setTodoVal }) => {

    const handleChange = ( event ) => {
        setTodoVal(event.target.value)
    }

    return (
        <input type='text' onChange = { handleChange } value={ value }/>
    )
}

export default InputField