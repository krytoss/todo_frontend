import InputField from "./InputField"
import Button from "./Button"

const Form = ({ todoVal, setTodoVal, sendTodo }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        sendTodo()
        setTodoVal("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                value={ todoVal }
                setTodoVal={ setTodoVal }
            />
            <Button value='Add'/>
        </form>
    )
}

export default Form