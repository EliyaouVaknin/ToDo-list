import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import NewTasks from './Components/NewTasks';
import Footer from './Components/Footer';

function App() {
  const [tasks, settasks] = useState([])
  const [TaskNumber, setTaskNumber] = useState(0)
  
  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then((data) => { settasks(data); setTaskNumber((data[data.length-1].id)+1)})
  }, [])

  function saveTask(Name, Discription, Date, Time){
    let newTask = {
        id: TaskNumber,
        done: false,
        name: Name,
        discription: Discription,
        date: Date,
        hour: Time
    }
    setTaskNumber(TaskNumber + 1)

    fetch('http://localhost:3001/', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
          'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
    
      let tasklist = [...tasks] 
      tasklist.push(newTask)
      settasks(tasklist)    
    }); 
}

 function updateTask(id, checked){
  for(let i = 0; i < tasks.length; i++){
    if(id == tasks[i].id){
      let updateBody = {
        ID: id,
        done: checked
      }
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({updateBody})
    };
    fetch('http://localhost:3001/', requestOptions)
        .then(response => response.json())
        .then(
          fetch('http://localhost:3001/')
          .then(response => response.json())
          .then((data) => {settasks(data); setTaskNumber((data[data.length-1].id)+1)})
        )
    }
}
 };

  function deleteFunction(id){
    for(let i = 0; i < tasks.length; i++){
      if(id == tasks[i].id){
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({id})
      };
      fetch('http://localhost:3001/', requestOptions)
          .then(response => response.json())
          .then(data => {
            for(let i=0; i<tasks.length; i++){
              if(tasks[i].id == id){
                let tmp = [...tasks];
                tmp.splice(i, 1);
                settasks(tmp) 
              }
            }
          }); 
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <NewTasks saveTask={saveTask}/>
      <Tasks TasksList={tasks} updateTask={updateTask} deleteFunction={deleteFunction} />
      <Footer />
    </div>
  );
}

export default App;
