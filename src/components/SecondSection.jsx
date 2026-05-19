import React from "react";

import shoppingCart from "../assets/images/icon-cart.svg";

import imageminus from "../assets/images/icon-minus.svg";
import imageplus from "../assets/images/icon-plus.svg";


export default function SecondSection(){
    return (
<section className="Information container">
     <div className="Info__inner ">
        <h3 className="Info__title">Sneaker Company</h3>
        <h1 className="Info__product">Fall Limited Edition Sneakers</h1>
        <p className="Info__description">These low-profile sneakers are your perfect 
            casual wear companion. Featuring a
            durable rubber outer sole, they’ll
            withstand everything the weather can offer.</p>
     </div>
        
<div className="Info__price">
        
            <div className="price__current">
                    <div className="priceDiscount">
                      <span className="price__current--number">$125.00</span>
                      <span className="price__current--discount">50%</span>
                    </div>
                    <div className="current__price">
                      <span className="price__current--original">$250.00</span>
                    </div>
             </div>

    <div className="Info__add-to-cart">
                <div className="price__quantity">
                        <button className="quantity__button quantity__button--minus">
                            <img src={imageminus} alt="minus icon" />
                        </button>
                        <span className="quantity__number">0</span>
                        <button className="quantity__button quantity__button--plus">
                            <img src={imageplus} alt="plus icon" />
                        </button>
                </div>
           
                        <button className="price__add-to-cart">
                            <img className="add-to-cart__icon" src={shoppingCart} alt="shopping cart icon" />
                            <span className="add-to-cart__text">Add to cart</span>
                        </button>
                
        </div>
</div>
</section>
    )
}
     
         
