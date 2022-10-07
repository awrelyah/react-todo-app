import editlogo from '../002-editing.png';
import deletelogo from '../001-bin.png';
import {useState} from 'react';

function Todo (props) {
    //use state to keep track which todo is currently being edited
    const [editId, setEditId] = useState(null)

    function handleEditId(i){
        editId ? setEditId(null) : setEditId(i);
    }

 //submit changes
  function editHandler (e){
    props.sendEdit(e);
    handleEditId();
    }


//i couldnt figure out how to maintain default value to input fields so i added a placeholder
    return (
        <div>
            <div className="todo-item">
                <div className="todo-first-row">
                    <input type="checkbox" className="checkitem" name="checkitem"></input>
                    {editId === props.id ? 
                    <input name='title' type='text' placeholder={props.title} onChange={(e, id) => props.changeTodoData(e, props.id)}></input> 
                    : <div className="todo-item-title">{props.title}</div>
                    }
                    <button className="edit-item"><img src={editlogo} alt='edit item' onClick={() => handleEditId(props.id)}></img></button>
                    <button className="delete-item"><img src={deletelogo} alt='delete item' onClick={() => props.deleteTodo(props.id)}></img></button>
                </div>
                <div className='todo-second-row'>
                    {editId === props.id ? 
                    <input name='description' type='text' placeholder={props.description} onChange={(e,id) => props.changeTodoData(e, props.id)}></input> 
                    : <div className='todo-description'>{props.description}</div> 
                    }

                    {editId === props.id ? 
                    <input name='date' type='date' onChange={(e,id) => props.changeTodoData(e, props.id)}></input>
                    : <div className='todo-date'>{props.date}</div>
                    }
                    {editId === props.id  && <button onClick={(e) => editHandler(e)} >OK</button>}
                </div>
            </div>
        </div>
    )
}

export {Todo};