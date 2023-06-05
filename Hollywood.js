import React, { useContext } from 'react'
import { store } from '../StoreComponent/Store'
import { useNavigate } from 'react-router-dom';

const Hollywood = () => {
    const [count] = useContext(store);
    const Navi=useNavigate();
    return(
        <>
        {count.filter((item) => item.cat === "Hollywood").map((d,index)=>{
    return (
    <>
    <h1>HOLLYWOOD</h1>
    <hr/>
    <div className='topbox'>
        <div>
            <img onClick={()=>{Navi('/Hollywood1')}} src={d.imghol1} alt=''/>
            <h2 onClick={()=>{Navi('/Hollywood1')}}>{d.headinghol1}</h2>
            <h3>Inception is<br/> a 2010 science fiction action film</h3>
        </div>
        <div>
        <img onClick={()=>{Navi('/Hollywood2')}} src={d.imghol2}  alt=''/>
            <h2 onClick={()=>{Navi('/Hollywood2')}} >{d.headinghol2}</h2>
            <h3>Harry Potter is<br/> a 2011 fantasy film </h3>
        </div>
        <div>
        <img onClick={()=>{Navi('/Hollywood3')}} src={d.imghol3}  alt=''/>
            <h2 onClick={()=>{Navi('/Hollywood3')}}>{d.headinghol3}</h2>
            <h3>Mad Max: Fury Road is <br/> a 2015 Australian post-apocalyptic action film</h3>
        </div>
    </div>
    <hr/>
    <div className='downbox'>
        <div className='downlft'>
            <div className='lftbox'>
                <img onClick={()=>{Navi('/Hollywood4')}} src={d.imghol4}  alt=''/>
                <div>
                   <h2 onClick={()=>{Navi('/Hollywood4')}}>{d.headinghol4}</h2>
                   <br/>
                   <h3>Avatar: The Way of Water is <br/>a 2022 American epic science fiction film</h3>
                </div>
            </div>
            <hr/>
            <div className='lftbox'>
                <img onClick={()=>{Navi('/Hollywood5')}} src={d.imghol5}  alt=''/>
                <div>
                   <h2 onClick={()=>{Navi('/Hollywood5')}}>{d.headinghol5}</h2>
                   <br/>
                   <h3>The Lord of the Rings: Return of King is<br/> a 2003 epic fantasy adventure film</h3>
                </div>
            </div>
            <hr/>
            <div className='lftbox'>
                <img onClick={()=>{Navi('/Hollywood6')}} src={d.imghol6}  alt=''/>
                <div>
                   <h2 onClick={()=>{Navi('/Hollywood6')}}>{d.headinghol6}</h2>
                   <br/>
                   <h3>Aladdin is<br/> a 2019 American musical fantasy film</h3>
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
  )})}
        </>
    )
}

export default Hollywood