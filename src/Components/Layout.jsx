// eslint-disable-next-line no-unused-vars
import React from 'react'
import Product from './Product'
import { setShowCart } from '../Store/cartSlicer';
import { useDispatch } from 'react-redux';
export default function Layout() {
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setShowCart(false))} >
            <h2 className='text-center'>My Shopping Cart</h2>
            <div className='container d-flex justify-content-between'>
                <Product name={'MacBook Pro 16'} id={23} desc={'A New Premium Laptop series From Apple '} price={2000} imgUrl={'https://i.ytimg.com/vi/uy-XHlB0z14/maxresdefault.jpg'} />
                <Product name={'MacBook Pro 15'} id={21} desc={'A New Premium Laptop series From Apple '} price={1800} imgUrl={'https://www.mactech.com/wp-content/uploads/2021/04/fb_image-154.jpeg'} />
                <Product name={'MacBook air 14'} id={22} desc={'A New Premium Laptop series From Apple '} price={1000} imgUrl={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000'} />
            </div>
        </div>
    )
}
