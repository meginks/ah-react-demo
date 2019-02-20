import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody characters={props.characters} />
        </table>
    )
}

export default Table;