import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Hollywood1 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headinghol1}</h1>
                    <img src={d.imghol1} alt=''/>
                    <p>Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.

After the 2002 completion of Insomnia, Nolan presented to Warner Bros. a written 80-page treatment for a horror film envisioning "dream stealers," based on lucid dreaming.[8] Deciding he needed more experience before tackling a production of this magnitude and complexity, Nolan shelved the project and instead worked on 2005's Batman Begins, 2006's The Prestige, and The Dark Knight in 2008.[9] The treatment was revised over six months and was purchased by Warner in February 2009.[10] Inception was filmed in six countries, beginning in Tokyo on June 19 and ending in Canada on November 22.[11] Its official budget was $160 million, split between Warner Bros. and Legendary.[12] Nolan's reputation and success with The Dark Knight helped secure the film's US$100 million in advertising expenditure.

Inception's premiere was held in London on July 8, 2010; it was released in both conventional and IMAX theaters beginning on July 16, 2010.[13][14] Inception grossed over $828 million worldwide, becoming the fourth-highest-grossing film of 2010. Considered one of the best films of the 2010s,[15] Inception won four Academy Awards (Best Cinematography, Best Sound Editing, Best Sound Mixing, and Best Visual Effects) and was nominated for four more: Best Picture, Best Original Screenplay, Best Art Direction, and Best Original Score.</p>
                </div>
            )
        })}
        </>
      )
}

export default Hollywood1