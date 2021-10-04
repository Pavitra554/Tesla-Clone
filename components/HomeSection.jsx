import React from 'react';
import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';
import { MdOutlineExpandMore } from "react-icons/md";
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import models from '../public/model-s.jpeg';
function HomeSection({model,order,orderlink,btn1,btn2,img,copyright,arrow}) {
    const updownVarient = {
        updown:{
            y:[5,-5,5],
            transition:{
                duration:2,
                yoyo:Infinity
            }
        }
    }
    return (
        
        <div className={styles.sections}>
                <Image src={img}  alt='..'
                layout='responsive'
                objectFit='cover'
                objectPosition='center'
                className={styles.modelimg}
                />
                <div className={styles.details}>
                    <Fade bottom>
                        <div >
                            <h2>{model}</h2>
                            <p>{order}<a>{orderlink}</a></p>
                        </div>
                    </Fade>
                    <div className={styles.btnss} >
                        <Fade bottom>
                            <div>
                                <button className={styles.btn1}>{btn1}</button>
                                {btn2 && <button className={styles.btn2}>{btn2}</button>}
                            </div>
                        </Fade>
                        <motion.div
                            variants={updownVarient}
                            animate="updown"
                            className={styles.arrow}
                        >
                              {arrow &&  <MdOutlineExpandMore size="40"/>}
                        </motion.div>
                    </div>
                </div>
                {copyright && <p className={styles.copy}>Tesla &nbsp; ©&nbsp; 2021&nbsp; Privacy&nbsp; &&nbsp; Legal&nbsp; Contact&nbsp; Careers&nbsp; News&nbsp; Engage &nbsp;Locations</p>}
        </div>
    )
}

export default HomeSection;
