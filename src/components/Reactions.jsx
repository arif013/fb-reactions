import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Reaction.css'
import Like from '../assets/like.svg'
import Love from '../assets/love.svg'
import Wow from '../assets/wow.svg'
import Haha from '../assets/haha.svg'
import Care from '../assets/care.svg'
import Angry from '../assets/angry.svg'


const Reactions = () => {

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      // ease: [0, 0.71, 0.2, 1.01],
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}>
        <motion.button className='reactions'>
            <motion.img whileHover={{scale:1.3}} src={Like} alt="like" height={'40px'} style={{paddingLeft: '2px', paddingTop:'5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Love} alt="love" height={'40px'} style={{paddingLeft: '8px', paddingTop:'5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Wow} alt="wow" height={'40px'} style={{paddingLeft: '8px', paddingTop:'5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Haha} alt="haha" height={'40px'} style={{paddingLeft: '8px', paddingTop:'5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Care} alt="care" height={'40px'} style={{paddingLeft: '8px', paddingTop:'5px'}}/>
            <motion.img whileHover={{scale:1.3}} src={Angry} alt="angry" height={'40px'} style={{paddingLeft: '8px', paddingRight:'2px', paddingTop:'5px'}}/>
        </motion.button>
    </motion.div>
  )
}

export default Reactions