// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from '../Store/cartSlicer';
export default function Cart() {
    const itemList = useSelector(state => state.myCart.itemList);
    const Cartqty = useSelector((state) => state.myCart.totalQty);
    const Total_Price = useSelector((state) => state.myCart.Total_Price);
    const dispatch = useDispatch();
    const increase = (id, price) => {
        dispatch(updateCart({
            id: id,
            qty: 1,
            price: price
        }))
    }


    const decrease = (id, price) => {
        dispatch(updateCart({
            id: id,
            qty: -1,
            price: -price
        }))
    }
    return (
        <div className='container d-flex flex-column border my-5 justify-content-center bg-primary-subtle '>
            {itemList.map((item, index) => (
                <div key={index} className='d-flex my-2 border border-2 shadow rounded  align-items-center justify-content-evenly'>
                    <img style={{ width: '10rem' }} className=' p-2  rounded ' src={item.img} alt="img" />
                    <h6>{item.name}</h6>
                    <h6>{item.qty}</h6>
                    <strong>${item.totalPrice}</strong>
                    <button onClick={() => increase(item.id, item.price)} className='btn btn-success'>+</button>
                    <button disabled={(itemList.find((it) => it.id === (item.id))).qty ? false : true} onClick={() => decrease(item.id, item.price)} className='btn btn-danger'>-</button>
                </div>
            ))}
            <div className='d-flex justify-content-between my-4'>
                <h3>TotalQty: {Cartqty}</h3>
                <h3>TotalPrice: ${Total_Price}</h3>
            </div>
        </div>
    )
}
