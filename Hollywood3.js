import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Hollywood3 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headinghol3}</h1>
                    <img src={d.imghol3} alt=''/>
                    <p>Mad Max is an Australian post-apocalyptic dystopian action film series and media franchise created by George Miller and Byron Kennedy. It began in 1979 with Mad Max, and was followed by three sequels: Mad Max 2 (1981, released in the United States as The Road Warrior), Mad Max Beyond Thunderdome (1985) and Mad Max: Fury Road (2015); Miller directed or co-directed all four films. Mel Gibson portrayed the titular character Max Rockatansky in the first three films, while Tom Hardy portrayed the character in Mad Max: Fury Road.

The series follows the adventures of Rockatansky, a police officer in a future Australia which is experiencing societal collapse due to war and critical resource shortages. When his wife and child are murdered by a vicious biker gang, Max kills them in revenge and becomes a drifting loner in the Wasteland. As Australia devolves further into barbarity, Max finds himself helping pockets of civilisation, initially for his own self-interest, but his motives always drift into more altruistic ones.

The series has been well received by critics, with each film marked "Certified Fresh" on the film review aggregation website Rotten Tomatoes; Mad Max 2 and Fury Road in particular have been ranked among the best action films ever made. The series has also had a significant influence on popular culture, most notably apocalyptic and post-apocalyptic fiction, and encompasses works in additional media, including video games and comic books. In 2016, Fury Road became the first film of the Mad Max franchise to receive Academy Award recognition, winning six of its ten nominations.

North American rights to the original film are currently owned by Amazon's Metro-Goldwyn-Mayer (via the libraries of Orion Pictures and American International Pictures)</p>
                </div>
            )
        })}
        </>
      )
}

export default Hollywood3