import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Fitness2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Fitness").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfit2}</h1>
                    <img src={d.imgfit2} alt=''/>
                    <p>Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness). It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance-like exercises. Formal aerobics classes are divided into different levels of intensity and complexity and will have five components: warm-up (5–10 minutes), cardiovascular conditioning (25–30 minutes), muscular strength and conditioning (10–15 minutes), cool-down (5–8 minutes) and stretching and flexibility (5–8 minutes). Aerobics classes may allow participants to select their level of participation according to their fitness level. Many gyms offer different types of aerobic classes. Each class is designed for a certain level of experience and taught by a certified instructor with a specialty area related to their particular class.</p>
                </div>
            )
        })}
        </>
      )
}

export default Fitness2