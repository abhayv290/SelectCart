// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowCart } from '../Store/cartSlicer';

export default function Navbar() {
    const Cartqty = useSelector((state) => state.myCart.totalQty);
    const dispatch = useDispatch();

    // console.log(cnt);
    return (
        <div><nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">SelectCart</a>
                <div className="d-flex">
                    <button onClick={() => dispatch(setShowCart(true))} className='btn btn-primary' >CartItem: <b>{Cartqty}</b></button>
                </div>
            </div>
        </nav></div>
    )
}
