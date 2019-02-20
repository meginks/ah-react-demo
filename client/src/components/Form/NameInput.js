import React from 'react'; 

function NameInput(props) {


    const handleChange = e => {
        props.onNameChange(e.target.value)
    }

    return (
        <div>
        <input type="text" placeholder="name" value={props.name} onChange={handleChange} />
        <input value="submit" type="submit" />
        </div>
    )
}

export default NameInput;