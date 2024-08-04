import  {useEffect, useRef}from 'react'
import { motion,useInView,useAnimation } from 'framer-motion'

function Reveal({children, width = "fit-content"}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  useEffect(()=> {
   
    if (isInView) {
      mainControl.start("visible")

  }},
  
  [isInView])
  return (
    <div ref={ref} style={{position: 'relative', width, overflow: "hidden"}} >
        <motion.div
        variants={{
          hidden: {opacity: 0,y: 75 },
          visible: {opacity: 1,y: 0}
        }}
        initial="hidden"
        animate ={mainControl}
        transition={{duration: 0.5, delay:0.4}}
        >{children}</motion.div>
      
    </div>
  )
}

export default Reveal
