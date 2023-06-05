import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Bollywood5 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.heading5}</h1>
                    <img src={d.img5} alt=''/>
                    <p>Bhool Bhulaiyaa (transl. Labyrinth) is a 2007 Indian Hindi-language psychological[4][5] comedy horror film directed by Priyadarshan from the screenplay by Neeraj Vora and produced by T Series. It is an official remake of the Malayalam film Manichitrathazhu (1993) by Fazil. The film stars Akshay Kumar, Vidya Balan, Shiney Ahuja, Ameesha Patel, Paresh Rawal, Rajpal Yadav, Manoj Joshi, Asrani and Vikram Gokhale.[6] The film score and soundtrack were composed by Ranjit Barot and Pritam respectively, with lyrics written by Sameer and Sayeed Quadri.

Made on a budget of ₹32 crore, Bhool Bhulaiyaa earned ₹82 crore worldwide, thus becoming the eighth-highest grossing Hindi film of 2007.[7] It received positive reviews from critics upon release, with praise for its direction, screenplay, humor, and soundtrack, with particular praise directed towards Kumar and Balan's performances. At the 53rd Filmfare Awards, Balan was nominated for Best Actress.

Over the years, the film has attained a cult status across the audience owing to Kumar's psychiatrist character, Balan's dual portrayal of Avni and Manjulika, and its music.[8][9] The film spawned a standalone sequel titled Bhool Bhulaiyaa 2 (2022) which was directed by Anees Bazmee starring Tabu, Kartik Aaryan, Kiara Advani and Rajpal Yadav.[10][11] Third sequel is set to be release on Diwali 2024 starring Kartik Aaryan</p>
                </div>
            )
        })}
        </>
      )
}

export default Bollywood5