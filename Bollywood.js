import React, { useContext } from 'react'
import './Bollywood.css';
import {store} from '../StoreComponent/Store';
import { useNavigate } from 'react-router-dom';

const Bollywood = () => {
    const [count] = useContext(store);
    const Navi=useNavigate();
  return (
    <>
    {count.filter((item) => item.cat === "Bollywood").map((d,index)=>{
        return(
            <>
            <h1>BOLLYWOOD</h1>
            <hr/>
        <div className='topbox'>
        <div>
            <img onClick={()=>{Navi('/Bollywood1')}} src={d.img1} alt=''/>
            <h2 onClick={()=>{Navi('/Bollywood1')}}>{d.heading1}</h2>
            <h3>War is<br/> a 2019 Indian Hindi-language<br/> action thriller film</h3>
        </div>
        <div>
        <img onClick={()=>{Navi('/Bollywood2')}} src={d.img2} alt=''/>
            <h2 onClick={()=>{Navi('/Bollywood2')}}>{d.heading2}</h2>
            <h3>Pathaan is<br/> a 2023 Indian Hindi-language<br/> action thriller film </h3>
        </div>
        <div>
        <img onClick={()=>{Navi('/Bollywood3')}} src={d.img3} alt=''/>
            <h2 onClick={()=>{Navi('/Bollywood3')}}>{d.heading3}</h2>
            <h3>Brahmāstra is<br/> a 2022 Indian Hindi-language <br/>fantasy action-adventure film</h3>
        </div>
    </div>
    <hr/>
    <div className='downbox'>
        <div className='downlft'>
            <div className='lftbox'>
                <img onClick={()=>{Navi('/Bollywood4')}} src={d.img4} alt=''/>
                <div>
                   <h2 onClick={()=>{Navi('/Bollywood4')}}>{d.heading4}</h2>
                   <br/>
                   <h3>Gangubai Kathiawadi is <br/>a 2022 Indian Hindi-language <br/>biographical crime drama film</h3>
                </div>
            </div>
            <hr/>
            <div className='lftbox'>
                <img onClick={()=>{Navi('/Bollywood5')}} src={d.img5} alt=''/>
                <div>
                   <h2 onClick={()=>{Navi('/Bollywood5')}} >{d.heading5}</h2>
                   <br/>
                   <h3>Bhool Bhulaiyaa 2 is<br/> a 2022 Indian Hindi-language<br/> comedy horror film</h3>
                </div>
            </div>
            <hr/>
            <div className='lftbox'>
                <img onClick={()=>{Navi('/Bollywood6')}} src={d.img6} alt=''/>
                <div>
                   <h2 onClick={()=>{Navi('/Bollywood6')}}>{d.heading6}</h2>
                   <br/>
                   <h3>Bholaa is<br/> a 2023 Indian Hindi-language<br/> action-adventure film</h3>
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

export default Bollywood