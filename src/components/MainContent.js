import {Todo} from '../components/Todo';
import {useState} from 'react';

function MainContent (props) {
    //loop over Apps state to render all todo items
    const todos = props.data.map((item) => {
        return (
            <Todo 
            key = {item.id}
            {...item}
            deleteTodo = {props.deleteTodo}
            sendEdit = {props.sendEdit}
            />
        )
    });

    //use state to keep track of the form visibility
    const [formVisibility, setFormVisibility] = useState(false);

    function toggleForm () {
        setFormVisibility(prev => !prev)
    }

    //submit form
    function clickHandler(e) {
        e.preventDefault();
        props.submitForm();
        toggleForm();
    }


    return (
        <div className="todos">
        <div className="todo-title">To do list</div>
        <div className="todo-items">
        {todos}
        </div>

        { formVisibility &&
        <div className='form-container'>
            <form>
                <input type='text' name='title' id='user-task-title' placeholder='Task' onChange={props.changeForm} />
                <input type="text" name="description" id="user-task-description" placeholder="Description" onChange={props.changeForm}/>
                <label htmlFor="date">Due date</label>
                <input type="date" name="date" id="user-duedate" onChange={props.changeForm}/>
                <button id="submit-task" className="submit-task-btn" onClick={(e) => clickHandler(e)}>Submit</button>
            </form>
        </div>
        }

        <div className="todo-buttons">
            <button className="add-task" onClick={toggleForm}>{formVisibility ? 'Close form' : 'Add Task'}</button>
        </div>
    </div>

    )
}

export {MainContent};