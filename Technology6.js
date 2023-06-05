import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Technology6 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Technology").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtech6}</h1>
                    <img src={d.imgtech6} alt=''/>
                    <p>Automation describes a wide range of technologies that reduce human intervention in processes, namely by predetermining decision criteria, subprocess relationships, and related actions, as well as embodying those predeterminations in machines.[1] Automation has been achieved by various means including mechanical, hydraulic, pneumatic, electrical, electronic devices, and computers, usually in combination. Complicated systems, such as modern factories, airplanes, and ships typically use combinations of all of these techniques. The benefit of automation includes labor savings, reducing waste, savings in electricity costs, savings in material costs, and improvements to quality, accuracy, and precision.

Automation includes the use of various equipment and control systems such as machinery, processes in factories, boilers,[2] and heat-treating ovens, switching on telephone networks, steering, and stabilization of ships, aircraft, and other applications and vehicles with reduced human intervention.[3] Examples range from a household thermostat controlling a boiler to a large industrial control system with tens of thousands of input measurements and output control signals. Automation has also found a home in the banking industry. It can range from simple on-off control to multi-variable high-level algorithms in terms of control complexity.

In the simplest type of an automatic control loop, a controller compares a measured value of a process with a desired set value and processes the resulting error signal to change some input to the process, in such a way that the process stays at its set point despite disturbances. This closed-loop control is an application of negative feedback to a system. The mathematical basis of control theory was begun in the 18th century and advanced rapidly in the 20th. The term automation, inspired by the earlier word automatic (coming from automaton), was not widely used before 1947, when Ford established an automation department.[4] It was during this time that the industry was rapidly adopting feedback controllers, which were introduced in the 1930s.[5]

The World Bank's World Development Report of 2019 shows evidence that the new industries and jobs in the technology sector outweigh the economic effects of workers being displaced by automation.[6] Job losses and downward mobility blamed on automation have been cited as one of many factors in the resurgence of nationalist, protectionist and populist politics in the US, UK and France, among other countries since the 2010s.</p>
                </div>
            )
        })}
        </>
      )
}

export default Technology6