import React,{ useState} from 'react';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

import CartContextProvider from './context/CartContextProvider';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  }
  const closeCart = () => {
    setCartIsOpen(false);
  }
  return (
    <CartContextProvider>
      {cartIsOpen && <Cart onCloseCart={closeCart}/>}
      <Header onOpenCart={openCart}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
