import Header from "./Header";
import AddTask from "./AddTask";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";


function App() {
  const [tasks, setTasks]= useState(JSON.parse(localStorage.getItem('taskslist')) || []);
  const [newTask, setNewTask] = useState('')

  /* This will store the tasks list on the Local Storage */
  useEffect(() =>{
    localStorage.setItem('taskslist', JSON.stringify(tasks));   
  }, [tasks])

  const addTask = (task) =>{
    const id = tasks.length ? tasks[tasks.length - 1].id +1 :1; /* This gets the id of the last task on the array, to calculate the id that we should give to the new task  */
    const myNewTask ={id, checked: false, task};
    const listTasks = [...tasks, myNewTask];
    setTasks(listTasks);
  }

  const handleCheck = (id) => {
    const listTasks = tasks.map((task) => task.id===id ? {...task, checked: !task.checked} : task);
    setTasks(listTasks);
  }

  const handleDelete = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return; /* If the button is pressed without any text, it just returns */
    addTask(newTask);
    setNewTask('');
  }


  return (
    <div className="App">
      <Header/>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <Content
        tasks = {tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer lenght={tasks.length}/>
    </div>
  );
}

export default App;
