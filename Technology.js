import React, { useContext } from 'react'
import { store } from '../StoreComponent/Store'
import { useNavigate } from 'react-router-dom';

const Technology = () => {
    const [count] = useContext(store);
    const Navi=useNavigate();
    return(
        <>
        {count.filter((item) => item.cat === "Technology").map((d,index)=>{
            return (
                <>
                <h1>TECHNOLOGY</h1>
                <hr/>
                <div className='topbox'>
                    <div>
                        <img onClick={()=>{Navi('/Technology1')}} src={d.imgtech1} alt=''/>
                        <h2 onClick={()=>{Navi('/Technology1')}}>{d.headingtech1}</h2>
                        <h3>Artificial intelligence (AI) is <br/>intelligence—perceiving, synthesizing, and <br/>inferring information—demonstrated<br/> by machines</h3>
                    </div>
                    <div>
                    <img onClick={()=>{Navi('/Technology2')}} src={d.imgtech2} alt=''/>
                        <h2 onClick={()=>{Navi('/Technology2')}}>{d.headingtech2}</h2>
                        <h3>Robotics is an interdisciplinary<br/> branch of computer science and engineering</h3>
                    </div>
                    <div>
                    <img onClick={()=>{Navi('/Technology3')}} src={d.imgtech3} alt=''/>
                        <h2 onClick={()=>{Navi('/Technology3')}}>{d.headingtech3}</h2>
                        <h3>Machine learning (ML) is<br/> a field devoted to understanding and <br/>building methods that let machines "learn"</h3>
                    </div>
                </div>
                <hr/>
                <div className='downbox'>
                    <div className='downlft'>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Technology4')}} src={d.imgtech4} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Technology4')}}>{d.headingtech4}</h2>
                               <br/>
                               <h3>Biotechnology is<br/> a multidisciplinary field that involves<br/> the integration of natural sciences and <br/>engineering sciences</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Technology5')}} src={d.imgtech5} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Technology5')}}>{d.headingtech5}</h2>
                               <br/>
                               <h3>Information technology (IT) is <br/>the use of computers to create,<br/> process, store, retrieve and exchange<br/> all kinds of data and information</h3>
                            </div>
                        </div>
                        <hr/>
                        <div className='lftbox'>
                            <img onClick={()=>{Navi('/Technology6')}} src={d.imgtech6} alt=''/>
                            <div>
                               <h2 onClick={()=>{Navi('/Technology6')}}>{d.headingtech6}</h2>
                               <br/>
                               <h3>Automation describes <br/>a wide range of technologies<br/> that reduce human intervention in <br/>processes</h3>
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

export default Technology