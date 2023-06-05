import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div>
            <div className='footerlogo'>
                <div className='the'>The</div>
                <h1 className='siren'>Siren</h1>
            </div>
        </div>
        <div>
            <h2>References</h2>
            <br/>
                <h4>Bollywood</h4>
                <h4>Technology</h4>
                <h4>Hollywood</h4>
                <h4>Fitness</h4>
                <h4>Food</h4>
        </div>
        <div>
            <div className='Socialmedia'>
            <h2>Social Media</h2>
            <br/>
            <i class="fa-brands fa-facebook">&nbsp;&nbsp;Facebook</i><br/>
            <i class="fa-brands fa-instagram">&nbsp;&nbsp;Instagram</i><br/>
            <i class="fa-brands fa-twitter">&nbsp;&nbsp;Twitter</i><br/>
            <i class="fa-brands fa-linkedin">&nbsp;&nbsp;Linked-in</i>
            </div>
        </div>
        <div>
            <div className='Contactus'>
            <h2>Contact-Us</h2>
            <br/>
            <i class="fa-solid fa-location-dot">&nbsp;&nbsp;Hyderabad</i><br/>
            <i class="fa-solid fa-phone">&nbsp;&nbsp;+91 ***55555**</i><br/>
            <i class="fa-solid fa-envelope">&nbsp;&nbsp;bsk@gmail.com</i>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
