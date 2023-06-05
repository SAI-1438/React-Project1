import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Bollywood1 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    {/* <div className='imgpagelogo'>
                        <div>
                        <i class="fa-solid fa-circle-user fa-2xl"></i><b> Burla Sai Kiran</b>
                        </div>
                        <div>
                        <i class="fa-brands fa-facebook fa-sm"></i>
                        <i class="fa-brands fa-instagram fa-sm"></i>
                        <i class="fa-brands fa-twitter fa-sm"></i>
                        <i class="fa-brands fa-youtube fa-sm"></i>
                        </div>
                    </div> */}
                    <h1>{d.heading1}</h1>
                    <img src={d.img1} alt=''/>
                    <p>War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Anand, Aditya Chopra, Shridhar Raghavan and Abbas Tyrewala. Produced by Yash Raj Films, the film is the third installment in the YRF Spy Universe. It stars Hrithik Roshan and Tiger Shroff in lead roles with Vaani Kapoor, Ashutosh Rana and Anupriya Goenka playing supporting roles.[5] In the film, Khalid Rahmani (Shroff), an Indian soldier who works for RAW, is assigned to eliminate his former mentor Kabir Dhaliwal (Roshan), who has gone rogue.[6]

Principal photography commenced in September 2018 and wrapped up in March 2019. The film was tentatively titled Fighters, but later on 15 July 2019, when its teaser was unveiled, the official name was announced as War. The film was made on a production budget of ₹150 crore (US$19 million) with a further ₹20 crore (US$2.5 million) spent on print and advertising. The film score and soundtrack album was scored by Vishal–Shekhar. War was released in theatres worldwide on 2 October 2019, coinciding to Gandhi Jayanti, with dubbed versions in Tamil and Telugu.[7]

The film received positive reviews from critics, with particular praise for Shroff's and Roshan's performance, direction, action sequences, VFX and musical score.[8] It broke all opening day and weekend box-office records for a Hindi film, with its collections, until it was surpassed by Pathaan (2023). War eventually emerged as a major financial success with a total gross of ₹475 crore (US$67.45 million), becoming the highest-grossing Indian film of 2019 and the 17th highest-grossing Indian film of all time. A sequel is in developement with Hrithik Roshan, Shabir Ahluwalia and Jr. NTR in the lead roles, with Ayan Mukerji set to direct.[9]</p>
                </div>
            )
        })}
        </>
      )
}

export default Bollywood1