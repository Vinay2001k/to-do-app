import { useState } from 'react';
import './App.css'; 
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const [tasks, setTasks] = useState([]); 

  const handleTaskAdd = (event) => {
    event.preventDefault();
    const taskInput = event.target.elements.task;
    const descriptionInput = event.target.elements.description;

    const newTask = {
      title: taskInput.value,
      description: descriptionInput.value,
      completed: false 
    };

    setTasks([...tasks, newTask]);
    taskInput.value = '';
    descriptionInput.value = '';
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks].filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>My Todo</h1>
      <div className='todo-wrapper'>
        <form onSubmit={handleTaskAdd}>
          <div className='todo-input'>
            <div className='input-items'>
              <label>Task </label>
              <input type='text' placeholder="what's the task?" name="task" />
            </div>
            <div className='input-items'>
              <label>Description</label>
              <input type='text' placeholder="what's the task Description?" name="description" />
            </div>
            <div className='input-items'>
              <button type='submit' className='primaryBtn'>Add</button> 
            </div>
          </div>
        </form>

        <div className='btn-area'>
          <button 
            className={`secBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}
          >
            Todo
          </button>
          <button 
            className={`secBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className='todo-list'>
          {tasks.filter(task => task.completed === isCompletedScreen).map((task, index) => ( 
            <div className='todo-list-items' key={index}>
              <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
              <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.description}</p>
              <div>
                <AiOutlineDelete className='icon' onClick={() => handleDeleteTask(index)} />
                <BsCheckLg className='check-icon' onClick={() => handleCompleteTask(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
