import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homeh3 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingh3}</h1>
                    <img src={d.imgh3} alt=''/>
                    <p>The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother Jonathan. Based on the DC Comics superhero, Batman, it is the sequel to Batman Begins (2005) and the second installment in The Dark Knight Trilogy. The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos. The ensemble cast includes Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman.

Warner Bros. Pictures prioritized a sequel following the successful reinvention of the Batman film series with Batman Begins. Christopher and Batman Begins co-writer David S. Goyer developed the story elements, making Dent the central protagonist caught up in the battle between Batman and the Joker. In writing the screenplay, the Nolans were influenced by 1980s Batman comics and crime drama films, and sought to continue Batman Begins' heightened sense of realism. From April to November 2007, filming took place with a $185 million budget in Chicago and Hong Kong, and on sets in England. The Dark Knight was the first major motion picture to be filmed with high-resolution IMAX cameras. Christopher avoided using computer-generated imagery unless necessary, insisting on practical stunts such as flipping an 18-wheel truck and blowing up a factory.

The Dark Knight was marketed with an innovative interactive viral campaign that initially focused on countering criticism of Ledger's casting by those who believed he was a poor choice to portray the Joker. Ledger died from an accidental drug overdose in January 2008, leading to widespread interest from the press and public regarding his performance. When it was released in July, The Dark Knight received acclaim for its mature tone and themes, visual style, and performances—particularly that of Ledger, who received many posthumous awards including Academy, BAFTA, and Golden Globe awards for Best Supporting Actor, making The Dark Knight the first comic-book film to receive major industry awards. It broke several box-office records and became the highest-grossing 2008 film, the fourth-highest-grossing film of its time, and the highest-grossing superhero film.

Since its release, The Dark Knight has been assessed as one of the greatest superhero films ever made, one of the best films of the 2000s, and one of the best films ever made. It is considered the "blueprint" for many modern superhero films, particularly for its rejection of a typical comic-book film style in favor of a crime film that features comic-book characters. Many filmmakers sought to repeat its success by emulating its gritty, realistic tone to varying degrees of success. The Dark Knight has been analyzed for its themes of terrorism and the limitations of morality and ethics. The United States Library of Congress selected it for preservation in the National Film Registry in 2020. A sequel, The Dark Knight Rises, concluded The Dark Knight trilogy in 2012.</p>
                </div>
            )
        })}
        </>
      )
}

export default Homeh3