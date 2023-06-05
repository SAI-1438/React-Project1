import React, { useContext } from 'react'
import { store } from '../StoreComponent/Store'
import { useNavigate } from 'react-router-dom';

const Food = () => {
    const [count] = useContext(store);
    const Navi=useNavigate();
    return (
        <>
        {count.filter((item) => item.cat === "Food").map((d,index)=>{
            return (
                <>
                <h1>FOOD</h1>
                <hr/>
                <div className='topbox'>
                    <div>
                        <img onClick={()=>{Navi('/Food1')}} src={d.imgfod1} alt=''/>
                        <h2 onClick={()=>{Navi('/Food1')}}>{d.headingfod1}</h2>
                        <h3>High in fibre content<br/>Regulates blood pressure<br/>Hydrates the body</h3>
                    </div>
                    <div>
                    <img onClick={()=>{Navi('/Food2')}} src={d.imgfod2} alt=''/>
                        <h2 onClick={()=>{Navi('/Food2')}}>{d.headingfod2}</h2>
                        <h3>Lower Risk of Heart Disease<br/>Lower Blood Pressure<br/>Diabetes Control</h3>
                    </div>
                    <div>
                    <img onClick={()=>{Navi('/Food3')}} src={d.imgfod3} alt=''/>
                        <h2 onClick={()=>{Navi('/Food3')}}>{d.headingfod3}</h2>
                        <h3>It’s Good for Your Gut<br/>It Tames Hunger<br/>It Steadies Energy Levels</h3>
                    </div>
                </div>
                <hr/>
                <div className='downbox'>
                    <div className='downlft'>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Food4')}} src={d.imgfod4} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Food4')}}>{d.headingfod4}</h2>
                               <br/>
                               <h3>Reducing the risks of diseases<br/>Muscle mass and hydration<br/>Weight management</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Food5')}} src={d.imgfod5} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Food5')}}>{d.headingfod5}</h2>
                               <br/>
                               <h3>Muscle development<br/>Improved immune system<br/>Help in hormone balance<br/>Makes skin healthy</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Food6')}} src={d.imgfod6} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Food6')}}>{d.headingfod6}</h2>
                               <br/>
                               <h3>Source of Iron and Protein<br/>Better Health And Fitness<br/>Rich in Protein<br/>Sharpen Your Mind</h3>
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

export default Food