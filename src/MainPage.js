import React, { useEffect, useState } from 'react'
import { useAuth } from './context/AuthContext';
import { addNewTask, deleteTask, getTasks, updateTask } from './services/TaskServices';
import AddTask from './AddTask';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const MainPage = () => {
    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask] = useState('');
    const { authToken } = useAuth();
    useEffect(() => {
      getTaskList();
    }, [])

    const getTaskList = async() => {
      const tasksReceived = await getTasks(authToken);
      setTasks(tasksReceived);
    };
  
    const addTask = async (task) =>{
      const taskReceived = await addNewTask(task, authToken);
      console.log(taskReceived);
      getTaskList();
    }
  
    const handleCheck = async (task) => {
      const response = await updateTask(task, authToken);
      getTaskList();
    }
  
    const handleDelete = async (id) => {
      const response = await deleteTask(id, authToken);
      getTaskList();
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!newTask) return; /* If the button is pressed without any text, it just returns */
      addTask(newTask);
      setNewTask('');
    }
  
  
    return (
      <div>
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

export default MainPage