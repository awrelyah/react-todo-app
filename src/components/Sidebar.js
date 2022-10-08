function Sidebar (props) {
 return (
    <div className="nav">
        <div className="nav-items">
            <button className="nav-item" id='all' onClick={(e) => props.toggleTodos(e.target.id)}>Home</button>
            <div className="nav-title">Due Date</div>
            <button className="nav-item" id='today' onClick={(e) => props.toggleTodos(e.target.id)}>Today</button>
            <button className="nav-item" id='week' onClick={(e) => props.toggleTodos(e.target.id)}>Week</button>
            <button className="nav-item" id='month' onClick={(e) => props.toggleTodos(e.target.id)}>Month</button>
        </div>

    </div>
    )
}
export {Sidebar}