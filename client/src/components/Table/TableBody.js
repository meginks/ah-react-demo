import React from 'react';

export default function TableBody(props) {
  
    return (
        <tbody>
            {
            props.characters.map((character, index) => {
                return (
                    <tr key={index}> 
                    <td>{character.name}</td>
                    <td>{character.job}</td>
                    <td>
                    <button>delete</button>
                    </td>
                    <td><button>edit</button></td>
                    </tr>
                )
            })
            }
        </tbody>
    )
}