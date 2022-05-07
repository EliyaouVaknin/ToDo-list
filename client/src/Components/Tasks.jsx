import React,{useEffect, useState} from 'react'
import Task from './Task';
import '../Styles/Tasks.css'

export default function Tasks({TasksList,updateTask,deleteFunction}) {
  

  return (
    <div id='tasks'>
            {TasksList.map((t, i) => {
            return <Task key={i} id={t.id} done = {t.done} name = {t.name} date = {t.date} hour = {t.hour} discription = {t.discription} updateTask={updateTask} deleteFunction={deleteFunction} TasksList={TasksList} />
            })}
    </div>
  )
}
