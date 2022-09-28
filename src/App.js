import './App.css';
import {Sidebar} from './components/Sidebar'
import {MainContent} from './components/MainContent'
import {useState} from 'react';

function App() {

  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: 'Study',
      description: 'Continue learning',
      date: '2022-10-29',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Go workout',
      description: 'Go run 5 km',
      date: '2022-10-29',
      isCompleted: false,
    }
]);

//use state to keep track of form data to later add it to the formData array
const [formData, setFormData] = useState(
  {
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
      [name]: value
    }
  })
}


function handleSubmit (event) {
  event.preventDefault()
}

  return (
    <div className="App">
      <Sidebar />
      <MainContent data={todoData} submitForm={handleSubmit} changeForm={handleChange} />
    </div>
  );
}

export default App;
