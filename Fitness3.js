import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Fitness3 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Fitness").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfit3}</h1>
                    <img src={d.imgfit3} alt=''/>
                    <p>Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. Walking is defined by an 'inverted pendulum' gait in which the body vaults over the stiff limb or limbs with each step. This applies regardless of the usable number of limbs—even arthropods, with six, eight, or more limbs, walk<br/>
                    Regular, brisk exercise of any kind can improve confidence, stamina, energy, weight control and life expectancy and reduces stress.[7] It can also decrease the risk of coronary heart disease, strokes, diabetes, high blood pressure, bowel cancer and osteoporosis.[7] Scientific studies have also shown that walking, besides its physical benefits, is also beneficial for the mind, improving memory skills, learning ability, concentration, mood, creativity, and abstract reasoning.[7] Sustained walking sessions for a minimum period of thirty to sixty minutes a day, five days a week, with the correct walking posture,[8] reduce health risks and have various overall health benefits, such as reducing the chances of cancer, type 2 diabetes, heart disease, anxiety disorder and depression.[9] Life expectancy is also increased even for individuals suffering from obesity or high blood pressure. Walking also improves bone health, especially strengthening the hip bone, and lowering the harmful low-density lipoprotein (LDL) cholesterol, and raising the useful high-density lipoprotein (HDL) cholesterol.[7] Studies have found that walking may also help prevent dementia and Alzheimer's.[10] Walking at a pace that increases ones heart rate to 70% of their maximum heart rate, also known as the "fat-burning heart rate" can cause the body to utilize its fat reserves for energy leading to fat loss.[11] An individual's maximum heart rate can be calculated by subtracting their age from 220.

The Centers for Disease Control and Prevention's fact sheet on the "Relationship of Walking to Mortality Among U.S. Adults with Diabetes" states that those with diabetes who walked for two or more hours a week lowered their mortality rate from all causes by 39 percent. Women who took 4,500 steps to 7,500 steps a day seemed to have fewer premature deaths compared to those who only took 2,700 steps a day.[12] "Walking lengthened the life of people with diabetes regardless of age, sex, race, body mass index, length of time since diagnosis and presence of complications or functional limitations."[13] It has been suggested that there is a relationship between the speed of walking and health, and that the best results are obtained with a speed of more than 2.5 mph (4.0 km/h).[14]

New research in 2022 led to the recommendation that a commuter should walk at least 6000 steps, each weekday throughout a year, to reach optimal health effects.</p>
                </div>
            )
        })}
        </>
      )
}

export default Fitness3