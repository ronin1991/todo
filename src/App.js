import React, { useState } from 'react';
import TodoItem from './Components/TodoItem';
import TodoTitle from './Components/TodoTitle';
import TodoInput from './Components/TodoInput';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const getInput = (input) => setInput(input);

  const getDataCheckBox = (checkBox, id) => {
    console.log(checkBox, id)
  }

  
 
  const addTask = (e) => {
    e.preventDefault();
    if(input && (input.length <= 10)  ) {
      const newTask = {
        id: tasks.length !== 0 ? tasks.length : 0,
        title: input,
        finished: false,
      };
      setTasks([...tasks, newTask]);
    }
  }

  return (
    <div className="container mt-5 col-md-6 offset-md-3">
      <form className="row d-flex flex-column" onSubmit={addTask}>
        <TodoTitle tasks={tasks}></TodoTitle>
        {tasks.map(task => 
          <TodoItem key={task.id} deleteTask={deleteTask} taskData={task} getDataCheckBox={getDataCheckBox}></TodoItem>
        )}
        <TodoInput getInput={getInput}></TodoInput>
      </form>
    </div>
  );
}

export default App;
