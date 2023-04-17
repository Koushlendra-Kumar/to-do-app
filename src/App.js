import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks)

  function addTask(name){
    const newTask = {id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }

  const taskList = tasks?.map((task) => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    ));
  
  const taskNoun = taskList.length === 1 ? 'task' : 'tasks';
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className='filters btn-group stack-exception'>
        <FilterButton type='all' pressed='true' />
        <FilterButton type='active' pressed='false' />
        <FilterButton type='completed' pressed='false' />
      </div>
      <h2 id='list-heading'>{headingText}</h2>
      <ul role='list' className='todo-list stack-large stack-exception' aria-labelledby='list-heading'>
        {taskList}
      </ul>
    </div>
  )
}

export default App;
