import logo from '../../../assets/img/Patient_Care_Logo.png';
import {useRef} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import './NavBar.css';

export const NavBar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="container">
        {/* <nav>
            <span className='imgMenu'>
              <img src={logo} alt="Logo Image" className='imgMenu'/>
            </span>
            <ul>
                <li><a href="">First Link</a></li>
                <li><a href="">Second Link</a></li>
                <li><a href="">Third Link</a></li>
                <li><a href="">Fourth Link</a></li>
                <li><a href="">Fifth Link</a></li>
                <AiOutlineClose className='imgMenu react-icons'/>
            </ul>
            <GiHamburgerMenu className='imgMenu react-icons'/>
        </nav> */}
        <header>
          <h3>Logo</h3>
          <nav ref={navRef} >
            <a href="">First</a>
            <a href="">Second</a>
            <a href="">Third</a>
            <a href="">Fourth</a>
            <a href="">Fifth</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <AiOutlineClose />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <GiHamburgerMenu />
          </button>
        </header>
    </div>
  )
}
