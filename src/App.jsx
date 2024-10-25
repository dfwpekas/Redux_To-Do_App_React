import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';


const App = () =>{

  return (
    <div className='app'>
          <h2 className='todo-header'>To-Do List with Redux</h2>
          <AddTask />
          <ListTask />
    </div>
  )
}

export default App;
