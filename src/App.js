import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useState } from 'react';
import AddTask from './components/AddTask.js';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    
  ]);

//Add a Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)
  const newTask = {id: id, ...task}
  setTasks([...tasks, newTask])
}

//Delete a task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const onToggle = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle} /> : 'No tasks'}
    </div>
  );
}

export default App;