import editlogo from '../002-editing.png';
import deletelogo from '../001-bin.png';
import {useState} from 'react';

function Todo (props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })
    return (
        <div>
            <div className="todo-item">
                <div className="todo-first-row">
                    <input type="checkbox" className="checkitem" name="checkitem"></input>
                    <div className="todo-item-title">{props.title}</div>
                    <button className="edit-item"><img src={editlogo} alt='edit item'></img></button>
                    <button className="delete-item"><img src={deletelogo} alt='delete item' onClick={() => props.deleteTodo(props.id)}></img></button>
                </div>
                <div className='todo-second-row'>
                    <div className='todo-description'>{props.description}</div>
                    <div className='todo-date'>{props.date}</div>
                </div>
            </div>
        </div>
    )
}

export {Todo};