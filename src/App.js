import './App.css';
import {Sidebar} from './components/Sidebar'
import {MainContent} from './components/MainContent'
import {useState, useEffect} from 'react'
import uniqid from 'uniqid'
import {isSameMonth, isSameWeek} from 'date-fns'

function App() {

  const [todoData, setTodoData] = useState([
    {
      id: uniqid(),
      title: 'Study',
      description: 'Continue learning',
      date: '2022-10-08',
      isShowing: true
    },
    {
      id: uniqid(),
      title: 'Go workout',
      description: 'Go run 5 km',
      date: '2022-10-29',
      isShowing: true
    }
  ]);
  //use state to keep track of form data to later add it to the formData array
  const [formData, setFormData] = useState(
    {
      id: JSON.parse(localStorage.getItem('id')) || '',
      title: JSON.parse(localStorage.getItem('title')) || '',
      description: JSON.parse(localStorage.getItem('description')) || '',
      date: JSON.parse(localStorage.getItem('date')) || '',
      isShowing: JSON.parse(localStorage.getItem('isShowing')) || ''
    }
  )
//i want to save to localstorage but IDK HOW YET STILL WORKING ON IT
  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(uniqid()));
    localStorage.setItem("title", JSON.stringify(formData.title));
    localStorage.setItem("description", JSON.stringify(formData.description));
    localStorage.setItem("date", JSON.stringify(formData.date));
    localStorage.setItem("isShowing", JSON.stringify(formData.isShowing));
  }, [formData]);

  //after clicking OK, replace old todo with new edited todo
  function sendEdit(data){
    setTodoData(prev =>
    prev.map(el => el.id === data.id? {...data} : {...el})
    )
    }

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
  function submitForm () {
    setTodoData(prev => [...prev, formData]);
  }

  //show correct todos according to which timeframe button was clicked on the sidebar by changing each todos isShowing status
  function toggleTodos(timeframe){
    const todaysDate = new Date();

    if (timeframe === 'today'){
      setTodoData(prev => (
        prev.map(el => new Date(el.date).toDateString() === todaysDate.toDateString() ? {...el, isShowing: true} : {...el, isShowing:false})
        ))
    } else if (timeframe === 'all'){
      //if there's any todos that aren't showing then change their isShowing status
      setTodoData(prev => (
        prev.map(el => !el.isShowing ? {...el, isShowing: true} : {...el})
        ))
    } else if (timeframe === 'week'){
      setTodoData(prev => (
        prev.map(el => isSameWeek(new Date(el.date),todaysDate, {weekStartsOn: 1}) ? {...el, isShowing: true} : {...el, isShowing: false})
        ))
    } else if(timeframe === 'month') {
        setTodoData(prev => (
          prev.map(el => isSameMonth(new Date(el.date),todaysDate) ? {...el, isShowing: true} : {...el, isShowing: false})
            ))
    }
  } 
    

  return (
    <div className="App">
      <Sidebar 
      toggleTodos={toggleTodos}
      />

      <MainContent 
      data={todoData} 
      submitForm={submitForm} 
      changeForm={handleChange} 
      deleteTodo={deleteTodo} 
      sendEdit={sendEdit}
      />
    </div>
  );
}

export default App;
