import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Hollywood4 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headinghol4}</h1>
                    <img src={d.imghol4} alt=''/>
                    <p>Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.[10]

Development of Avatar began in 1994, when James Cameron wrote an 80-page treatment for the film.[11][12] Filming was supposed to take place after the completion of Cameron's 1997 film Titanic, for a planned release in 1999;[13] however, according to Cameron, the necessary technology was not yet available to achieve his vision of the film.[14] Work on the language of the Na'vi began in 2005, and Cameron began developing the screenplay and fictional universe in early 2006.[15][16] Avatar was officially budgeted at $237 million, due to the groundbreaking array of new visual effects Cameron achieved in cooperation with Weta Digital in Wellington.[4] Other estimates put the cost at between $280 million and $310 million for production and at $150 million for promotion.[17][18][19] The film made extensive use of new motion capture filming techniques and was released for traditional viewing, 3D viewing (using the RealD 3D, Dolby 3D, XpanD 3D, and IMAX 3D formats), and "4D" experiences in selected South Korean theaters.[20]

Avatar premiered on December 10, 2009, in London and was released in the United States on December 18, 2009, to positive reviews. Critics highly praised its groundbreaking visual effects, though the story was considered to be predictable.[21][22][23] During its theatrical run, the film broke several box office records, including becoming the highest-grossing film of all time since January 2010. In July 2019, this position was overtaken by Avengers: Endgame, but with subsequent re-releases, beginning with China in March 2021, it returned to becoming the highest-grossing film since then.[24] Adjusted for inflation, Avatar is the second-highest-grossing movie of all time, only behind Gone with the Wind, with a total of a little more than $3.5 billion. It also became the first film to gross more than $2 billion[25] and the best-selling video title of 2010 in the United States. Avatar was nominated for nine awards at the 82nd Academy Awards, winning three, and received numerous other accolades. The success of the film also led to electronics manufacturers releasing 3D televisions[26] and caused 3D films[27] to increase in popularity. Its success led to the Avatar franchise, which includes the sequels Avatar: The Way of Water (2022), Avatar 3 (2024), Avatar 4 (2026), and Avatar 5 (2028).</p>
                </div>
            )
        })}
        </>
      )
}

export default Hollywood4