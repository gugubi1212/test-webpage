import { useState } from 'react';
import { AnimatePresence, easeOut, motion } from "framer-motion";


export default function FlyoutLink({children, href, FlyoutContent, display, colorful, color,setColor}){
  const [open, setOpen] = useState(false);
  const showFlyout = open;
  return(
    <div
      onMouseEnter={()=>setOpen(true)}
      onMouseLeave={()=>setOpen(false)}
      className='relative h-fit w-fit'
    >
      <a href={href} className='relative  text-2xl'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-indigo-500'>{children}</span> 
        <span 
        style ={{transform: showFlyout? "ScaleX(1)":"ScaleX(0)"}}
        className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out'></span>
      </a>

      <AnimatePresence>
        {showFlyout && 
          <motion.div 
          initial={{opacity:50, y:15}}
          animate={{opacity:1, y:1}}
          exit={{opacity:0, y:15}}
          style={{translateX: "-50%"}}
          transition={{duration: 0.3, ease:'easeOut'}}
          
          className="absolute left-1/2 top-12  bg-white text-black">
            <div className='absolute left-0 right-0 h-6 -top-6 bg-transparent'></div>
            <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 h-4 w-4  bg-white'></div>
            <FlyoutContent display={display} colorful={colorful} color={color} setColor={setColor}/>
          </motion.div>}
        </AnimatePresence>
    </div>
  );
}

