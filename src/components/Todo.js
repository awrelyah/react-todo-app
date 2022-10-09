//import editlogo from '../002-editing.png';
//import deletelogo from '../001-bin.png';
import {useState} from 'react';

function Todo (props) {
    //use state to keep track which todo is currently being edited
    const [editId, setEditId] = useState(null)

    //use state to keep track which todo is complete
    const [isComplete, setIsComplete] = useState(false);

    //use state to keep track of the todo that is currently being edited
    const [editData, setEditData] = useState (
    {
      id: props.id,
      title: props.title,
      description: props.description,
      date: props.date,
      isShowing: true
    }
  )
//save all edit changes to state
    function changeTodoData(event, todoId){
        const {name, value} = event.target;
        setEditData(prev => {
        return {
            ...prev,
            id: todoId,
            [name]: value,
        }
        })
        }
    function toggleComplete () {
        setIsComplete(prev => !prev)
    }

    function handleEditId(i){
        editId ? setEditId(null) : setEditId(i);
    }

 //submit changes
  function editHandler (){
    props.sendEdit(editData);
    handleEditId();
    }

//i couldnt figure out how to maintain default value to input fields so i added a placeholder
    return (
        <div key={props.id}>
            {props.isShowing &&

            <div className={isComplete ? 'todo-item item-complete' : 'todo-item'}>
                <div className="todo-first-row">
                    <input type="checkbox" className="checkitem" name="checkitem" onChange={toggleComplete}></input>
                    {editId === props.id ? 
                    <input name='title' type='text' value={editData.title} onChange={(e, id) => changeTodoData(e, props.id)}></input> 
                    : <div className={isComplete? 'todo-item-title text-complete' : 'todo-item-title'}>{props.title}</div>
                    }
                    <button className="edit-item"><img  src='https://awrelyah.github.io/react-todo-app/002-editing.png' alt='edit item' onClick={() => handleEditId(props.id)}></img></button>
                    <button className="delete-item"><img src='https://awrelyah.github.io/react-todo-app/001-bin.png' alt='delete item' onClick={() => props.deleteTodo(props.id)}></img></button>
                </div>
                <div className='todo-second-row'>
                    {editId === props.id ? 
                    <input name='description' type='text' value={editData.description} onChange={(e,id) => changeTodoData(e, props.id)}></input> 
                    : <div className={isComplete ? 'todo-description text-complete' : 'todo-description'}>{props.description}</div> 
                    }

                    {editId === props.id ? 
                    <input className='todo-date' name='date' type='date' value={editData.date} onChange={(e,id) => changeTodoData(e, props.id)}></input>
                    : <div className='todo-date'>{props.date}</div>
                    }
                    {editId === props.id  && <button onClick={editHandler} >OK</button>}
                </div>
            </div>
        }
        </div>
    )
}

export {Todo};