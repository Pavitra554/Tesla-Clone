import React from 'react'
import style from '../styles/sidenav.module.css';
import { MdClear } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { motion } from 'framer-motion';

function Sidenav({setopen}) {
    const maindivVarient={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                // delay:0.5,
                duration:0.2
            }
        },
        exit:{
           opacity:0,
           transition:{
            // delay:0.5,
            duration:0.2
        }
        }
    }
    const sidebarVarient ={
        hidden:{
            x:100,
        },
        visible:{
            x:0,
            transition:{
                // delay:0.5,
                duration:0.2
            }
        },
        exit:{
            x:100,
            transition:{
                // delay:0.5,
                duration:0.2
            }
            
        }
    }
    return (
        <motion.div 
            variants={maindivVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={()=>{setopen(false)}}
            className={style.wholescreensidebar}>
            <motion.div 
            variants={sidebarVarient}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={style.sidebar}>
                <div onClick={()=>setopen(false)} className={style.closesection}>
                   <div className={style.crossicon}> <MdClear size="30"/></div>
                </div>
                <a>Existing Inventory</a>
                <a> Used Inventory</a>
                <a>Trade-In</a>
                <a>Test Drive</a>
                <a> Cybertruck</a>
                <a>  Roadster</a>
                <a>  Semi</a>
                <a>  Charging</a>
                <a>  Powerwall</a>
                <a>  Commercial Energy</a>
                <a>  Utilities</a>
                <a>  Find Us</a>
                <a>  Support</a>
                <a>  Investor Relations</a>
                <div className={style.lang} >
                    <AiOutlineGlobal size="30" className={style.glob}/>United State<br/>English
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Sidenav;
