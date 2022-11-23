import React, { useState } from 'react'
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import CartProvider from './Components/Store/CartProvider'

function App() {
  const [showCartModel, SetShowCartModel] = useState(false)

  const showCartHandler = () => {
    SetShowCartModel(true)
  }

  const hideCartHandle = () => {
    SetShowCartModel(false)
  }

  return (
    <CartProvider>
      {showCartModel && <Cart hideCart={hideCartHandle} />}
      <Header showCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
