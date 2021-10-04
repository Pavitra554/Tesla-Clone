import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeSection from '../components/HomeSection';

import models from '../public/model-s.jpeg';
import modely from '../public/model-y.jpeg';
import modelx from '../public/model-x.jpeg';
import model3 from '../public/model-3.jpeg';
import solarPanel from '../public/solar-panels.jpeg';
import solarRoof from '../public/solar-roof.jpeg';
import Accessories from '../public/Accessories.jpeg';

export default function Home() {
    const data =[
      { model:"Model S",
        order:"Order Online for ",
        orderlink:"Touchless Delivery",
        btn1:"custom order",
        btn2:"existing inventory",
        img:models,
        arrow:true,
        key:Date.now()
      },
      { model:"Model Y",
        order:"Order Online for ",
        orderlink:"Touchless Delivery",
        btn1:"custom order",
        btn2:"existing inventory",
        img:modely,
        key:Date.now()
      },
      { model:"Model 3",
        order:"Order Online for ",
        orderlink:"Touchless Delivery",
        btn1:"custom order",
        btn2:"existing inventory",
        img:model3,
        key:Date.now()
      },
      { model:"Model X",
        order:"Order Online for ",
        orderlink:"Touchless Delivery",
        btn1:"custom order",
        btn2:"existing inventory",
        img:modelx,
        key:Date.now()
      },
      { model:"Solar Panels",
        order:"Lowest Cost Solar Panels in America",
        orderlink:"",
        btn1:"order now",
        btn2:"learn more",
        img:solarPanel,
        key:Date.now()
      },
      { model:"Solar Roof",
        order:"Produce Clean Energy From Your Roof",
        orderlink:"",
        btn1:"order now",
        btn2:"learn more",
        img:solarRoof,
        key:Date.now()
      },
      { model:"Accessories",
        order:"",
        orderlink:"",
        btn1:"Shop now",
        img:Accessories,
        copyright:true,
        key:Date.now()
      }
    ]
  return (
    <>
    <Head>
      <title>Electric Cars, Solar & Clean Energy | Tesla</title>
    </Head>
    <div className={styles.mainpage}>
        {data.map((e)=>{
            return (
              <HomeSection key={e.key}  
              model = {e.model}
              order={e.order}
              orderlink ={e.orderlink}
              btn1={e.btn1}
              btn2={e.btn2}
              img={e.img}
              copyright={e.copyright}
              arrow={e.arrow}
              />
            );
        })}
        {/* <HomeSection/>
        <HomeSection/> */}
        
    </div>
    </>
      
  )
}
