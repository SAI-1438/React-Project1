import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Technology2 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Technology").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtech2}</h1>
                    <img src={d.imgtech2} alt=''/>
                    <p>Robotics is an interdisciplinary branch of computer science and engineering.[1] Robotics involves the design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans. Robotics integrates fields of mechanical engineering, electrical engineering, information engineering, mechatronics engineering, electronics, biomedical engineering, computer engineering, control systems engineering, software engineering, mathematics, etc.

Robotics develops machines that can substitute for humans and replicate human actions. Robots can be used in many situations for many purposes, but today many are used in dangerous environments (including inspection of radioactive materials, bomb detection and deactivation), manufacturing processes, or where humans cannot survive (e.g., in space, underwater, in high heat, and clean up and containment of hazardous materials and radiation). Robots can take any form, but some are made to resemble humans in appearance. This is claimed to help in the acceptance of robots in certain replicative behaviors which are usually performed by people. Such robots attempt to replicate walking, lifting, speech, cognition, or any other tasks mainly performed by a human. Many of today's robots are inspired by nature, contributing to the field of bio-inspired robotics.

Certain robots require user input to operate, while other robots function autonomously. The concept of creating robots that can operate autonomously dates back to classical times, but research into the functionality and potential uses of robots did not grow substantially until the 20th century. Throughout history, it has been frequently assumed by various scholars, inventors, engineers, and technicians that robots will one day be able to mimic human behavior and manage tasks in a human-like fashion. Today, robotics is a rapidly growing field, as technological advances continue; researching, designing, and building new robots serve various practical purposes, whether domestically, commercially, or militarily. Many robots are built to do jobs that are hazardous to people, such as defusing bombs, finding survivors in unstable ruins, and exploring mines and shipwrecks. Robotics is also used in STEM (science, technology, engineering, and mathematics) as a teaching aid</p>
                </div>
            )
        })}
        </>
      )
}

export default Technology2