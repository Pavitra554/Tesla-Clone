import React, { useState } from 'react'
import style from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/teslalogo.svg';
import { motion } from 'framer-motion';
import Sidenav from './Sidenav';

function NavBar() {
    const [open,setopen] = useState(false);
    const hoverVarient = {
        hover:{
            backgroundColor: "#393c4115",
            borderRadius:"10px",
            transition:{
                type:'spring',
                stiffness:110,
                duration:0.4
            }
        }
    }
    return (
       <>
       <div className={style.report}>
            <p>Read Tesla{`'`}s 2020 Impact Report</p>
       </div>

        <nav className={style.mainnav}>
            <div  className={style.logo}>
                <Image src={logo} width={120} height={30} alt='logo'/>
            </div>
            <div className ={style.models}>
                <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Model S</motion.div>
                <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Model 3</motion.div>
                <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Model X</motion.div>
                <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Model Y</motion.div>
                <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Solar Roof</motion.div>
                <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Solar Panels</motion.div>
            </div>
            <div className={style.leftLinks}>
                <div className={style.shopacc}>
                    <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Shop</motion.div>
                    <motion.div variants={hoverVarient} whileHover="hover" className={style.link}>Account</motion.div>
                </div>
                <motion.div 
                onClick={()=>setopen(!open)}
                variants={hoverVarient} whileHover="hover" className={style.link}>Menu</motion.div>

            </div>
        </nav>
        {open && <Sidenav setopen = {setopen}/>}
       </>
    )
}

export default NavBar
