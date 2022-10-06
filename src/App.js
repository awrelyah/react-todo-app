import './App.css';
import {Sidebar} from './components/Sidebar'
import {MainContent} from './components/MainContent'
import {useState} from 'react';
import uniqid from 'uniqid';

function App() {

  const [todoData, setTodoData] = useState([
    {
      id: uniqid(),
      title: 'Study',
      description: 'Continue learning',
      date: '2022-10-29',
      isCompleted: false,
    },
    {
      id: uniqid(),
      title: 'Go workout',
      description: 'Go run 5 km',
      date: '2022-10-29',
      isCompleted: false,
    }
]);

//use state to keep track of form data to later add it to the formData array
const [formData, setFormData] = useState(
  {
    id: uniqid(),
    title: '',
    description: '',
    date: '',
    isCompleted: false
  }
)

//save form data to a state
function handleChange (event) {
  const {name, value} = event.target;
  setFormData(prevData => {
    return {
      ...prevData,
      id: uniqid(),
      [name]: value
    }
  })
}

//filter the todos to only leave todos that don't have the same id 
//as the clicked todo
function deleteTodo (id) {
  setTodoData(todoData.filter(todo => todo.id !== id));
}

//add new todo to the todoData array
function handleSubmit () {
  //event.preventDefault();
  setTodoData(prev => [...prev, formData]);

}

  return (
    <div className="App">
      <Sidebar />
      <MainContent data={todoData} submitForm={handleSubmit} changeForm={handleChange} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
