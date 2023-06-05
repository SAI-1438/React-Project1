import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Bollywood4 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.heading4}</h1>
                    <img src={d.img4} alt=''/>
                    <p>Gangubai Kathiawadi is a 2022 Indian Hindi-language biographical crime drama film directed by Sanjay Leela Bhansali and produced by Bhansali and Jayantilal Gada. The film stars Alia Bhatt in the title role, alongside Shantanu Maheshwari, Vijay Raaz, Indira Tiwari, Seema Pahwa, Varun Kapoor and Jim Sarbh. Ajay Devgn appears in an extended cameo.

The film is about Gangubai Kothewali, whose life was documented in the book Mafia Queens of Mumbai written by S. Hussain Zaidi. The film depicts the rise of a simple girl from Kathiawad who had no choice but to embrace the ways of destiny and swing it in her favour.[5][6][7][8] Gangubai Kathiawadi premiered at the 72nd Berlin International Film Festival on 16 February 2022, and was released in theatres on 25 February 2022.

Gangubai Kathiawadi received critical acclaim for its themes, direction, production value and Bhatt's performance. In its theatrical run the film grossed ₹153.69 core at the domestic box office and ₹209.77 globally emerging as a commercial success.[9] Numerous publications listed Gangubai Kathiawadi and Bhatt's performance in the film on various year-end best films and performances lists of 2022. At the 68th Filmfare Awards, the film received a leading 15 nominations and won a leading 10 awards, including Best Film, Best Director, and Best Actress for Bhatt.[10]</p>
                </div>
            )
        })}
        </>
      )
}

export default Bollywood4