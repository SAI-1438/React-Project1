import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homeh1 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingh1}</h1>
                    <img src={d.imgh1} alt=''/>
                    <p>The siege of Paris of 845 was the culmination of a Viking invasion of West Francia. The Viking forces were led by a Norse chieftain named "Reginherus", or Ragnar, who tentatively has been identified with the legendary saga character Ragnar Lodbrok. Reginherus's fleet of 120 Viking ships, carrying thousands of warriors, entered the Seine in March and sailed up the river.

The Frankish king Charles the Bald assembled a smaller army in response but after the Vikings defeated one division, comprising half of the army, the remaining forces retreated. The Vikings reached Paris at the end of the month, during Easter. They plundered and occupied the city, withdrawing after Charles the Bald paid a ransom of 7,000 French livres [2,570 kg (83,000 ozt)] in gold and silver.
                        <br/>The Frankish Empire was first attacked by Viking raiders in 799 (ten years after the earliest-known Viking attack at Portland, Dorset, in England), which led Charlemagne to create a defence system along the northern coast in 810. The defence system repulsed a Viking attack at the mouth of the Seine in 820 (after Charlemagne's death) but failed to hold against renewed attacks of Danish Vikings in Frisia and Dorestad in 834.[1] The attacks in 820 and 834 were unrelated and relatively minor; systematic raiding did not begin until the mid-830s, with the activity alternating between the two sides of the English Channel.[2] Viking raids were often part of struggles among Scandinavian nobility for power and status.[3] Like other nations adjacent to the Franks, the Danes were well informed about the political situation in France; in the 830s and early 840s they took advantage of the Frankish civil wars.[4] Large raids took place in Antwerp and Noirmoutier in 836, in Rouen (on the Seine) in 841 and in Quentovic and Nantes in 842.</p>
                </div>
            )
        })}
        </>
      )
}

export default Homeh1