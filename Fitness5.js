import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Fitness5 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Fitness").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfit5}</h1>
                    <img src={d.imgfit5} alt=''/>
                    <p>Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).[1] This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion.[2] A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride co-occur, with energy storage accomplished by springy tendons and passive muscle elasticity.[3] The term running can refer to any of a variety of speeds ranging from jogging to sprinting.

Running in humans is associated with improved health and life expectancy.[4]

It is hypothesized that the ancestors of humankind developed the ability to run for long distances about 2.6 million years ago, probably to hunt animals.[5][6] Competitive running grew out of religious festivals in various areas. Records of competitive racing date back to the Tailteann Games in Ireland between 632 BCE and 1171 BCE,[7][8][9] while the first recorded Olympic Games took place in 776 BCE. Running has been described as the world's most accessible sport</p>
                </div>
            )
        })}
        </>
      )
}

export default Fitness5