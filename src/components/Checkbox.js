import { useCallback } from "react"

const Checkbox = ({ id, checked, onChange, className }) => {

    const handleChange = useCallback((e) => {
        onChange(e.target.checked)
    }, [ onChange ])

    return (
        <input id={id} className={ className } type='checkbox' checked={ checked } onChange={ handleChange } />
    )
}

export default Checkbox