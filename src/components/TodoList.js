import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return (
        <div>
            <ul className={style.TodoList}>
                {props.data.map(props => 
                    <li key={props.id} id={props.id}>{props.text}</li>
                )}
            </ul>
        </div>
    )
}

export default TodoList;