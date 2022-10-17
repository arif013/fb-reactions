import { useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faComment, faShareSquare, faHeart} from "@fortawesome/free-regular-svg-icons"
import Reactions from './components/Reactions'

function App() {
  const [state, setState] = useState(false)
  
  function handleClick(value){
    console.log("runnig");
    if((value===false)){
      setState(()=>{
        return <Reactions/>
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
      <div className="list reacts" style={{height: '25px'}}>{ state } </div>
      <ul className='list'>
        <button onMouseOver={() => handleClick(false)}   ><li><FontAwesomeIcon icon={faThumbsUp} /><span> Like</span></li></button>
        <button><li><FontAwesomeIcon icon={faComment}/><span> Comment</span></li></button>
        <button><li><FontAwesomeIcon icon={faShareSquare } /><span> Share</span></li></button>
      </ul>
    </div>
  )
}

export default App
