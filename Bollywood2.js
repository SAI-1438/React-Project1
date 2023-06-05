import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Bollywood2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.heading2}</h1>
                    <img src={d.img2} alt=''/>
                    <p>Pathaan (pronounced [pəʈʰaːn]) is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, from a story by Anand. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia, and Ashutosh Rana. In the film, Pathaan (Khan), an exiled RAW agent, works with ISI agent Rubina Mohsin (Padukone) to take down Jim (Abraham), a former RAW agent planning to spread a deadly lab-generated virus across India.

Produced by Aditya Chopra of Yash Raj Films, the film began principal photography in November 2020 in Mumbai. The film was shot over various locations in India, Afghanistan, Spain, UAE, Turkey, Russia, Italy and France. Two songs were composed by the duo Vishal–Shekhar, while Sanchit Balhara and Ankit Balhara provided the score. The film was made on an estimated production budget of ₹225 crore (US$28 million) with a further ₹15 crore (US$1.9 million) spent on print and advertising.[4] Against the norm, pre-release publicity was limited with no media interaction or public events.</p>
                </div>
            )
        })}
        </>
      )
}

export default Bollywood2