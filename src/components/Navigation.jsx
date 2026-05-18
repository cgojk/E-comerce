
import logo from '../assets/images/logo.svg';
import shoppingCart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import hamburger from '../assets/images/icon-menu.svg';
import closeIcon from '../assets/images/icon-close.svg';

import { useState } from "react";


export default function Navigation() {
   

const[menuOpen,setMenuOpen]= useState(false);


 // close the menu when clicking outside

  function handleLinkClick(){
    setMenuOpen(false);
  }

  function handleOverlayClick() {
    setMenuOpen(false);
  }
    // if (menuOpen && event.target.classList.contains("overlay")) {
    //   setActiveOverlay(true);
    // }
    

//  function handleOverlayclick(event) {
//  if (menuOpen && event.target.classList.contains("overlay")) {
//     event.target.classList.add("active");
//  }else{
    
//     event.target.classList.remove("active");
//     setMenuOpen(false);
//  }
// }



/* <section className={`navigation-section overlay ${menuOpen ? "overlay--active" : ""}`} onClick={handleOverlayclick}></section> */



 return (
<>
<section className={` overlay ${menuOpen ? "active" : ""}`} 
onClick={handleOverlayClick}>

</section>


    

<header className="header ">
    
    <div className="header__inner">
               

            {/* hamburguer button only visible on mobile */}
            

            <button
                className="menu-btn"
                aria-label="toggle menu"
                onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(!menuOpen)
                }}
              
            >
            {menuOpen ? 
            <img src={closeIcon} alt="Close Icon" /> :
             <img src={hamburger} alt="Hamburger Menu Icon" />}
            </button>

            {/* Nav list, toggled open on mobile */}
             <a href="/" className="nav-logo">
                <img src={logo} className=" nav-logo" alt="a pair of sneakers shoes" />
                </a>

        <nav className="navigation" aria-label="homepage Navigation">
                
                <ul className={`nav__list ${menuOpen ? "open" : ""}`}
                    onClick={(e)=>e.stopPropagation()}
                   >
                    <li className="nav__items">

                        <a href="/Collections" 
                        onClick={handleLinkClick}
                        className="nav__items__links">Collections</a>
                    </li>
                    <li className="nav__items">
                        <a href="/team" 
                        onClick={handleLinkClick}
                        className="nav__items__links">Men</a>
                    </li>
                    <li className="nav__items">
                        <a href="/sign-in" 
                        onClick={handleLinkClick}
                        className="nav__items__links">Women</a>
                    </li>
                    <li className="nav__items">
                        <a href="/about" 
                        onClick={handleLinkClick}
                        className="nav__items__links">About</a>
                    </li>
                    <li className="nav__items">
                        <a href="/contact" 
                        onClick={handleLinkClick}
                        className="nav__items__links">Contact</a>
                    </li>
                </ul>
            </nav>
    </div>
    <div className="shopping-cart">
        <img className="shopping-cart-icon" src={shoppingCart} alt="shopping cart icon" />
        <img src={avatar} alt="avatar icon" className="avatar" />
    </div>
 </header>

</>
    )
}




