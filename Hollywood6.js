import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Hollywood6 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headinghol6}</h1>
                    <img src={d.imghol6} alt=''/>
                    <p>Aladdin is a 2019 American musical fantasy film directed by Guy Ritchie from a screenplay he co-wrote with John August. Co-produced by Walt Disney Pictures and Rideback, it is a live-action adaptation of Disney's 1992 animated film of the same name, itself based on Aladdin and the Wonderful Lamp, a French addition to the Middle Eastern folk tale One Thousand and One Nights.[1][a] The film stars Will Smith with Mena Massoud, Naomi Scott, Marwan Kenzari, Navid Negahban, Nasim Pedrad, and Billy Magnussen in supporting roles. The plot follows Aladdin, a street urchin, as he falls in love with Princess Jasmine, befriends a wish-granting genie, and battles the wicked sorcerer Jafar.

In October 2016, Disney announced Ritchie would direct a live-action Aladdin remake. Smith was the first member of the cast to join, signing on to portray Genie in July 2017, and Massoud and Scott were confirmed for the two lead roles later that month. Principal photography began that September at Longcross Studios in Surrey, England, also filming in the Wadi Rum Desert in Jordan, and lasted until January 2018. Additional filming and pick-ups took place in August 2018.

Aladdin was theatrically released in the United States on May 24, 2019. It grossed over $1 billion worldwide, making it the ninth highest-grossing film of 2019. The film received mixed reviews from critics, with praise for its music, costume design, and the performances of Smith, Massoud, and Scott but criticism for Ritchie's direction, the CGI, and Kenzari's characterization of Jafar. A sequel is in development.</p>
                </div>
            )
        })}
        </>
      )
}

export default Hollywood6