import React from 'react';
import Popup from 'reactjs-popup';
import Todos from './components/Todos';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className='bg-white max-w-full max-h-full m-0 p-0'>
      <div className='flex justify-center items-center'>
        <Popup trigger={
          <button type='button' className='bg-gradient-to-r from-green-600 to-indigo-500 rounded-3xl border-solid border-green-400 text-white p-2 m-4'>+ Add Task</button>
        }>
          <AddTask />
        </Popup>
      </div>
      <div className='flex flex-col justify-start'>
        <Todos task='Task 1'/>
        <Todos task='Task 2'/>
        <Todos task='Task 3'/>
      </div>
    </div>
  );
}

export default App;
