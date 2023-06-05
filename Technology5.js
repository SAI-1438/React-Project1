import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Technology5 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Technology").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtech5}</h1>
                    <img src={d.imgtech5} alt=''/>
                    <p>Information technology (IT) is the use of computers to create, process, store, retrieve and exchange all kinds of data[1] and information. IT forms part of information and communications technology (ICT).[2] An information technology system (IT system) is generally an information system, a communications system, or, more specifically speaking, a computer system — including all hardware, software, and peripheral equipment — operated by a limited group of IT users.

Although humans have been storing, retrieving, manipulating, and communicating information since the earliest writing systems were developed,[3] the term information technology in its modern sense first appeared in a 1958 article published in the Harvard Business Review; authors Harold J. Leavitt and Thomas L. Whisler commented that "the new technology does not yet have a single established name. We shall call it information technology (IT)."[4] Their definition consists of three categories: techniques for processing, the application of statistical and mathematical methods to decision-making, and the simulation of higher-order thinking through computer programs.[4]

The term is commonly used as a synonym for computers and computer networks, but it also encompasses other information distribution technologies such as television and telephones. Several products or services within an economy are associated with information technology, including computer hardware, software, electronics, semiconductors, internet, telecom equipment, and e-commerce.[5][a]

Based on the storage and processing technologies employed, it is possible to distinguish four distinct phases of IT development: pre-mechanical (3000 BC — 1450 AD), mechanical (1450—1840), electromechanical (1840—1940), and electronic (1940 to present).[3]

Information technology is also a branch of computer science, which can be defined as the overall study of procedure, structure, and the processing of various types of data. As this field continues to evolve across the world, the overall priority and importance has also grown, which is where we begin to see the introduction of computer science-related courses in K-12 education</p>
                </div>
            )
        })}
        </>
      )
}

export default Technology5