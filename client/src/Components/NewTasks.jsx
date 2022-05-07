import React,{useState} from 'react'
import '../Styles/NewTasks.css'

export default function({saveTask}) {
const [Name, setName] = useState('Empty');
const [Discription, setDiscription] = useState('Empty');
const [Date, setDate] = useState('Empty')
const [Time, setTime] = useState('Empty')

  return (
    <div id='newTaskCard'>
        <h2>Enter new task:</h2>
        <input id='NameInput' placeholder='Enter Task Name' onChange={(e) => setName(e.target.value)}></input>
        <br/>
        <input id= 'descriptionInput' placeholder='Enter Task Discription' onChange={(e) => setDiscription(e.target.value)}></input>
        <br/>
        <input id= 'dateInput' type='date' onChange={(e) => setDate(e.target.value)}></input>
        <br/>
        <input id= 'hourInput' type='time' onChange={(e) => setTime(e.target.value)}></input>
        <br/>
        <button onClick={() => saveTask(Name, Discription, Date, Time)}>Submit</button>  
    </div>
  )
}
