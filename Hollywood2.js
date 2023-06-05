import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Hollywood2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headinghol2}</h1>
                    <img src={d.imghol2} alt=''/>
                    <p>Harry Potter is a film series based on the eponymous novels by J. K. Rowling. The series is produced and distributed by Warner Bros. Pictures and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone (2001) and culminating with Harry Potter and the Deathly Hallows – Part 2 (2011).[2][3] A spin-off prequel series, planned to consist of five films, started with Fantastic Beasts and Where to Find Them (2016), marking the beginning of the Wizarding World shared media franchise.[4]

The series was mainly produced by David Heyman, and stars Daniel Radcliffe, Rupert Grint, and Emma Watson as the three leading characters: Harry Potter, Ron Weasley, and Hermione Granger. Four directors worked on the series: Chris Columbus, Alfonso Cuarón, Mike Newell, and David Yates.[5] Michael Goldenberg wrote the screenplay for Harry Potter and the Order of the Phoenix (2007), while the remaining films' screenplays were written by Steve Kloves. Production took place over ten years, with the main story arc following Harry's quest to overcome his arch-enemy Lord Voldemort.[6]

Harry Potter and the Deathly Hallows, the seventh and final novel in the series, was adapted into two feature-length parts.[7] Part 1 was released in November 2010, and Part 2 was released in July 2011.[8][9]

Philosopher's Stone and Deathly Hallows – Part 2 are among the 50 highest-grossing films of all time—at 50th- and 16th-highest, respectively—with both grossing over $1 billion. It is the fourth-highest-grossing film series, with $7.7 billion in worldwide receipts</p>
                </div>
            )
        })}
        </>
      )
}

export default Hollywood2