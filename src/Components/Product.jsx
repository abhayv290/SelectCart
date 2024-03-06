import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Store/cartSlicer';
import PropTypes from 'prop-types';
export default function Product({ name, id, imgUrl, price, desc }) {


    const dispatch = useDispatch();
    const addCart = () => {
        dispatch(addToCart({
            id,
            name,
            price,
            imgUrl
        }))
    }

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: ${price} </h6>
                    <p className="card-text">{desc}</p>
                    <button onClick={addCart} className="btn btn-primary">Add to Cart </button>
                </div>
            </div>
        </div>
    )
}
Product.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
};