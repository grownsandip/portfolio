import { useState } from "react"
import {motion} from "framer-motion"
import Links from "./links/Links"
import"./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"

const Sidebar = () => {
    const [open,setOpen]=useState(false)
    const variants ={
        closed:{
            clipPath:"circle(40px at 50px 50px)",
            transition:{
                delay:0.2,
                type:"spring",
                stiffness:400,
                damping:60,
            },
        },
        open:{
          clipPath:"circle(1200px at 50px 50px)",
          transition:{
                type:"spring",
                stiffness:50,   
          },
        },
    };
  return<motion.div className="sidebar" animate={open? "open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
      </motion.div>
}

export default Sidebar;
