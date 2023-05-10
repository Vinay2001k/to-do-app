import './App.css';

function App() {
  return (
    <div className="App">
     <h1>my todo</h1>
     <div className='todo-wrapper'>
      <div className='todo-input'>
        <div className='input-items'>
          <input type='text' placeholder="what's the task?"/>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
