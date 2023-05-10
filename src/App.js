import './App.css';

function App() {
  return (
    <div className="App">
     <h1>my todo</h1>
     <div className='todo-wrapper'>
      <div className='todo-input'>
        <div className='input-items'>
          <label>Enter </label>
          <input type='text' placeholder="what's the task?"/>
        </div>
        <div className='input-items'>
          <label>Description</label>
          <input type='text' placeholder="what's the task Description?"/>
        </div>
        <div className='input-items'>
          <button type='button' className='PrimaryBtn'>Add</button>
        </div>
      </div>
      <div className='btn-area'>
        <button>Todo</button>
        <button>Completed</button>
      </div>
     </div>
    </div>
  );
}

export default App;
