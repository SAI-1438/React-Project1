import React, { useContext } from 'react'
import { store } from '../StoreComponent/Store'
import { useNavigate } from 'react-router-dom';

const Fitness = () => {
    const [count] = useContext(store);
    const Navi=useNavigate();
    return (
        <>
        {count.filter((item) => item.cat === "Fitness").map((d,index)=>{
            return (
                <>
                <h1>FITNESS</h1>
                <hr/>
                <div className='topbox'>
                    <div>
                        <img onClick={()=>{Navi('/Fitness1')}} src={d.imgfit1} alt=''/>
                        <h2 onClick={()=>{Navi('/Fitness1')}}>{d.headingfit1}</h2>
                        <h3>Yoga is<br/> a group of physical, mental, and<br/> spiritual practices </h3>
                    </div>
                    <div>
                    <img onClick={()=>{Navi('/Fitness2')}} src={d.imgfit2} alt=''/>
                        <h2 onClick={()=>{Navi('/Fitness2')}}>{d.headingfit2}</h2>
                        <h3>Aerobics is<br/> a form of physical exercise that combines<br/> rhythmic aerobic exercise with stretching and<br/> strength training</h3>
                    </div>
                    <div>
                    <img onClick={()=>{Navi('/Fitness3')}} src={d.imgfit3} alt=''/>
                        <h2 onClick={()=>{Navi('/Fitness3')}}>{d.headingfit3}</h2>
                        <h3>Walking (also known as ambulation) is<br/> one of the main gaits of terrestrial<br/> locomotion among legged animals</h3>
                    </div>
                </div>
                <hr/>
                <div className='downbox'>
                    <div className='downlft'>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Fitness4')}} src={d.imgfit4} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Fitness4')}}>{d.headingfit4}</h2>
                               <br/>
                               <h3>Bodybuilding is<br/> the use of progressive resistance exercise<br/> to control and develop one's muscles </h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Fitness5')}} src={d.imgfit5} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Fitness5')}}>{d.headingfit5}</h2>
                               <br/>
                               <h3>Running is<br/> a method of terrestrial locomotion<br/> allowing humans and other animals to<br/> move rapidly on foot</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Fitness6')}} src={d.imgfit6} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Fitness6')}}>{d.headingfit6}</h2>
                               <br/>
                               <h3>Cycling, also, when on a <br/>two-wheeled bicycle, called bicycling or biking,<br/> is the use of cycles for transport, <br/>recreation, exercise or sport</h3>
                            </div>
                        </div>
                    </div>
                    <div className='downryt'>
                    <div className='advertisement'>
                    <div>Advertisement</div>
                    </div>
                    </div>
                </div>
                </>
              )
        })}
        </>
    )
}

export default Fitness