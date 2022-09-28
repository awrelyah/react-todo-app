import './App.css';
import {Sidebar} from './components/Sidebar'
import {MainContent} from './components/MainContent'
import {useState} from 'react';

function App() {

  const [todoData, setTodoData] = useState([{
    'id': 1,
    'title': 'Study',
    'description': 'Continue learning',
    'date': '2022-10-29',
    'isCompleted': false,
  }]);


  function toggleComplete() {
    setTodoData(prev => {
      return {
        ...prev
      }
    })
  }
  return (
    <div className="App">
      <Sidebar />
      <MainContent data={todoData} handleCompletion={toggleComplete}/>
    </div>
  );
}

export default App;
