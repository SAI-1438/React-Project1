import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homeh2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingh2}</h1>
                    <img src={d.imgh2} alt=''/>
                    <p>Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick. It was based on the characters of the original film created by Jim Cash and Jack Epps Jr. The film also stars Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris, and Val Kilmer, who reprises his role as Iceman. In the film, Maverick confronts his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.

Development on a Top Gun sequel was announced in 2010 by Paramount Pictures. Cruise, along with producer Jerry Bruckheimer and director Tony Scott, were asked to return. Craig wrote a draft of the screenplay in 2012, but the project stalled when Scott died later that year.[6] The film was later dedicated to Scott's memory.[7] Production resumed in 2017 after Kosinski was hired to direct. Principal photography which involved the use of IMAX-certified 6K full-frame cameras, took place from May 2018 to April 2019 in California, Washington, and Maryland. An initial release date was scheduled for July 12, 2019, but it was delayed several times due to the complex action sequences and the COVID-19 pandemic. During the pandemic, several streaming companies attempted to purchase the streaming rights to the film from Paramount, but all offers were declined on the orders of Cruise, who insisted the film be released exclusively in theaters.[8]

Top Gun: Maverick premiered at CinemaCon on April 28, 2022, and was theatrically released by Paramount Pictures in the United States on May 27, 2022. The film was acclaimed by critics, with many calling it better than the original.[9] It won Best Film from the National Board of Review and was also named one of the top ten films of 2022 by the American Film Institute. Top Gun: Maverick was nominated for six awards at the 95th Academy Awards (including Best Picture), winning Best Sound, and received numerous other accolades. The film grossed $1.493 billion worldwide, making it the second-highest-grossing film of 2022 and the highest-grossing film of Cruise's career.</p>
                </div>
            )
        })}
        </>
      )
}

export default Homeh2