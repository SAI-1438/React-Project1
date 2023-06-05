import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Bollywood3 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.heading3}</h1>
                    <img src={d.img3} alt=''/>
                    <p>Brahmāstra: Part One – Shiva (pronounced [bɾəɦmaːstrə]) is a 2022 Indian Hindi-language fantasy action-adventure film[c] written and directed by Ayan Mukerji and produced by Karan Johar, Apoorva Mehta, Namit Malhotra, and Mukerji (in his debut production) – under Dharma Productions, Starlight Pictures, and Prime Focus in association with Star Studios, along with Ranbir Kapoor and Marijke DeSouza. The film serves as the first installment of a planned trilogy, which is itself planned to be part of a cinematic universe titled Astraverse, and stars an ensemble cast including Amitabh Bachchan, Ranbir Kapoor, Alia Bhatt, Mouni Roy and Akkineni Nagarjuna. Drawing inspiration from tales in Hindu mythology, the story follows Shiva, an orphan musician with pyrokinetic powers who discovers that he is an astra, a weapon of enormous energy. He attempts to prevent the strongest of the astras, the Brahmāstra, from falling into the hands of dark forces that share a history with him.

The film was first conceived by Mukerji in 2011, with core elements being inspired by Indian history and stories he heard in his childhood. Its development was first revealed in July 2014 with a planned release for 2016, but its official announcement arrived in October 2017 revealing that the film would be titled Brahmāstra and would be a trilogy. Principal photography lasted from February 2018 to March 2022, with filming locations including Bulgaria, London, New York City, Edinburgh, Thailand, Manali, Mumbai and Varanasi.[13] Production and release of the film was delayed multiple times, first due to production delays and monetary constraints, and later due to the COVID-19 pandemic. The film's songs are composed by Pritam, with soundtrack lyrics written by Amitabh Bhattacharya.</p>
                </div>
            )
        })}
        </>
      )
}

export default Bollywood3