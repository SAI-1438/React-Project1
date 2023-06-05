import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Technology4 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Technology").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtech4}</h1>
                    <img src={d.imgtech4} alt=''/>
                    <p>Biotechnology is a multidisciplinary field that involves the integration of natural sciences and engineering sciences in order to achieve the application of organisms, cells, parts thereof and molecular analogues for products and services.[1]

The term biotechnology was first used by Károly Ereky in 1919,[2] to refer to the production of products from raw materials with the aid of living organisms. The core principle of biotechnology involves harnessing biological systems and organisms, such as bacteria, yeast, and plants, to perform specific tasks or produce valuable substances.

Biotechnology has had a significant impact on many areas of society, from medicine to agriculture to environmental science. One of the key techniques used in biotechnology is genetic engineering, which allows scientists to modify the genetic makeup of organisms to achieve desired outcomes. This can involve inserting genes from one organism into another, creating new traits or modifying existing ones.

Other important techniques used in biotechnology include tissue culture, which allows researchers to grow cells and tissues in the lab for research and medical purposes, and fermentation, which is used to produce a wide range of products such as beer, wine, and cheese.

The applications of biotechnology are diverse and have led to the development of essential products like life-saving drugs, biofuels, genetically modified crops, and innovative materials. It has also been used to address environmental challenges, such as developing biodegradable plastics and using microorganisms to clean up contaminated sites.

Biotechnology is a rapidly evolving field with significant potential to address pressing global challenges and improve the quality of life for people around the world; however, despite its numerous benefits, it also poses ethical and societal challenges, such as questions around genetic modification and intellectual property rights. As a result, there is ongoing debate and regulation surrounding the use and application of biotechnology in various industries and fields.</p>
                </div>
            )
        })}
        </>
      )
}

export default Technology4