import { useState } from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';


function App() {
  const [isCompletedScreen,setIsCompletedScreen] = useState(false);
  return (
    <div className="App">
     <h1>My Todo</h1>
     <div className='todo-wrapper'>
      <div className='todo-input'>
        <div className='input-items'>
          <label>Task </label>
          <input type='text' placeholder="what's the task?"/>
        </div>
        <div className='input-items'>
          <label>Description</label>
          <input type='text' placeholder="what's the task Description?"/>
        </div>
        <div className='input-items'>
          <button type='button' className='primaryBtn'>Add</button>
        </div>
      </div>
      <div className='btn-area'>
        <button  className={`secBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen (false)}>Todo</button>
        <button  className={`secBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen (true)}>Completed</button>
      </div>
      <div className='todo-list'>
        <div className='todo-list-items'>
          <h3>Task 1</h3>
          <p>Description</p>
        </div>
        <div>
          <AiOutlineDelete className='icon'/>
          <BsCheckLg className='check-icon'/>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;

