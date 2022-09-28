import {Todo} from '../components/Todo';

function MainContent (props) {
    const todos = props.data.map((item) => {
        return (
            <Todo 
            key= {item.id}
            {...item}
            />
        )
    });
    /* return (
        <div className="todos">
            <div className="todo-title">To do list</div>
            <div className="todo-items">
                <div className="todo-item">
                    <div className="todo-first-row">
                        <input type="checkbox" className="checkitem" name="checkitem"></input>
                        <div className="todo-item-title">{props.data[0].title}</div>
                        <button className="edit-item"><img src={editlogo} alt='edit item'></img></button>
                        <button className="delete-item"><img src={deletelogo} alt='delete item'></img></button>
                    </div>
                    <div className='todo-second-row'>
                        <div className='todo-description'>{props.data[0].description}</div>
                        <div className='todo-date'>{props.data[0].date}</div>
                    </div>
                </div>
            </div>

            <div className='form-container'>
                <form>
                    <input type='text' name='title' id='user-task-title' placeholder='Task' />
                    <input type="text" name="description" id="user-task-description" placeholder="Description" />
                    <label for="date">Due date</label>
                    <input type="date" name="date" id="user-duedate" />
                    <input type="button" id="submit-task" class="submit-task-btn" value="Add" />
                </form>
            </div>

            <div className="todo-buttons">
                <button className="add-task">Add Task</button>
            </div>
    </div>
    )
} */
    return (
        <div className="todos">
        <div className="todo-title">To do list</div>
        {todos}
        <div className='form-container'>
            <form>
                <input type='text' name='title' id='user-task-title' placeholder='Task' />
                <input type="text" name="description" id="user-task-description" placeholder="Description" />
                <label htmlFor="date">Due date</label>
                <input type="date" name="date" id="user-duedate" />
                <input type="button" id="submit-task" class="submit-task-btn" value="Add" />
            </form>
        </div>

        <div className="todo-buttons">
            <button className="add-task">Add Task</button>
        </div>
    </div>

    )
}

export {MainContent};