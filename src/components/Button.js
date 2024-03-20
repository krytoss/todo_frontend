const Button = ({ value, onClick }) => {

    const handleOnClick = () => {
        onClick()
    }

    return (
        <button onClick = { handleOnClick }>{ value }</button>
    )
}

export default Button