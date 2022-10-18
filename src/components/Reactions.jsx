import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Reaction.css'
import Like from '../assets/like.svg'
import Love from '../assets/love.svg'
import Wow from '../assets/wow.svg'
import Haha from '../assets/haha.svg'
import Care from '../assets/care.svg'
import Angry from '../assets/angry.svg'


const Reactions = (props) => {
  // const [hover, setHover] = useState(false)
  // function whileHover(value){
  //   if(value==false){
  //     setHover(()=>{
  //       return 
  //     })
  //   }
  // }
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
        <motion.button>
            <motion.img whileHover={{scale:1.3}} onClick={()=>{
               props.changeReaction(true);
               console.log("it is running")
            } } value='like' src={Like} alt="like" height={'40px'} style={{paddingLeft: '2px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Love} alt="love" height={'40px'} style={{paddingLeft: '5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Wow} alt="wow" height={'40px'} style={{paddingLeft: '5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Haha} alt="haha" height={'40px'} style={{paddingLeft: '5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Care} alt="care" height={'40px'} style={{paddingLeft: '5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Angry} alt="angry" height={'40px'} style={{paddingLeft: '5px', paddingRight:'2px'}}/>
        </motion.button>
    </motion.div>
  )
}

export default Reactions