import { Link } from "react-router-dom";
import './NavStyle.css';

// const menubtn=document.getElementById('menu')
// const headings=document.getElementsByClassName('headings')

// menubtn.addEventListener('click', () =>{
//   headings.classList.toggle('active')
// })
function Nav(){
    return(
        <>
      <div className='logo'>
        <div className='the'>The</div>
        <h1 className='siren'>Siren</h1>
      </div>
      <input type="checkbox" id='check'/>
        <label for='check'>
        <i class="fa-solid fa-bars fa-2xl" id="menu"></i>
        <i class="fa-solid fa-xmark fa-2xl" id="wrong"></i>
        </label>

      <br/>
      <div className='headings'>
        <ul>
          <li><Link className="link" to='/'><b>Home</b></Link></li>
          <li><Link className="link" to='/Bollywood'><b>Bollywood</b></Link></li>
          <li><Link className="link" to='/Technology'><b>Technology</b></Link></li>
          <li><Link className="link" to='/Hollywood'><b>Hollywood</b></Link></li>
          <li><Link className="link" to='/Fitness'><b>Fitness</b></Link></li>
          <li><Link className="link" to='/Food'><b>Food</b></Link></li>
        </ul>
      </div>
      <br/>
      <hr/>
      <br/>
      </>
    );
}
export default Nav;