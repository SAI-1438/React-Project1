import React, { useContext} from 'react'
import { store } from '../StoreComponent/Store';

const Homet3 = () => {
    const [count] = useContext(store);
    return (
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
            return (
                <div className='imgpage'>
                    <h1>{d.headingtec3}</h1>
                    <img src={d.imgtec3} alt=''/>
                    <p>Nanotechnology, often shortened to nanotech, is the use of matter on atomic, molecular, and supramolecular scales for industrial purposes. The earliest, widespread description of nanotechnology referred to the particular technological goal of precisely manipulating atoms and molecules for fabrication of macroscale products, also now referred to as molecular nanotechnology.[1][2] A more generalized description of nanotechnology was subsequently established by the National Nanotechnology Initiative, which defined nanotechnology as the manipulation of matter with at least one dimension sized from 1 to 100 nanometers (nm). This definition reflects the fact that quantum mechanical effects are important at this quantum-realm scale, and so the definition shifted from a particular technological goal to a research category inclusive of all types of research and technologies that deal with the special properties of matter which occur below the given size threshold. It is therefore common to see the plural form "nanotechnologies" as well as "nanoscale technologies" to refer to the broad range of research and applications whose common trait is size.

Nanotechnology as defined by size is naturally broad, including fields of science as diverse as surface science, organic chemistry, molecular biology, semiconductor physics, energy storage,[3][4] engineering,[5] microfabrication,[6] and molecular engineering.[7] The associated research and applications are equally diverse, ranging from extensions of conventional device physics to completely new approaches based upon molecular self-assembly,[8] from developing new materials with dimensions on the nanoscale to direct control of matter on the atomic scale.

Scientists currently debate the future implications of nanotechnology. Nanotechnology may be able to create many new materials and devices with a vast range of applications, such as in nanomedicine, nanoelectronics, biomaterials energy production, and consumer products. On the other hand, nanotechnology raises many of the same issues as any new technology, including concerns about the toxicity and environmental impact of nanomaterials,[9] and their potential effects on global economics, as well as speculation about various doomsday scenarios. These concerns have led to a debate among advocacy groups and governments on whether special regulation of nanotechnology is warranted.
<br/>
Nanotechnology is the engineering of functional systems at the molecular scale. This covers both current work and concepts that are more advanced. In its original sense, nanotechnology refers to the projected ability to construct items from the bottom up, using techniques and tools being developed today to make complete, high-performance products.

One nanometer (nm) is one billionth, or 10−9, of a meter. By comparison, typical carbon-carbon bond lengths, or the spacing between these atoms in a molecule, are in the range 0.12–0.15 nm, and a DNA double-helix has a diameter around 2 nm. On the other hand, the smallest cellular life-forms, the bacteria of the genus Mycoplasma, are around 200 nm in length. By convention, nanotechnology is taken as the scale range 1 to 100 nm following the definition used by the National Nanotechnology Initiative in the US. The lower limit is set by the size of atoms (hydrogen has the smallest atoms, which are approximately a quarter of a nm kinetic diameter) since nanotechnology must build its devices from atoms and molecules. The upper limit is more or less arbitrary but is around the size below which the phenomena not observed in larger structures start to become apparent and can be made use of in the nano device.[21] These new phenomena make nanotechnology distinct from devices which are merely miniaturised versions of an equivalent macroscopic device; such devices are on a larger scale and come under the description of microtechnology.[22]

To put that scale in another context, the comparative size of a nanometer to a meter is the same as that of a marble to the size of the earth.[23] Or another way of putting it: a nanometer is the amount an average man's beard grows in the time it takes him to raise the razor to his face.[23]

Two main approaches are used in nanotechnology. In the "bottom-up" approach, materials and devices are built from molecular components which assemble themselves chemically by principles of molecular recognition.[24] In the "top-down" approach, nano-objects are constructed from larger entities without atomic-level control.[25]

Areas of physics such as nanoelectronics, nanomechanics, nanophotonics and nanoionics have evolved during the last few decades to provide a basic scientific foundation of nanotechnology.
                 </p>
                </div>
            )
        })}
        </>
      )
}

export default Homet3