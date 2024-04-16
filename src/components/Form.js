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
                className={
                    `hover:bg-gray-100
                    rounded-l-md outline-none
                    text-gray-500 px-4`
                }
                value={ todoVal }
                setTodoVal={ setTodoVal }
            />
            <Button
                className={
                    `bg-green-500 hover:bg-green-700
                    px-5 rounded-r-md h-full`
                }
                value='Add'
            />
        </form>
    )
}

export default Form