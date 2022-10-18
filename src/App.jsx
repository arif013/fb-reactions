import { useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faComment, faShareSquare, faHeart} from "@fortawesome/free-regular-svg-icons"
import Reactions from './components/Reactions'

function App() {
  const [state, setState] = useState(false)
  
    const [showReaction, setShowReaction] = useState('Like')
    // const callBack = (value)=>{
    //   setShowReaction(value)
    // }
  

  

  function handleClick(value){
    console.log("runnig");
    if((value===false)){
      setState(()=>{
        return <Reactions changeReaction ={showReaction => setShowReaction(showReaction)}/>
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
        <button  onMouseOver={() => handleClick(false)} onMouseLeave={()=>{setTimeout(() => {
          handleClick(true)
        }, 1000);}}  ><li><FontAwesomeIcon icon={faThumbsUp} /><span> {showReaction}</span></li></button>
        <button><li><FontAwesomeIcon icon={faComment}/><span> Comment</span></li></button>
        <button><li><FontAwesomeIcon icon={faShareSquare } /><span> Share</span></li></button>
      </ul>
    </div>
  )
}

export default App
