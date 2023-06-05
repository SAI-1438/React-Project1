import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Food6 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Food").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfod6}</h1>
                    <img src={d.imgfod6} alt=''/>
                    <p>Non-vegetarian food (in Indian English sometimes shortened to non-veg food[1]) contains meat (red meat, poultry, seafood, or the flesh of any other animal), and sometimes, eggs. The term is common in India, but not usual elsewhere. In the generally vegetarian environment of India, restaurants offering meat and fish usually have a "non-vegetarian" section of their menu, and may include the term (typically as "Veg and Non-veg") in their name-boards and advertising. When describing people, non-vegetarians eat meat and/or eggs, as opposed to vegetarians.[2][3][4] But in India, consumption of dairy foods is usual for both groups.

The diet, non-vegetarianism[5] is the majority human diet in the world (including India).[6][7] Non-vegetarians are also called omnivores in nutritional science</p>
                </div>
            )
        })}
        </>
      )
}

export default Food6