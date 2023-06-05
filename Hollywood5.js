import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Hollywood5 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headinghol5}</h1>
                    <img src={d.imghol5} alt=''/>
                    <p>The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002), and The Return of the King (2003). Produced and distributed by New Line Cinema with the co-production of WingNut Films, the series is an international venture between New Zealand and the United States. The films feature an ensemble cast including Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett, John Rhys-Davies, Christopher Lee, Billy Boyd, Dominic Monaghan, Orlando Bloom, Hugo Weaving, Andy Serkis and Sean Bean.

Set in the fictional world of Middle-earth, the films follow the hobbit Frodo Baggins as he and the Fellowship embark on a quest to destroy the One Ring, to ensure the destruction of its maker, the Dark Lord Sauron. The Fellowship eventually splits up and Frodo continues the quest with his loyal companion Sam and the treacherous Gollum. Meanwhile, Aragorn, heir in exile to the throne of Gondor, along with the elf Legolas, the dwarf Gimli, Merry, Pippin, and the wizard Gandalf, unite to save the Free Peoples of Middle-earth from the forces of Sauron and rally them in the War of the Ring to aid Frodo by distracting Sauron's attention.

The three films were shot simultaneously in Jackson's native New Zealand from 11 October 1999 until 22 December 2000, with pick-up shots done from 2001 to 2003. It was one of the biggest and most ambitious film projects ever undertaken, with a budget of $281 million (equivalent to $457 million in 2021). The first film in the series premiered at the Odeon Leicester Square in London on 10 December 2001; the second film premiered at the Ziegfeld Theatre in New York City on 5 December 2002; the third film premiered at the Embassy Theatre in Wellington on 1 December 2003. An extended edition of each film was released on home video a year after its release in cinemas.

The Lord of the Rings is widely regarded as one of the greatest and most influential film series ever made. It was a major financial success and is among the highest-grossing film series of all time with $2.991 billion in worldwide receipts. All three films received widespread acclaim from critics and audiences, who lauded the acting, direction, writing, production values, score, ambition, emotional depth, groundbreaking special effects and faithfulness to the source material. The series received numerous accolades, winning 17 Academy Awards out of 30 total nominations, including Best Picture for The Return of the King. In 2021, The Fellowship of the Ring was selected for preservation in the United States National Film Registry by the Library of Congress for being "culturally, historically, or aesthetically significant"</p>
                </div>
            )
        })}
        </>
      )
}

export default Hollywood5