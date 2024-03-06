import React from 'react'
import Navbar from './Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'


import Login from './Components/Login';
import Layout from './Components/Layout';
import Cart from './Components/Cart';

export default function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cartItem = useSelector(state => state.myCart.itemList)
  const showCart = useSelector(state => state.myCart.showCart);

  console.log(isLoggedIn, cartItem, showCart);



  // const { inc, dec } = bindActionCreators(dispatch, increase);
  return (
    <div className='bg-tertiary'>
      <Navbar />
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}
      {showCart && <Cart />}
    </div >
  )
}





