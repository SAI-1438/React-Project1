import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Food3 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Food").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingfod3}</h1>
                    <img src={d.imgfod3} alt=''/>
                    <p>Starch or amylum is a polymeric carbohydrate consisting of numerous glucose units joined by glycosidic bonds. This polysaccharide is produced by most green plants for energy storage. Worldwide, it is the most common carbohydrate in human diets, and is contained in large amounts in staple foods such as wheat, potatoes, maize (corn), rice, and cassava (manioc).

Pure starch is a white, tasteless and odorless powder that is insoluble in cold water or alcohol. It consists of two types of molecules: the linear and helical amylose and the branched amylopectin. Depending on the plant, starch generally contains 20 to 25% amylose and 75 to 80% amylopectin by weight.[4] Glycogen, the energy reserve of animals, is a more highly branched version of amylopectin.

In industry, starch is often converted into sugars, for example by malting. These sugars may be fermented to produce ethanol in the manufacture of beer, whisky and biofuel. In addition, sugars produced from processed starch are used in many processed foods.

Mixing most starches in warm water produces a paste, such as wheatpaste, which can be used as a thickening, stiffening or gluing agent. The principal non-food, industrial use of starch is as an adhesive in the papermaking process. A similar paste, clothing starch, can be applied to certain textile goods before ironing to stiffen them.</p>
                </div>
            )
        })}
        </>
      )
}

export default Food3