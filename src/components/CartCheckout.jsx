 
 import react from "react";
 import { useState } from "react";
 import iconDelete from '../assets/images/icon-delete.svg';
 import iconClose from '../assets/images/icon-close.svg';

 import shoppingItem from '../assets/images/image-product-1-thumbnail.jpg';
 
 export default function CartCheckout({cartItems, setCartItems, setCartOpen}) {



 function handleRemoveFromCart() {
  setCartItems(prev => Math.max(0, prev - 1));
}

function handleCheckout() {
  console.log("Proceeding to checkout");
}

 return (
   


 <div className="cart-checkout">

 
    {cartItems === 0 ? (
    <div className="cart-checkout__empty">
        <img src={iconClose} alt="close window" 
        className="close-icon__shopping_cart" 
        onClick={() => setCartOpen(false)}
        />
        <div className="cart-checkout__empty--content">
            <div className="cart-checkout__empty--icon">
                <h3>Cart</h3>
            </div>
        
          <p className="cart-checkout__empty--message">Your cart is empty.</p>
        </div>
     </div>

        ) : (
        <div className="cart-checkout__content">
                <h3>Cart</h3>
            <div className="cart-checkout__item">
                <div className="image-product">
                  <img src={shoppingItem} alt="product thumbnail" className="cart-checkout__thumbnail" />
                </div>
               <div className="cart-checkout__details">
                    <p className="cart-checkout__product-name">Fall Limited Edition Sneakers $125.00 x {cartItems}
                   <span className="cart-checkout__total"> ${125.00 * cartItems}</span></p>
               </div>
               <div className="cart-checkout__delete">
                    <button className="cart-checkout__action--remove" onClick={handleRemoveFromCart}>
                        <img src={iconDelete} alt="Remove item" />
                    </button>
               </div>
                           
           </div>
           
            <button className="cart-checkout__action cart-checkout__action--checkout" onClick={handleCheckout}>Checkout</button>
               
        </div>
 
    )}
    </div>
    );
}
    
    
