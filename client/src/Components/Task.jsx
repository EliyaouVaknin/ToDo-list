import React,{useState} from 'react'
import '../Styles/Task.css'

export default function Task(props) {
  const [NameStyle, setNameStyle] = useState({textDecoration: 'none'})

  function changeStatus(e){
    props.updateTask(props.id, e.target.checked);
    if(e.target.checked == true){
      setNameStyle({textDecoration: 'line-through'})
    } else {
      setNameStyle({textDecoration: 'none'})
    }
  }

  function deleteFunc(){
    var value = window.confirm('Are you SURE?!');
    if (value == true){
      props.deleteFunction(props.id)
    }
  }

  return (
    <div className='note'>
          <input type="checkbox" name="done" id="done" onChange={(e) => changeStatus(e)} /> 
          <br/>
          <p id='nameID' style={NameStyle}>{props.name}</p>
          <p id='DescriptionID'>{props.discription}</p>
          <p id='DateID'>{props.date}</p>
          <p id='hourID'>{props.hour}</p>
          <button id='deleteBtn' onClick={deleteFunc}>Delete</button>
    </div>
    
  )
}
