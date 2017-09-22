import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return (
        <div>
            <ul className={style.TodoList}>
                {
                    this.props.data.map( props => {
                        return <TodoList key={props.id} id={props.id} text={props.text} remove={props.removeTodo}/>
                    }
                )}
            </ul>
        </div>
    )
}

export default TodoList;