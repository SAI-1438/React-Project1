import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Bollywood6 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.heading6}</h1>
                    <img src={d.img6} alt=''/>
                    <p>Bholaa is a 2023 Indian Hindi-language action-adventure film[4][5][6] directed by Ajay Devgn and jointly produced by Ajay Devgn FFilms, Reliance Entertainment, T-Series Films and Dream Warrior Pictures. It is a remake of the 2019 Tamil film Kaithi and stars Devgn in the titular role alongside Tabu, Deepak Dobriyal, Sanjay Mishra, Gajraj Rao and Vineet Kumar while Amala Paul, Abhishek Bachchan and Raai Laxmi make special appearances. The film follows an ex-convict who battles criminals while transporting a truck full of poisoned cops to the hospital in exchange for meeting his daughter after ten years of imprisonment.

Principal photography took place from January 2022 to January 2023 in Mumbai, Hyderabad and Varanasi. The film score and soundtrack album are composed by Ravi Basrur, with cinematography by Aseem Bajaj and editing by Dharmendra Sharma. It was released on 30 March 2023 and opened to mixed reviews. It has grossed ₹111.64 crore (US$14 million) worldwide as of 4 May 2023, becoming the fifth-highest-grossing Hindi film of 2023.</p>
                </div>
            )
        })}
        </>
      )
}

export default Bollywood6