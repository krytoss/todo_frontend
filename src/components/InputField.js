const InputField = ({ onChange }) => {

    const handleChange = ( event ) => {
        onChange(event.target.value)
    }

    return (
        <input type='text' onChange = { handleChange }/>
    )
}

export default InputField