import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Food4 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Food").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfod4}</h1>
                    <img src={d.imgfod4} alt=''/>
                    <p>Dairy products or milk products, also known as lacticinia, are food products made from (or containing) milk.[a][1] The most common dairy animals are cow, water buffalo, nanny goat, and ewe. Dairy products include common grocery store food items in the Western world such as yogurt, cheese and butter.[2][3] A facility that produces dairy products is known as a dairy.[b][4] Dairy products are consumed worldwide to varying degrees (see consumption patterns worldwide).[5] Some people avoid some or all dairy products either because of lactose intolerance, veganism, or other health reasons or beliefs.</p>
                </div>
            )
        })}
        </>
      )
}

export default Food4