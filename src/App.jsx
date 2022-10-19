import { useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faComment, faShareSquare} from "@fortawesome/free-regular-svg-icons"
import Reactions from './components/Reactions'

function App() {
  const [state, setState] = useState(false) 

  function handleClick(value){
    console.log("runnig");
    if((value===false)){
      setState(()=>{
        return <Reactions  />
      })
      console.log("yess")
    }else{
      
      setState(()=>{
        return false
      })
      console.log("no")
      
    }
  }  
  return (
    <div className="App" onClick={()=>handleClick(true)}>
      <div className="elements">
      <div className="list reacts" style={{height: '50px'}} onMouseLeave={()=>{setTimeout(() => {
          handleClick(true)
        }, 1500);}}>{state}</div>
      <div className='list'>
        <button className='like' onMouseOver={() => handleClick(false)}   ><li><FontAwesomeIcon icon={faThumbsUp} /><span> Like</span></li></button>
        <button className='like'><li><FontAwesomeIcon icon={faComment}/><span> Comment</span></li></button>
        <button className='like'><li><FontAwesomeIcon icon={faShareSquare } /><span> Share</span></li></button>
      </div>
    </div>
    </div>
  )
}

export default App
