import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homet1 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtec1}</h1>
                    <img src={d.imgtec1} alt=''/>
                    <p>Printing is a process for mass reproducing text and images using a master form or template. The earliest non-paper products involving printing include cylinder seals and objects such as the Cyrus Cylinder and the Cylinders of Nabonidus. The earliest known form of printing as applied to paper was woodblock printing, which appeared in China before 220 AD for cloth printing. However, it would not be applied to paper until the seventh century.[1] Later developments in printing technology include the movable type invented by Bi Sheng around 1040 AD[2] and the printing press invented by Johannes Gutenberg in the 15th century. The technology of printing played a key role in the development of the Renaissance and the Scientific Revolution and laid the material basis for the modern knowledge-based economy and the spread of learning to the masses.
                        <br/>
                        
                    </p>
                </div>
            )
        })}
        </>
      )
}

export default Homet1