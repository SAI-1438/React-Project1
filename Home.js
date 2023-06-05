import './HomeStyle.css';
import React, { useContext } from 'react'
import {store} from '../StoreComponent/Store';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [count] = useContext(store);
    const Navi=useNavigate();
    return(
        <>
        {count.filter((item) => item.cat === "Home").map((d,index)=>{
        return(
        <>
        <div className='grid'>
            <div className='box1'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h2>Explore -<br/>The Life</h2></div>
            <div className='box2'><br/><br/><br/>
            <h3>See <br/>Through a New Way</h3></div>
            <div className='box3'><br/><br/><br/>
            <h3>Learn<br/>How to Achieve</h3></div>
        </div>
        <h1 className='h1'>HOLLYWOOD</h1>
        <div className='latest'>
            <div>
            <img onClick={()=>{Navi('/Homeh1')}} src={d.imgh1} alt=''/>
            <h2 onClick={()=>{Navi('/Homeh1')}}>{d.headingh1}</h2>
            <h3>Some vengeful women plot to murder<br/> a monastery full of monks for enslaving <br/>their loved ones.</h3>
            </div>
            <div>
            <img onClick={()=>{Navi('/Homeh2')}} src={d.imgh2} alt=''/>
            <h2 onClick={()=>{Navi('/Homeh2')}}>{d.headingh2}</h2>
            <h3>training a group of younger Top Gun<br/> graduates, including the son of his deceased<br/> best friend, for a dangerous mission.</h3>
            </div>
            <div>
            <img onClick={()=>{Navi('/Homeh3')}} src={d.imgh3} alt=''/>
            <h2 onClick={()=>{Navi('/Homeh3')}}>{d.headingh3}</h2>
            <h3>Based on the DC Comics superhero,<br/> Batman.</h3>
            </div>
        </div>
        <hr/>
        <button onClick={()=>{Navi('./Hollywood')}}>View More--- </button>
        <h1 className='h1'>TECHNOLOGY</h1>
        <div className='Larticles'>
            <div className='articlebox1'>
                <hr/>
                <div className='box1s'>
                <img onClick={()=>{Navi('/Homet1')}} src={d.imgtec1} alt=''/>
                    <div>
                    <h2 onClick={()=>{Navi('/Homet1')}}>{d.headingtec1}</h2>
                   <h3>Screen Printing<br/>
                       3D Printing<br/>
                       Flexography
                    </h3>
                    </div>
                </div>
                <hr/>
                <div className='box1s'>
                <img onClick={()=>{Navi('/Homet2')}} src={d.imgtec2} alt=''/>
                    <div>
                    <h2 onClick={()=>{Navi('/Homet2')}}>{d.headingtec2}</h2>
                   <h3>Application Security<br/>
                       Network Security<br/>
                       Cloud Security
                    </h3>
                    </div>
                </div>
                <hr/>
                <div className='box1s'>
                <img onClick={()=>{Navi('/Homet3')}} src={d.imgtec3} alt=''/>
                    <div>
                    <h2 onClick={()=>{Navi('/Homet3')}}>{d.headingtec3}</h2>
                   <h3>Nano-Electronics<br/>
                       Nano-Medicine<br/>
                       Nano-Materials</h3>
                    </div>
                </div>
                <br/>
                <button onClick={()=>{Navi('/Technology')}}>View More--- </button>
            </div>
            <div className='articlebox2'>
                <div className='advtsmnt'><h2>Advertisement</h2></div>
            </div>
        </div>
        <h1 className='h1'>FITNESS</h1>
        <hr/>
        <br/>
        <div className='lststo'>
            <div className='bx x1'>
                <h2 onClick={()=>{Navi('/Homef')}}>{d.headingfit}</h2>
                <h3>Wake-Up Early Morning<br/>
                    Daily Walk atleast 30mins<br/>
                    Go for Sunlight about 20mins a day<br/>
                    Proper Diet Maintaining<br/>
                    Excersice for about 30mins a day<br/>
                    Meditation-Yoga
                </h3><br/>
            </div>
            <div className='bx x2'>
                <h2 onClick={()=>{Navi('/Homef')}}>{d.headingfit}</h2>
                <h3>Wake-Up Early Morning<br/>
                    Daily Walk atleast 30mins<br/>
                    Go for Sunlight about 20mins a day<br/>
                    Proper Diet Maintaining<br/>
                    Excersice for about 30mins a day<br/>
                    Meditation-Yoga
                </h3><br/>
            </div>
            <div className='bx x3'>
                <h2 onClick={()=>{Navi('/Homef')}}>{d.headingfit}</h2>
                <h3>Wake-Up Early Morning<br/>
                    Daily Walk atleast 30mins<br/>
                    Go for Sunlight about 20mins a day<br/>
                    Proper Diet Maintaining<br/>
                    Excersice for about 30mins a day<br/>
                    Meditation-Yoga
                </h3><br/>
            </div>
        </div>
        <br/>
        <hr/>
        <button onClick={()=>{Navi('/Fitness')}}>View More--- </button>
        <br/><br/>
        </>
    )
        })}
        </>
    )
}
export default Home;