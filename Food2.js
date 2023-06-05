import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Food2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Food").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfod2}</h1>
                    <img src={d.imgfod2} alt=''/>
                    <p>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. An alternative definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.

Originally, vegetables were collected from the wild by hunter-gatherers and entered cultivation in several parts of the world, probably during the period 10,000 BC to 7,000 BC, when a new agricultural way of life developed. At first, plants which grew locally would have been cultivated, but as time went on, trade brought exotic crops from elsewhere to add to domestic types. Nowadays, most vegetables are grown all over the world as climate permits, and crops may be cultivated in protected environments in less suitable locations. China is the largest producer of vegetables, and global trade in agricultural products allows consumers to purchase vegetables grown in faraway countries. The scale of production varies from subsistence farmers supplying the needs of their family for food, to agribusinesses with vast acreages of single-product crops. Depending on the type of vegetable concerned, harvesting the crop is followed by grading, storing, processing, and marketing.

Vegetables can be eaten either raw or cooked and play an important role in human nutrition, being mostly low in fat and carbohydrates, but high in vitamins, minerals and dietary fiber. Many nutritionists encourage people to consume plenty of fruit and vegetables, five or more portions a day often being recommended.</p>
                </div>
            )
        })}
        </>
      )
}

export default Food2