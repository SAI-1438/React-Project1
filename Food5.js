import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Food5 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Food").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfod5}</h1>
                    <img src={d.imgfod5} alt=''/>
                    <p>Protein is a nutrient your body needs to grow and repair cells, and to work properly.

Protein is found in a wide range of food and it’s important that you get enough protein in your diet every day. How much protein you need from your diet varies depending on your weight, gender, age and health.

Meeting your protein needs is easily achieved from eating a variety of foods. Protein from food comes from plant and animal sources such as:

meat and fish
eggs
dairy products
seeds and nuts
legumes like beans and lentils.<br/>
Proteins are made up of building blocks called amino acids. There are about 20 different amino acids that link together in different combinations. Your body uses them to make new proteins, such as muscle and bone, and other compounds such as enzymes and hormones. It can also use them as an energy source.

Some amino acids can be made by your body – there are 11 of these and they’re known as non-essential amino acids. There are 9 amino acids that your body cannot make, and they are known as essential amino acids. You need to include enough of these in your diet so that your body can function</p>
                </div>
            )
        })}
        </>
      )
}

export default Food5