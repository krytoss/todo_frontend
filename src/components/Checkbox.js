import { useCallback } from "react"

const Checkbox = ({ checked, onChange }) => {

    const handleChange = useCallback((e) => {
        onChange(e.target.checked)
    }, [ onChange ])

    return (
        <input type='checkbox' checked={ checked } onChange={ handleChange } />
    )
}

export default Checkbox