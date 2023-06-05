import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Fitness6 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Fitness").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfit6}</h1>
                    <img src={d.imgfit6} alt=''/>
                    <p>Cycling, also, when on a two-wheeled bicycle, called bicycling or biking, is the use of cycles for transport, recreation, exercise or sport.[1] People engaged in cycling are referred to as "cyclists",[2] "bicyclists",[3] or "bikers".[4] Apart from two-wheeled bicycles, "cycling" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs).

Bicycles were introduced in the 19th century and now number approximately one billion worldwide.[5] They are the principal means of transportation in many parts of the world, especially in densely populated European cities.[6]

Cycling is widely regarded as an effective and efficient mode of transportation[7][8] optimal for short to moderate distances.

Bicycles provide numerous possible benefits in comparison with motor vehicles, including the sustained physical exercise involved in cycling, easier parking, increased maneuverability, and access to roads, bike paths and rural trails. Cycling also offers a reduced consumption of fossil fuels, less air and noise pollution, reduced greenhouse gas emissions,[9] and greatly reduced traffic congestion.[10] These have a lower financial cost for users as well as for society at large (negligible damage to roads, less road area required). By fitting bicycle racks on the front of buses, transit agencies can significantly increase the areas they can serve.[11]

In addition, cycling provides a variety of health benefits[12][13] and reduces the risk of cancers, heart disease, and diabetes that are prevalent in sedentary lifestyles.[14][10] Cycling on stationary bikes have also been used as part of rehabilitation for lower limb injuries, particularly after hip surgery.[15] Individuals who cycle regularly have also reported mental health improvements, including less perceived stress and better vitality.[16]

Among the disadvantages of cycling are the requirement of bicycles (excepting tricycles or quadricycles) for the rider to have certain level of basic skill in order to remain upright, the reduced protection in crashes in comparison to motor vehicles,[17] often longer travel time (except in densely populated areas), vulnerability to weather conditions, difficulty in transporting passengers, and the fact that a basic level of fitness is required for cycling moderate to long distances</p>
                </div>
            )
        })}
        </>
      )
}

export default Fitness6