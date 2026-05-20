import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ImagesBox from './components/ImagesBox';

function App() {

  const [cartItems, setCartItems] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Navigation
        cartItems={cartItems}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        setCartItems={setCartItems}
      />

      <ImagesBox
        setCartItems={setCartItems}
        
      />
    </div>
  );
    
   
}

export default App;